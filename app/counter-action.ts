import { createAction} from "@ngrx/store";

export const increment=createAction('[CounterComponent] Increment');
export const decrement=createAction('[CounterComponent] Decrement');
export const reset=createAction('[counterComponent] Reset');