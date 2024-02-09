import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateSelectedCourse } from "../PagesData/courseListSlice";
import ProgressBar from "./ProgressBar";
import { updateCourseCompletion } from "../PagesData/dashboardSlice";

/* eslint-disable react/prop-types */
function ListCard({ curCourse, type }) {
  const navigate = useNavigate();
  const disptach = useDispatch();
  const sampleImageURL = "http://tinyurl.com/3p5mwrkb";

  const {
    id,
    name,
    instructor,
    description,
    enrollmentStatus,
    duration,
    courseComplete,
  } = curCourse;

  function handleOnClick() {
    disptach(updateSelectedCourse(curCourse));
    navigate("/course-details");
  }

  function handleDashboardCourseClick() {
    disptach(updateCourseCompletion(id));
  }

  return (
    <div className="w-[300px]  mt-10 p-3 sm:mt-8 border border-slate-300 sm:w-[400px]  hover:scale-105 transition-all duration-500 flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="flex items-center justify-center ">
          <img src={sampleImageURL} alt="image"></img>
        </div>
        <div className="mt-2">
          <h2 className="font-semibold text-[1.2rem]">{name}</h2>
          <p className="text-slate-400 font-medium mt-[-5px] mb-1">
            {instructor}
          </p>
          <p className="">{description}</p>
          {type !== "dashboard" ? (
            <div className="mt-4 mb-2 flex justify-between items-center">
              <span
                className={`${
                  enrollmentStatus === "Open" ? "bg-green-500" : "bg-red-500"
                } px-3 p-1 text-white font-medium rounded-md`}
              >
                {enrollmentStatus}
              </span>
              <span className="bg-slate-500 px-3 p-1 text-white font-medium rounded-md ">
                {duration}
              </span>
              <span
                className="bg-blue-600 px-3 p-1 text-white font-medium rounded-md cursor-pointer"
                onClick={() => handleOnClick()}
              >
                Details →
              </span>
            </div>
          ) : (
            <div className="flex flex-col justify-center  items-center">
              <p>
                <span className="font-semibold">Due in:</span>
                {duration}
              </p>
              <ProgressBar courseCompleted={courseComplete} />
              {courseComplete ? (
                <button
                  onClick={() => handleDashboardCourseClick()}
                  className="bg-green-500 px-3 p-1 text-white font-medium rounded-md mt-2"
                >
                  Completed 😍
                </button>
              ) : (
                <button
                  onClick={() => handleDashboardCourseClick()}
                  className="bg-slate-500 px-3 p-1 text-white font-medium rounded-md mt-2 cursor-pointer"
                >
                  Complete the Course
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ListCard;
