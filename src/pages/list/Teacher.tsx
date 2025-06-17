import { useCallback, useEffect, useState } from "react";
import {
  FormModal,
  Pagination,
  Table,
  TableSearch,
  TeacherRow,
} from "../../components";
import { teacherColumns } from "../../lib/list";
import { getAllTeachers } from "../../services";

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
  const [loading, setLoading] = useState<boolean>(true);

  const fetchTeachers = useCallback(async (url = "/teachers") => {
    try {
      const data = await getAllTeachers(url);
      setLinks(data.meta.links);
      setRole(localStorage.getItem("role"));
      setTeachers(data.data);
    } catch (error) {
      console.error("Gagal memuat data guru", error);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    fetchTeachers();
  }, [fetchTeachers]);

  if (loading) {
    return <p className="m-auto">Loading ....</p>;
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
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>

      {/*  */}
      <Table
        columns={teacherColumns}
        renderRow={(item) => (
          <TeacherRow item={item} role={role} key={item.id} />
        )}
        data={teachers}
      />

      <Pagination links={links} onPageChange={fetchTeachers} />
    </div>
  );
};

export default TeacherPage;
