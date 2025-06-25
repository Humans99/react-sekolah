import {
  FormModal,
  Pagination,
  StudentRow,
  Table,
  TableSearch,
} from "@/components";
import { Skeleton } from "@/components/ui/skeleton";
import { studentColumns } from "@/lib/list";
import { getAllStudents } from "@/services";
import { useCallback, useEffect, useState } from "react";

type Student = {
  id: number;
  nis: string;
  name: string;
  phone: string;
  bloodType: string;
  gender: string;
  user: { username: string; email: string };
  parent: { address: string };
  grade: { level: string };
  class: { name: string };
};

const StudentPage = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [links, setLinks] = useState<any>([]);
  const [role, setRole] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchStudents = useCallback(async (url = "/students") => {
    try {
      const data = await getAllStudents(url);
      setLinks(data.meta.links);
      setStudents(data.data);
    } catch (error) {
      console.error("Gagal memuat data siswa: ", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStudents();
    setRole(localStorage.getItem("role"));
  }, [fetchStudents]);

  if (loading) {
    return (
      <div className="bg-white p-4 rounded-xl m-4 flex-1 shadow border border-gray-200 overflow-x-auto">
        <div className="flex justify-between items-center">
          <Skeleton className="h-4 w-[20%] bg-gray-400" />
          <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <Skeleton className="h-4 w-[20%] bg-gray-300" />
            <div className="flex items-center gap-4 self-end">
              <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
              <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
              {role === "admin" && (
                <Skeleton className="h-10 w-10 rounded-full bg-gray-300" />
              )}
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 w-full">
          {[...Array(10)].map((_, i) => (
            <div className="flex gap-5 p-4 items-center" key={i}>
              <Skeleton className="w-10 h-10 rounded-full bg-gray-400" />
              <div className="flex flex-col justify-center gap-2">
                <Skeleton className="h-4 w-[240px] bg-gray-400" />
                <Skeleton className="h-4 w-[180px] bg-gray-400" />
              </div>
              <Skeleton className="h-4 w-[140px] bg-gray-400 ml-5" />
              <Skeleton className="h-4 w-[200px] bg-gray-400 ml-5" />
              <Skeleton className="h-4 w-[200px] bg-gray-400 ml-5" />
              <Skeleton className="h-4 w-[480px] bg-gray-400 ml-5" />
              <div className="flex gap-3">
                <Skeleton className="w-10 h-10 rounded-full bg-gray-400 ml-5" />
                <Skeleton className="w-10 h-10 rounded-full bg-gray-400" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-4 rounded-xl m-4 flex-1 shadow border border-gray-200 overflow-x-auto">
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">Daftar Siswa</h1>
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
                table="student"
                type="create"
                onSuccessCreate={fetchStudents}
              />
            )}
          </div>
        </div>
      </div>

      <Table
        data={students}
        columns={studentColumns}
        renderRow={(item) => (
          <StudentRow
            item={item}
            role={role}
            key={item.id}
            onSuccessDelete={fetchStudents}
          />
        )}
      />

      <Pagination links={links} onPageChange={fetchStudents} />
    </div>
  );
};

export default StudentPage;
