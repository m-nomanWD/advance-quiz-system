import { createSlice } from '@reduxjs/toolkit'
import {
  studentResults,
  resultTableHeadings,
  dummyQuestions,
} from '../constants/constants'
const initialState = {
  paperResult: {
    resultID: '',
    activeSingleResultData: studentResults,
  },
  activeResultsData: [],
  singleStudentResult: {
    studentID: '',
    studentName: 'Muhammad Noman',
    questions: dummyQuestions,
  },
}
const resultSlice = createSlice({
  name: 'resultSlice',
  initialState,
  reducers: {
    sortActiveResult: (state, action) => {
      const { activeSingleResultData } = state.paperResult
      const { type, isAcc } = action.payload
      if (type === 'SORT_BY_NAME') {
        isAcc
          ? activeSingleResultData.sort((a, b) =>
              a.studentName.localeCompare(b.studentName)
            )
          : activeSingleResultData.sort((a, b) =>
              b.studentName.localeCompare(a.studentName)
            )
      }
      if (type === 'SORT_BY_STATUS') {
        isAcc
          ? activeSingleResultData.sort((a, b) =>
              b.status.localeCompare(a.status)
            )
          : activeSingleResultData.sort((a, b) =>
              a.status.localeCompare(b.status)
            )
      }
      if (type === 'SORT_BY_CORRECT') {
        isAcc
          ? state.paperResult.activeSingleResultData.sort(
              (a, b) => b.correctAnswers - a.correctAnswers
            )
          : state.paperResult.activeSingleResultData.sort(
              (a, b) => a.correctAnswers - b.correctAnswers
            )
      }
    },
  },
})

export default resultSlice.reducer
export const { sortActiveResult } = resultSlice.actions
