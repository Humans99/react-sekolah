import { role } from "../../lib/data";
import AdminPage from "./Admin";
import ParentPage from "./Parent";
import StudentPage from "./Student";
import TeacherPage from "./Teacher";

const RoleDashboard = () => {
  switch (role) {
    case "admin":
      return <AdminPage />;
    case "teacher":
      return <TeacherPage />;
    case "student":
      return <StudentPage />;
    case "parent":
      return <ParentPage />;
    default:
      break;
  }
};

export default RoleDashboard;
