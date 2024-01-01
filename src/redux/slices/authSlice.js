"use client"
const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  userInfo: null,
  token:null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const res = action.payload
      state.userInfo = res
    },
    setToken: (state, action) => {
      const res = action.payload
      state.token = res
    },
    logout: (state) => {
      state.userInfo = null
      state.token = null
  },
  }
})

export const { setCredentials, logout, setToken } = authSlice.actions
export default authSlice.reducer

// testing di halaman login