import { useDispatch, useSelector } from "react-redux";
import Nav from "../utils/Nav";
import { addStudentCourseDetails } from "../PagesData/dashboardSlice";
import AccordionItem from "../utils/AccordianTab";

function CourseDetails() {
  const data = useSelector((state) => state.courses.selectedCourse);
  const studentCourseDetails = useSelector(
    (state) => state.dashboard.studentCourseDetails
  );
  const {
    name,
    instructor,
    description,
    enrollmentStatus,
    duration,
    schedule,
    location,
    prerequisites,
  } = data;

  const dispatch = useDispatch();

  // Function to handle Enroll button
  function handleEnroll() {
    dispatch(addStudentCourseDetails(data));
  }

  // Check if the course is already enrolled
  const isEnrolled = studentCourseDetails.some(
    (course) => course.id === data.id
  );

  // Styling
  const spanStyles = "font-semibold block tracking-wide";
  const sampleImageURL = "http://tinyurl.com/3p5mwrkb";

  return (
    <div className="flex flex-col items-center">
      <div className="fixed top-0 bg-slate-200 z-10">
        <Nav link={"/dashboard"} title={"Dash Board"} type={"courseDetail"} />
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-[10rem] gap-7 max-w-[80dvw] ">
        <div className="max-w-[375px] flex flex-col gap-3 justify-center items-center">
          <img src={sampleImageURL} alt="image"></img>
          {!isEnrolled && enrollmentStatus !== "Closed" ? (
            <button
              className="px-5 py-1 bg-red-400 text-center text-[1.3rem] font-semibold text-white rounded-md"
              onClick={handleEnroll}
            >
              + Enroll
            </button>
          ) : enrollmentStatus === "Closed" ? (
            <button className="px-5 py-1 bg-grey text-center text-[1.3rem] font-semibold text-slate-600 rounded-md">
              Closed 😪
            </button>
          ) : (
            <button className="px-5 py-1 bg-green-500 text-center text-[1.3rem] font-semibold text-white rounded-md">
              Enrolled
            </button>
          )}
        </div>
        <div className="flex flex-col justify-between ">
          <h1 className="font-bold text-[1.6rem] md:text-[3rem]">{name}</h1>
          <p className="text-slate-400 font-medium mt-[-5px] mb-1">
            <span className="font-bold">Instructor:</span> {instructor}
          </p>
          <p className="">
            <span className={spanStyles}>Description:</span>
            {description}
          </p>
          <p className="">
            <span className={spanStyles}>Duration:</span> {duration}
          </p>
          <p className="">
            <span className={spanStyles}>Schedule:</span> {schedule}
          </p>
          <p className="">
            <span className={spanStyles}>Location</span> {location}
          </p>
          <p className="">
            <span className={spanStyles}>Prerequisites:</span>
            {prerequisites.map((data, index) => (
              <li key={index}>{data}</li>
            ))}
          </p>
          <p className="mt-4 mb-2 flex justify-between items-center">
            <span
              className={`${
                enrollmentStatus === "Open" ? "bg-green-500" : "bg-red-500"
              } px-3 p-1 text-white font-medium rounded-md`}
            >
              {enrollmentStatus}
            </span>
            <span className="bg-slate-500 px-3 p-1 text-white font-medium rounded-md">
              {duration}
            </span>
          </p>
        </div>
      </div>
      <div className="w-full ">
        <h2 className="text-xl font-bold mb-4 text-center mt-5 text-[3rem]">
          Syllabus
        </h2>
        <div className="divide-y">
          {data.syllabus.map(({ week, topic, content }) => (
            <AccordionItem
              key={week}
              week={week}
              topic={topic}
              content={content}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default CourseDetails;
