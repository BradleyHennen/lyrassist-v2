import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    newSubscriberDetails: {
        userName: '',
        emailAddress: '',
        password: '',
        confirmPassword: ''
    },
    loginDetails: {
        userName: '',
        password: ''
    }

};

const loginSlice = createSlice({
    name: "ReachNow__Subscribers",
    initialState,
    reducers: {
        updateNewRegisterDetails(state, action) {
            const { value, name, id } = action.payload
            const test = state.newSubscriberDetails.map(item => {
                if (item.id === id) {
                    return {
                        ...item,
                        [name]: value
                    }
                }
                else {
                    return { ...item }
                }
            })

            state.newSubscriberDetails = test;
        },
    },
});

export const {
    updateNewRegisterDetails,
} = loginSlice.actions;

export default loginSlice.reducer;