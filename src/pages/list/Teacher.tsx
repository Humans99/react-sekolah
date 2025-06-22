import { useCallback, useEffect, useState } from "react";
import {
  FormModal,
  Pagination,
  Table,
  TableSearch,
  TeacherRow,
} from "../../components";
import { teacherColumns } from "../../lib/list";
import { getAllTeachers } from "@/services";

type Teacher = {
  id: number;
  code: string;
  name: string;
  email?: string;
  phone: string;
  address: string;
  subject: { name: string };
  user: { email: string };
};

const TeacherPage = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [links, setLinks] = useState<any>([]);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchTeachers = useCallback(async (url = "/teachers") => {
    try {
      const data = await getAllTeachers(url);
      setLinks(data.meta.links);
      setTeachers(data.data);
    } catch (error) {
      console.error("Gagal memuat data guru", error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchTeachers();
    setRole(localStorage.getItem("role"));
  }, [fetchTeachers]);

  if (loading) {
    return (
      <div className="m-auto">
        <div className="flex items-center gap-4">
          <svg
            className="animate-spin h-5 w-5 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-50"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="3"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          <p className="text-sm text-gray-800">Loading ....</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl m-4 flex-1 shadow border border-gray-200 overflow-x-auto">
      {/*  */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">Daftar Guru</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-10 h-10 bg-brand-500 flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:bg-brand-600 hover:-translate-y-0.5 transition-all duration-300">
              <i className="ri-equalizer-line text-white text-lg"></i>
            </button>
            <button className="w-10 h-10 bg-brand-500 flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:bg-brand-600 hover:-translate-y-0.5 transition-all duration-300">
              <i className="ri-sort-desc text-white text-lg"></i>
            </button>
            {role === "admin" && (
              <FormModal
                table="teacher"
                type="create"
                onSuccessCreate={fetchTeachers}
              />
            )}
          </div>
        </div>
      </div>

      {/*  */}
      <Table
        columns={teacherColumns}
        renderRow={(item) => (
          <TeacherRow
            item={item}
            role={role}
            key={item.id}
            onSuccessDelete={() => fetchTeachers()}
          />
        )}
        data={teachers}
      />

      <Pagination links={links} onPageChange={fetchTeachers} />
    </div>
  );
};

export default TeacherPage;
