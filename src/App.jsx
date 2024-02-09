import { BrowserRouter, Route, Routes } from "react-router-dom";
import CourseList from "./components/pages/CourseList";
import Dashboard from "./components/pages/Dashboard";
import CourseDetails from "./components/pages/CourseDetails";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CourseList />}></Route>
          <Route path="course-details" element={<CourseDetails />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
