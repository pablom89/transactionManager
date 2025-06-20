import { writable } from "svelte/store";

export const contract = (x) => {
  
  const initialState = JSON.stringify(x);
    
  const { subscribe, set, update } = writable(x);

  return {
    subscribe,
    set,
    update,
    actualizar: (x) => {
      update((n) => ({ ...n, ...x }));
    },
    reset: () => set(JSON.parse(initialState)),
  };
};
