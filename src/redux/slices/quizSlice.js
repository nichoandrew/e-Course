"use client"
const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  currentStep: 1,
  category: null,
  quizInformation: null,
  quizData: []
}

const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload
    },
    setCategory: (state, action) => {
      const category = action.payload
      state.category = category
    },
    setQuizInformation: (state, action) => {
      state.quizInformation = { ...state.quizInformation, ...action.payload }
    },
    setQuiz: (state, action) => {
      const quiz = action.payload
      state.quizData = quiz
    },
    resetData: (state) => {
      state.category = null
      state.quizInformation = null
      state.quizData = []
    }
  }
})

export const { setQuiz, setCategory, setQuizInformation, setCurrentStep, resetData } = quizSlice.actions
export default quizSlice.reducer

// testing di halaman login