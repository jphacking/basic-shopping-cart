// File: /store/hooks.ts

// These hooks provide TypeScript-typed versions of useDispatch and useSelector.
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// A typed version of useDispatch.
export const useAppDispatch = () => useDispatch<AppDispatch>();
// A typed version of useSelector.
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
