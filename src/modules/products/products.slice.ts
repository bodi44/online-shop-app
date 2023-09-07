import { IProductCardItem, TUpdateProductCardItemPayload } from '@/modules/products/products.types';
import { createEntityAdapter, createSlice, PayloadAction, Update } from '@reduxjs/toolkit';

const productsAdapter = createEntityAdapter<IProductCardItem>({
  selectId: (model) => model.id,
});

const initialState = productsAdapter.getInitialState();

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProductToCard: (state, action: PayloadAction<IProductCardItem>) => {
      productsAdapter.addOne(state, action.payload);
    },
    updateExistingProductInCardById: (state, action: PayloadAction<Update<IProductCardItem>>) => {
      productsAdapter.updateOne(state, action.payload);
    },
  },
});

// Actions
export const { addProductToCard, updateExistingProductInCardById } = productsSlice.actions;

// Selectors
export const { selectAll: selectAllProductsInCard, selectById: selectProductInCardById } =
  productsAdapter.getSelectors();

export default productsSlice.reducer;
