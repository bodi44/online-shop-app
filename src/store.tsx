import { combineReducers, configureStore } from '@reduxjs/toolkit';
import productsReducer from '@/modules/products/products.slice';
import { useDispatch, TypedUseSelectorHook, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  products: productsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export function useAppDispatch(): AppDispatch {
  return useDispatch<AppDispatch>();
}

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
