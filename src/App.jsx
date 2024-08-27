import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home, TeacherDashboard, SetPaper } from './pages';
import { DashboardMainConatiner, DetailResult } from './components/index'
import { teacherSidebarLink } from './constants/constants';
import { MdAllInclusive } from 'react-icons/md';


function App() {
  return (
    <Router>
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />


        <Route path="/teacher-dashboard/*" element={<TeacherDashboard />}>
          <Route index element={<DashboardMainConatiner />} />
          <Route path="results" element={<div>Results Page</div>} />
          <Route path="students" element={<div>Students Page</div>} />
          <Route path="papers" element={<div>Papers Page</div>} />
          <Route path="profile" element={<div>Profile Page</div>} />
          <Route path="session-details/:id" element={<DetailResult />} />
          <Route path=":name/:id" element={<div>Student Detail Page</div>} />
        </Route>

        {/* Set Paper route without sidebar */}
        <Route path="/set-paper" element={<SetPaper />} />
      </Routes>
    </Router>
  );
}

export default App;
