import { lazy, Suspense, useState, type JSX } from "react";
import { data } from "react-router-dom";

type Props = {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "event"
    | "announcement"
    | "result";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
};

const TeacherForm = lazy(() => import("./forms/TeacherForm"));

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
};

const FormModal = ({ type, id, table }: Props) => {
  const size = type === "create" ? "w-10 h-10" : "w-9 h-9";
  const bgColor =
    type === "create"
      ? "bg-brand-500 hover:bg-brand-600"
      : type === "update"
      ? "bg-warning-500"
      : "bg-error-500";
  const icon =
    type === "create" ? "add" : type === "update" ? "edit-box" : "delete-bin-6";

  const [open, setOpen] = useState(false);

  const Form = () => {
    return type === "delete" && id ? (
      <form action="" className="flex flex-col items-center p-6 gap-4 z-50">
        <div className="p-4 bg-error-400/100 rounded-full">
          <i className="ri-close-line text-5xl text-error-600"></i>
        </div>

        <h2 className="text-3xl font-semibold text-gray-800 text-center mt-2">
          Hapus Data !
        </h2>

        <p className="text-center text-gray-500 mb-2">
          Semua data ini akan hilang!
          <br />
          Anda yakin akan menghapusnya?
        </p>

        <button
          type="submit"
          className="bg-error-500 hover:bg-error-600 text-white font-semibold px-6 py-3 rounded-md w-full md:w-auto cursor-pointer"
        >
          Ya, Yakin
        </button>
      </form>
    ) : (
      "Update || Edit"
    );
  };

  return (
    <>
      <button
        className={`${size} ${bgColor} flex items-center justify-center rounded-full shadow-xl cursor-pointer`}
        onClick={() => setOpen(true)}
      >
        <i className={`ri-${icon}-line text-lg text-slate-100`}></i>
      </button>
      {open && (
        <div className="fixed inset-0 z-40 flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-400/60 backdrop-blur-xl"></div>
          <div className="bg-white py-10 rounded-3xl relative w-[90%] h-[90%] md:h-fit md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[35%] overflow-y-auto">
            <div
              className="absolute top-6 right-6 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <i className="ri-close-fill text-2xl p-2 bg-gray-200 rounded-full text-gray-400/70"></i>
            </div>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
