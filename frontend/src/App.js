import "./App.css";
import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";
import RegisterUser from "./pages/User/Register";
import LoginUser from "./pages/User/Login";
import RegisterAdmin from "./pages/Admin/Register";
import LoginAdmin from "./pages/Admin/Login";
import Hostel3 from "./Hostels/Hostel3";
import Hostel4 from "./Hostels/Hostel4";
import Hostel1 from "./Hostels/Hostel1";
import Hostel2 from "./Hostels/Hostel2";
import NotFound from "./components/NotFound";
import Contact from "./pages/Contact";
import Complaint from "./pages/Complaint";
import Messmenu from "./pages/Messmenu";
import Profile from "./pages/Profile";
import RegisterComplaint from "./pages/RegisterComplaint";
import RegisterAccountant from "./pages/Accountant/Register";
import LoginAccountant from "./pages/Accountant/Login";

import RegisterStudentRep from "./pages/StudentRep/Register";
import LoginStudentRep from "./pages/StudentRep/Login";
import TandonExpense from "./HotelExpense/Hostel3Expense";
import TilakExpense from "./HotelExpense/Hostel4Expense";
import MalviyaExpense from "./HotelExpense/Hostel1Expense";
import PatelExpense from "./HotelExpense/Hostel2Expense";
import TandonMess from "./pages/MessMenu/TandonMess";
import MalviyaMess from "./pages/MessMenu/MalviyaMess";
import TilakMess from "./pages/MessMenu/TilakMess";
import PatelMess from "./pages/MessMenu/PatelMess";
import AddAndUpdateMessMenu from "./pages/AddAndUpdateMessMenu";

function App() {
  return (
    <>
      <div className="">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/signup-student" element={<RegisterUser />} />
          <Route path="/login-student" element={<LoginUser />} />

          <Route path="/signup-admin" element={<RegisterAdmin />} />
          <Route path="/login-admin" element={<LoginAdmin />} />

          <Route path="/signup-accountant" element={<RegisterAccountant />} />
          <Route path="/login-accountant" element={<LoginAccountant />} />

          <Route path="/signup-studentrep" element={<RegisterStudentRep />} />
          <Route path="/login-studentrep" element={<LoginStudentRep />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/dashboard/hostel1" element={<Hostel3 />} />
          <Route path="/dashboard/hostel2" element={<Hostel4 />} />
          <Route path="/dashboard/hostel3" element={<Hostel1 />} />
          <Route path="/dashboard/hostel4" element={<Hostel2 />} />

          <Route path="/mess-menu/hostel3" element={<TandonMess />} />
          <Route path="/mess-menu/hostel2" element={<PatelMess />} />
          <Route path="/mess-menu/hostel1" element={<MalviyaMess />} />
          <Route path="/mess-menu/hostel4" element={<TilakMess />} />
          <Route path="/update-mess-menu" element={<AddAndUpdateMessMenu />} />

          <Route path="/dashboard/hostel3/expense" element={<TandonExpense />} />
          <Route path="/dashboard/hostel4/expense" element={<TilakExpense />} />
          <Route
            path="/dashboard/hostel1/expense"
            element={<MalviyaExpense />}
          />
          <Route path="/dashboard/hostel2/expense" element={<PatelExpense />} />

          <Route path="/sigle-complaint/:compID" element={<Complaint />} />
          <Route path="/mess-menu" element={<Messmenu />} />
          <Route path="/new-complaint" element={<RegisterComplaint />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
