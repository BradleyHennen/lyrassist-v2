import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isLoginModalOpen: false,
    isCreateNew: false,
};

const loginSlice = createSlice({
    name: "Login",
    initialState,
    reducers: {
        toggleCreateNew(state, action) {
            state.isCreateNew = action.payload
        },
        toggleLoginModal(state, action) {
            state.isLoginModalOpen = action.payload
        }
    },
});

export const {
    toggleCreateNew,
    toggleLoginModal
} = loginSlice.actions;

export default loginSlice.reducer;