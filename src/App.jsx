import {
  BrowserRouter,
  Route,
  Routes,
  useLocation,
  useRoutes,
} from "react-router-dom";
import "./App.css";
import HomeScreen from "./Homescreen/HomeScreen";
import Header from "./components/Header";
import Dashboard from "./admin/dashboard/Dashboard";
import Users from "./admin/Volunteers/Users";
import Programs from "./admin/programs/Programs";
import Events from "./admin/events/Events";
import Donations from "./admin/Donations/Donations";
import NotFound from "./components/NotFound";
import AddProgram from "./admin/programs/AddProgram";
import Courses from "./admin/Courses/Courses";
import Participants from "./admin/participants/Participants";
import AddParticipant from "./AddParticipant/AddParticipant";

function App() {
  return (
    <BrowserRouter>
      <div className="flex">
        <Header />
        <div className="bg-stone-100 min-h-screen flex-1 ">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/programs" element={<Programs />} />
            <Route path="/admin/activity" element={<Events />} />
            <Route path="/admin/donations" element={<Donations />} />
            <Route path="/admin/addprograms" element={<AddProgram />} />
            <Route path="/admin/courses" element={<Courses />} />
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
