import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    datamuse: {}
}

const userManagementSlice = createSlice({
    name: "UserManagement",
    initialState,
    reducers: {}
})

export const {
    initSubscriberSlice,
    updateSubscribers,
    setVisibilityFilter,
    updateCurrentAccessNumber,
    updateCSVDetails,
    updateNewSubscriberDetails,
    addAnotherSubscriberInput,
    validateField,
    clearDetails,
    removeSubscriberInputField,
    updateErrorMessage,
    fetchSelectedInList
} = userManagementSlice.actions;

export default userManagementSlice.reducer;