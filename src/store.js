import { configureStore } from "@reduxjs/toolkit";
import dashboardReducer from "./components/PagesData/dashboardSlice";
import courseListReducer from "./components/PagesData/courseListSlice";

export default configureStore({
  reducer: {
    dashboard: dashboardReducer,
    courses: courseListReducer,
  },
});
