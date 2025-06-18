// FormModal.tsx
import React, { lazy, Suspense, useState, type JSX } from "react";
import { deleteTeacher } from "../services";

type TableType = "teacher";
// | "teacher"
// | "student"
// | "parent"
// | "subject"
// | "class"
// | "lesson"
// | "exam"
// | "assignment"
// | "event"
// | "announcement"
// | "result";
type FormType = "create" | "update" | "delete";

type Props = {
  table: TableType;
  type: FormType;
  data?: any;
  code?: string;
  onSuccessDelete?: () => void;
};

const TeacherForm = lazy(() => import("./forms/TeacherForm"));

const forms: Record<
  TableType,
  (type: Exclude<FormType, "delete">, data?: any) => JSX.Element
> = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
};

const DeleteForm = ({
  onSubmit,
  loading,
}: {
  code: string;
  onSubmit: (e: React.FormEvent) => void;
  loading: boolean;
}) => (
  <form onSubmit={onSubmit} className="flex flex-col items-center p-6 gap-4">
    <div className="p-4 bg-error-400 rounded-full">
      <i className="ri-close-line text-5xl text-error-600"></i>
    </div>
    <h2 className="text-3xl font-semibold text-gray-800 text-center mt-2">
      Hapus Data!
    </h2>
    <p className="text-center text-gray-500 mb-2">
      Semua data ini akan hilang!
      <br />
      Anda yakin akan menghapusnya?
    </p>
    <button
      disabled={loading}
      type="submit"
      className="bg-error-500 hover:bg-error-600 text-white font-semibold px-6 py-3 rounded-md w-full md:w-auto"
    >
      {loading ? (
        <div className="flex items-center gap-4">
          <svg
            className="animate-spin h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
            ></path>
          </svg>
          Menghapus...
        </div>
      ) : (
        "Ya, Yakin"
      )}
    </button>
  </form>
);

const FormModal = ({ type, table, code, data, onSuccessDelete }: Props) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleDelete = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await deleteTeacher(code!);
      setOpen(false);
      onSuccessDelete?.();
    } catch (error) {
      console.error("Gagal menghapus data guru", error);
    } finally {
      setLoading(false);
    }
  };

  const icon =
    type === "create" ? "add" : type === "update" ? "edit-box" : "delete-bin-6";
  const bgColor =
    type === "create"
      ? "bg-brand-500 hover:bg-brand-600"
      : type === "update"
      ? "bg-warning-500"
      : "bg-error-500";

  return (
    <>
      <button
        className={`${
          type === "create" ? "w-10 h-10" : "w-9 h-9"
        } ${bgColor} flex items-center justify-center rounded-full shadow-xl cursor-pointer transition-all duration-300 hover:-translate-y-0.5`}
        onClick={() => setOpen(true)}
        aria-label={`${type} data`}
      >
        <i className={`ri-${icon}-line text-lg text-slate-100`}></i>
      </button>

      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-400/60 backdrop-blur-xl"></div>
          <div
            role="dialog"
            aria-modal="true"
            className="bg-white py-10 rounded-3xl relative h-fit w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] overflow-y-auto"
          >
            <div
              className="absolute top-6 right-6 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300">
                <i className="ri-close-fill text-2xl text-gray-400/70"></i>
              </div>
            </div>
            {type === "delete" && code ? (
              <DeleteForm
                code={code}
                onSubmit={handleDelete}
                loading={loading}
              />
            ) : type === "create" || type === "update" ? (
              <div className="px-5">
                <Suspense fallback={<p className="text-center">Loading ...</p>}>
                  {forms[table](type, data)}
                </Suspense>
              </div>
            ) : (
              <p className="text-center text-red-500 py-10">
                Form tidak ditemukan
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
