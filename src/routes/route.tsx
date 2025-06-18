import { Route, Routes } from "react-router-dom";
import { Layout } from "../components";
import { RoleDashboard } from "../pages/dashboard";
import { EditTeacher } from "../pages/edit";
import {
  AnnouncementPage,
  AssigmentPage,
  AttendancePage,
  ClassPage,
  EventPage,
  ExamPage,
  LessonPage,
  ParentPage,
  ResultPage,
  StudentPage,
  SubjectPage,
  TeacherPage,
} from "../pages/list";
import { SignIn, SignUp } from "../pages/auth";

// Daftar route yang akan di-map

const authRoutes = [
  { path: "login", element: <SignIn /> },
  { path: "register", element: <SignUp /> },
];

const routes = [
  { path: "dashboard", element: <RoleDashboard /> },
  // Teacher
  { path: "teachers", element: <TeacherPage /> },
  { path: "teachers/code/:teacherCode", element: <EditTeacher /> },
  //
  { path: "students", element: <StudentPage /> },
  { path: "parents", element: <ParentPage /> },
  { path: "subjects", element: <SubjectPage /> }, // Typo diperbaiki dari 'sbujects'
  { path: "classes", element: <ClassPage /> },
  { path: "lessons", element: <LessonPage /> },
  { path: "exams", element: <ExamPage /> },
  { path: "assignments", element: <AssigmentPage /> },
  { path: "results", element: <ResultPage /> },
  { path: "attendance", element: <AttendancePage /> },
  { path: "events", element: <EventPage /> },
  { path: "announcements", element: <AnnouncementPage /> },
];

const MainRoute = () => {
  return (
    <Routes>
      <Route path="/">
        {authRoutes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Route>
      <Route path="/" element={<Layout />}>
        {routes.map(({ path, element }) => (
          <Route key={path || "index"} path={path} element={element} />
        ))}
      </Route>
    </Routes>
  );
};

export default MainRoute;
