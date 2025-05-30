import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import { HomePage, StudentPage, TeacherPage } from "./pages/list";
import { Layout } from "./components";

function App() {
  // Path *'s
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/teachers" element={<TeacherPage />} />
        <Route path="/students" element={<StudentPage />} />
      </Route>
    </Routes>
  );
}

export default App;
