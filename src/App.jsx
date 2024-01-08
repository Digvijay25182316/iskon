import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Homescreen/HomeScreen";
import Header from "./components/Header";
import Dashboard from "./admin/dashboard/Dashboard";
import Volunteeers from "./admin/Volunteers/Volunteers";
import Programs from "./admin/programs/Programs";
import Events from "./admin/events/Events";
import Donations from "./admin/Donations/Donations";
import NotFound from "./components/NotFound";
import AddProgram from "./admin/programs/AddProgram";
import Courses from "./admin/Courses/Courses";
import Participants from "./admin/participants/Participants";
import AddParticipant from "./AddParticipant/AddParticipants";
import AddCourseForm from "./admin/Courses/AddCourses";
import AddVolunteerForm from "./admin/Volunteers/AddVolunteer";
import Levels from "./admin/Levels/Levels";
import AddLevels from "./admin/Levels/AddLevels";
import Sessions from "./admin/Sessions/Sessions";
import AddSessions from "./admin/Sessions/AddSessions";
import ProgramDetails from "./admin/programs/Details";
import CourseDetails from "./admin/Courses/Details";

function App() {
  return (
    <BrowserRouter>
      <div className="flex font-nunito">
        <Header />
        <div className={`bg-blue-50 min-h-screen flex-1 font-nunito`}>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/volunteers" element={<Volunteeers />} />
            <Route path="/admin/programs" element={<Programs />} />
            <Route
              path="/admin/programs/addlevel/:program"
              element={<AddLevels />}
            />
            <Route
              path="/admin/programs/:program"
              element={<ProgramDetails />}
            />
            <Route
              path="/admin/programs/levels/:program"
              element={<Levels />}
            />
            <Route path="/admin/activities" element={<Events />} />
            <Route path="/admin/donations" element={<Donations />} />
            <Route path="/admin/addprogram" element={<AddProgram />} />
            <Route path="/admin/courses" element={<Courses />} />
            <Route
              path="/admin/courses/sessions/:code"
              element={<Sessions />}
            />
            <Route
              path="/admin/courses/addsessions/:code"
              element={<AddSessions />}
            />
            <Route path="/admin/courses/:code" element={<CourseDetails />} />
            <Route path="/admin/addcourse" element={<AddCourseForm />} />
            <Route path="/admin/addvolunteer" element={<AddVolunteerForm />} />
            <Route path="/admin/participants" element={<Participants />} />
            <Route path="/participants" element={<AddParticipant />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
