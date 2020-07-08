import { INCREMENTED } from "./actionTypes";

export const incremented = (counter) => ({
  type: INCREMENTED,
  payload: {
    counter: counter,
  },
});
