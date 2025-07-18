import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchMenuData } from '../../network/NetworkManager';
import { insertMenuItems, getMenuItems } from '../sql/MenuItemsDB';

export const fetchAndCacheMenu = createAsyncThunk('menu/fetchAndCacheMenu', async () => {
    const response = await fetchMenuData();
    await insertMenuItems(response);
    return response;
});

export const loadMenuFromDb = createAsyncThunk('menu/loadMenuFromDb', async () => {
    return await getMenuItems();
});

type MenuState = {
    items: ReturnType<typeof getMenuItems> extends Promise<infer T> ? T : any[];
    loading: boolean;
    error: string | null;
};

const initialState: MenuState = {
    items: [],
    loading: false,
    error: null,
};

const menuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAndCacheMenu.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAndCacheMenu.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(fetchAndCacheMenu.rejected, (state, action) => {
                state.error = action.error.message || 'Error';
                state.loading = false;
            })
            .addCase(loadMenuFromDb.pending, (state) => {
                state.loading = true;
            })
            .addCase(loadMenuFromDb.fulfilled, (state, action) => {
                state.items = action.payload;
                state.loading = false;
            })
            .addCase(loadMenuFromDb.rejected, (state, action) => {
                state.error = action.error.message || 'Error';
                state.loading = false;
            });
    },
});

export default menuSlice.reducer;