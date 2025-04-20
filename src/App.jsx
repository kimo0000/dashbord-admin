import { useState } from "react";
import Header from "./components/Header/Header";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import Dashbord from "./pages/Dashbord/Dashbord";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import Invoices from "./pages/Invoices/Invoices";
import CreateUser from "./pages/CreateUser/CreateUser";
import Calendar from "./pages/Calendar/Calendar";
import FaqAccordion from "./pages/FaqAccordion/FaqAccordion";
import BarChartApp from "./pages/BarChart/BarChartApp";
import PieChartApp from "./pages/PieChart/PieChartApp";
import LineChartApp from "./pages/LineChart/LineChartApp";
// import Geography from "./pages/Geography/Geography";
import CreateUser2 from "./pages/CreateUser/CreateUser2";

function App() {
  const [widthSideBar, setWidthSideBar] = useState(false);

  return (
    <div className="app">
      <Header widthSideBar={widthSideBar} setWidthSideBar={setWidthSideBar} />
      <Sidebar widthSideBar={widthSideBar} setWidthSideBar={setWidthSideBar} />
      <div className="content">
        <Routes>
          <Route path="/" element={<Dashbord />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route
            path="/create_user"
            element={
              <CreateUser>
                {/* Validation Form With React hook Form */}
                {/* <CreateUser2 /> */}
              </CreateUser>
            }
          />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<FaqAccordion />} />
          <Route path="/bar_chart" element={<BarChartApp />} />
          <Route path="/pie_chart" element={<PieChartApp />} />
          <Route path="/line_chart" element={<LineChartApp />} />
          {/* <Route path="/geography" element={<Geography />} /> */}
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
