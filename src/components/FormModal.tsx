import { lazy, Suspense, useState, type JSX } from "react";

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

const FormModal = ({ type, id, table, data }: Props) => {
  const size = type === "create" ? "w-10 h-10" : "w-9 h-9";
  const bgColor =
    type === "create"
      ? "bg-brand-500 hover:bg-brand-600 transition-all duration-300 hover:-translate-y-0.5"
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
    ) : type === "create" || type === "update" ? (
      <div className="px-5">
        <Suspense
          fallback={
            <h1 className="text-xl text-gray-600 text-center">Loading ...</h1>
          }
        >
          {forms[table](type, data)}
        </Suspense>
      </div>
    ) : (
      "Form not found !"
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
          <div className="bg-white py-10 rounded-3xl relative h-fit w-[90%] md:w-[80%] xl:w-[70%] 2xl:w-[60%] overflow-y-auto">
            <div
              className="absolute top-6 right-6 cursor-pointer"
              onClick={() => setOpen(false)}
            >
              <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-300/90 transition-all duration-300">
                <i className="ri-close-fill text-2xl text-gray-400/70"></i>
              </div>
            </div>
            <Form />
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
