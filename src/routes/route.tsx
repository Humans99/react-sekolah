import { Routes, Route } from "react-router-dom";
import { Layout } from "../components";
import { RoleDashboard } from "../pages/dashboard";
import { StudentPage, TeacherPage } from "../pages/list";

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<RoleDashboard />} />
        <Route path="/teachers" element={<TeacherPage />} />
        <Route path="/students" element={<StudentPage />} />
      </Route>
    </Routes>
  );
};

export default MainRoute;
