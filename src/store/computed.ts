import { calculateHarris, calculateMifflin } from "../utils/calculation";
import { $caloryStore } from "./store";

export const $calories = $caloryStore.map((store) => {
  const result =
    store.mode === "mifflin" ? calculateMifflin(store) : calculateHarris(store);

  if (store.goal === "down") {
    return result * 0.8;
  }

  if (store.goal === "up") {
    return result * 1.16;
  }

  return result;
});
