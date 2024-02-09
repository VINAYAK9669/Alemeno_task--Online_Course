/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { updateFilters } from "../PagesData/courseListSlice";

function Nav({ link, title, type }) {
  const data = useSelector((state) => state.courses.courseList);
  const disptach = useDispatch();

  const [searchInput, setSearchInput] = useState("");

  // Function to filter courses based on user input
  const filterCourses = (input) => {
    const userInputLowerCase = input.toLowerCase().trim();
    const searchTerms = userInputLowerCase
      .split(",")
      .map((term) => term.trim());
    if (input === "") {
      return data;
    }

    const filteredCourses = data.filter((course) => {
      return searchTerms.every(
        (term) =>
          course.name.toLowerCase().includes(term) ||
          course.instructor.toLowerCase().includes(term) ||
          course.description.toLowerCase().includes(term) ||
          course.duration.toLowerCase().includes(term)
      );
    });

    return filteredCourses;
  };

  // Function to handle input change
  const handleInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);
    const filteredResults = filterCourses(input);
    disptach(updateFilters(filteredResults));
  };

  return (
    <div className="mt-3 px-4 pb-6 border-b-2 ">
      <ul className="relative flex justify-between items-center gap-2 w-[90dvw] max-w-[1440px]">
        <li className="text-black font-bold cursor-pointer transition-all duration-500 hover:translate-y-1 text-[2rem]">
          <NavLink to="/">EduPath</NavLink>
        </li>
        {type === "courseDetailPage" ? (
          <li className="absolute top-[150%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex items-center justify-center border-2 border-slate-500 px-2 rounded-full max-w-[18rem] sm:max-w-[20rem] cursor-pointer  sm:static sm:top-auto sm:left-auto sm:transform-none">
            <span>🔎</span>
            <input
              type="text"
              className="w-3 focus:w-[12rem]  py-1 focus:outline-none px-2 transition-all duration-300 rounded-full cursor-pointer bg-transparent focus:duration-700 sm:focus:w-[25rem]"
              placeholder="Course name, instructor, language "
              value={searchInput}
              onChange={handleInputChange}
            />
          </li>
        ) : (
          ""
        )}
        <li className="text-blue-500 font-semibold hover:translate-y-1 transition-all duration-1000 text-[1.2rem]">
          <NavLink to={link}>{title}</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
