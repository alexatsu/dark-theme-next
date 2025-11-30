"use client";

import { useCounterStore } from "@/app/_/store/slices/counter/hook";

export function Counters() {
  const { count, increment, decrement } = useCounterStore();

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <button aria-label="Increment value" onClick={increment}>
        Increment
      </button>
      <span>{count}</span>
      <button aria-label="Decrement value" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
