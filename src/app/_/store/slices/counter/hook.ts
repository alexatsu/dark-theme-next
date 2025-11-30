import { useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/app/_/lib/hooks";
import { increment, decrement, incrementByAmount } from "./counter";
import { RootState } from "@/app/_/store/store";

export const useCounterStore = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state: RootState) => state.counter.value);

  return {
    count: value,
    increment: useCallback(() => dispatch(increment()), [dispatch]),
    decrement: useCallback(() => dispatch(decrement()), [dispatch]),
    incrementByAmount: useCallback(
      (amount: number) => dispatch(incrementByAmount(amount)),
      [dispatch]
    ),
  };
};
