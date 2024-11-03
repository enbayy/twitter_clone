import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: 'enbay',
        fullName: 'enes',
        avatar: 'https://pbs.twimg.com/profile_images/1775365313996972033/UOAQarfj_400x400.jpg',
    },
    accounts: [
        {
            id: 1,
            username: 'enbay',
            fullName: 'enes',
            avatar: 'https://pbs.twimg.com/profile_images/1775365313996972033/UOAQarfj_400x400.jpg',
        },
        {
            id: 2,
            username: 'asd',
            fullName: 'das',
            avatar: 'https://pbs.twimg.com/profile_images/1775365313996972033/UOAQarfj_400x400.jpg',
        },
    ]
}

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        _addAccounts: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, aciton) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAcoount && action.payload === state.currentAcoount.id) {
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const { _addAccounts, _setCurrentAccount, _removeAccount } = auth.actions

export default auth.reducer