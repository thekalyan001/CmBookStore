import { createSlice } from '@reduxjs/toolkit'
import { toast } from 'react-toastify';

const loadFromLocalStorage = () => {
    try {
        const loginStates = localStorage.getItem('loginState');
        if (loginStates == null) {  //default state value.
            return {
                isLoggedin: false,
                profilePhoto: null,
            };
        }
        return JSON.parse(loginStates);
    } catch (err) {
        console.log("Failed to load states from localstorage: (loginSlice.js");
        return {
            isLoggedin: false,
            profilePhoto: null,
        };
    }
};

const saveStateToLocalStorage = (state) => {
    try {
        const loginStates = JSON.stringify(state);
        localStorage.setItem('loginState', loginStates);
    } catch (err) {
        console.error('Failed to save state to local storage', err);
    }
}
const initialState = loadFromLocalStorage();

// const initialState = { // Change this line
//     isLoggedin: false,
//     profilePhoto: null,
// };

const loginDetailSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        changeLoginStatus(state, action) {
            state.isLoggedin = action.payload;
            state.profilePhoto = action.payload.profilePhoto;
            saveStateToLocalStorage(state);
        },
        OnLogout(state) {
            state.isLoggedin = false;
            state.profilePhoto = null;
            saveStateToLocalStorage(state);
            toast.success("You are logged out!");
        },
    },
});

export const { changeLoginStatus, OnLogout } = loginDetailSlice.actions;
export default loginDetailSlice.reducer;