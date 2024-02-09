import { useSelector } from "react-redux";
import ListCard from "../utils/ListCard";
import Nav from "../utils/Nav";

function Dashboard() {
  const data = useSelector((state) => state.dashboard.studentCourseDetails);
  return (
    <div className="flex flex-col items-center justify-center max-w-[1200px]">
      <div className="fixed top-0 bg-slate-200 z-10">
        <Nav link={"/"} title={"All Courses"} />
      </div>
      <div className="mt-[7rem] sm:flex sm:flex-wrap justify-center items-center gap-5 ">
        {data?.map((curCourse) => (
          <ListCard
            key={curCourse.id}
            curCourse={curCourse}
            type={"dashboard"}
          />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
