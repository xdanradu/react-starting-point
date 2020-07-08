import { INCREMENTED } from "./actionTypes";

export default function reducer(state, action) {
  if (action.type === INCREMENTED) {
    const incCounters = [...state.counters];
    const index = incCounters.indexOf(action.payload.counter);
    incCounters[index] = { ...action.payload.counter };
    incCounters[index].value+=2;
    return { counters: incCounters };
  }
  return {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 1 },
      { id: 3, value: 2 },
    ],
  };
}
