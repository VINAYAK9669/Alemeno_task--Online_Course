import { createSlice } from "@reduxjs/toolkit";

export const dashboardSlice = createSlice({
  name: "dashboard",

  initialState: {
    studentCourseDetails: [],
  },
  reducers: {
    addStudentCourseDetails: (state, action) => {
      const updatedCourse = {
        ...action.payload,
        courseComplete: false,
      };
      state.studentCourseDetails.push(updatedCourse);
    },
    updateCourseCompletion: (state, action) => {
      state.studentCourseDetails = state.studentCourseDetails.map((course) =>
        course.id == action.payload
          ? { ...course, courseComplete: !course.courseComplete }
          : course
      );
    },
  },
});
export const { addStudentCourseDetails, updateCourseCompletion } =
  dashboardSlice.actions;

export default dashboardSlice.reducer;
