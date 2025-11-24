import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

import { locations } from "#constants";

const DEFAULT_LOCATION = locations.work;

const findLocationById = (id, locationsObj = locations) => {
  // First, check ONLY top-level locations (work, about, resume, trash)
  for (const loc of Object.values(locationsObj)) {
    if (loc.id === id) return loc;
  }
  
  // Then check children recursively
  for (const loc of Object.values(locationsObj)) {
    if (loc.children) {
      for (const child of loc.children) {
        if (child.id === id) return child;
        
        // Check nested children
        if (child.children) {
          const found = child.children.find(item => item.id === id);
          if (found) return found;
        }
      }
    }
  }
  return null;
};

const useLocationStore = create(
  immer((set) => ({
    activeLocation: DEFAULT_LOCATION,

    setActiveLocation: (locationId = null) => {
      set((state) => {
        if (!locationId) return;
        const location = findLocationById(locationId);
        if (location) {
          state.activeLocation = location;
        }
      });
    },
    resetActiveLocation: () =>
      set((state) => {
        state.activeLocation = DEFAULT_LOCATION;
      }),
  })),
);

export default useLocationStore;