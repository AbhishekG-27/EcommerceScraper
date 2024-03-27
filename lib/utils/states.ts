import { atom } from "recoil";

const trackedItems = atom({
  key: "trackedItems",
  default: [],
});

export { trackedItems };
