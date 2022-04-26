import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Overview from "./pages/Overview";
import { ReportOne, Reports, ReportThree, ReportTwo } from "./pages/Reports";
import Team from "./pages/Team";

function App() {
  return (
    <Router>
      <Sidebar />
      <Routes>
        <Route path="/overview" element={<Overview />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/reports/report1" element={<ReportOne />} />
        <Route path="/reports/report2" element={<ReportTwo />} />
        <Route path="/reports/report3" element={<ReportThree />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
