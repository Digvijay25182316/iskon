import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Homescreen/HomeScreen";
import Header from "./components/Header";
import Dashboard from "./admin/dashboard/Dashboard";
import Users from "./admin/users/Users";
import Programs from "./admin/programs/Programs";
import Events from "./admin/events/Events";
import Donations from "./admin/Donations/Donations";
import NotFound from "./components/NotFound";
import AddProgram from "./admin/programs/AddProgram";

function App() {
  return (
    <BrowserRouter>
      <div className="flex ">
        <div className="md:w-20">
          <Header />
        </div>
        <div className="bg-stone-100 min-h-screen flex-1 ">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/users" element={<Users />} />
            <Route path="/admin/programs" element={<Programs />} />
            <Route path="/admin/events" element={<Events />} />
            <Route path="/admin/donations" element={<Donations />} />
            <Route path="/admin/addprogram" element={<AddProgram />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
