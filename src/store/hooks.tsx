// React redux
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

// Store
import type { RootState, AppDispatch } from "./store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
