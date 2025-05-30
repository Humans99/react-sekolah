import homeIcon from "../assets/icons/home.png";
import teacherIcon from "../assets/icons/teacher.png";
import studentIcon from "../assets/icons/student.png";
import parentIcon from "../assets/icons/parent.png";
import subjectIcon from "../assets/icons/subject.png";
import classIcon from "../assets/icons/class.png";
import lessonIcon from "../assets/icons/lesson.png";
import examIcon from "../assets/icons/exam.png";
import assignmentIcon from "../assets/icons/assignment.png";
import resultIcon from "../assets/icons/result.png";
import attendanceIcon from "../assets/icons/attendance.png";
import calendarIcon from "../assets/icons/calendar.png";
import messageIcon from "../assets/icons/message.png";
import announcementIcon from "../assets/icons/announcement.png";
import profileIcon from "../assets/icons/profile.png";
import settingIcon from "../assets/icons/setting.png";
import logoutIcon from "../assets/icons/logout.png";

export const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: homeIcon,
        label: "Home",
        href: "/",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: teacherIcon,
        label: "Guru",
        href: "/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: studentIcon,
        label: "Siswa",
        href: "/students",
        visible: ["admin", "teacher"],
      },
      {
        icon: parentIcon,
        label: "Orang Tua",
        href: "/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon: subjectIcon,
        label: "Mata Pelajaran",
        href: "/subjects",
        visible: ["admin"],
      },
      {
        icon: classIcon,
        label: "Kelas",
        href: "/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon: lessonIcon,
        label: "Pelajaran",
        href: "/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon: examIcon,
        label: "Latihan",
        href: "/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: assignmentIcon,
        label: "Tugas",
        href: "/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: resultIcon,
        label: "Nilai",
        href: "/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: attendanceIcon,
        label: "Presensi",
        href: "/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: calendarIcon,
        label: "Acara",
        href: "/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: messageIcon,
        label: "Pesan",
        href: "/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: announcementIcon,
        label: "Pengumuman",
        href: "/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon: profileIcon,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: settingIcon,
        label: "Pengaturan",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: logoutIcon,
        label: "Keluar",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];
