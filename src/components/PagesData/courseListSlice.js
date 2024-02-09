import { createSlice } from "@reduxjs/toolkit";

export const courseListSlice = createSlice({
  name: "courses",

  initialState: {
    courseList: null,
    filters: [],
    isLoading: false,
    error: "",
    selectedCourse: null,
  },

  reducers: {
    updateCourseList: (state, action) => {
      state.courseList = action.payload;
    },
    updateFilters: (state, action) => {
      state.filters = action.payload;
    },
    updateIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    updateError: (state, action) => {
      state.error = action.payload;
    },
    updateSelectedCourse: (state, action) => {
      state.selectedCourse = action.payload;
    },
  },
});
export const {
  updateCourseList,
  updateIsLoading,
  updateFilters,
  updateError,
  updateSelectedCourse,
} = courseListSlice.actions;

export default courseListSlice.reducer;
