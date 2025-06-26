import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import { useState } from "react";
import { createStudent } from "@/services";
import SuccessToast from "../toast/Success";
import { toast } from "sonner";

// ----------- Schema -------------

const createSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  gender: z.enum(["Pria", "Wanita"], { message: "gender is required" }),
  phone: z
    .string()
    .min(11, { message: "phone number must be at least 11 number" }),
  bloodType: z.enum(["A", "B", "AB", "O"], {
    message: "blood type is required",
  }),
  email: z.string().email({ message: "invalid email address" }),
  // Parent
  parent_name: z.string().min(1, { message: "parent name is required" }),
  parent_email: z.string().email({ message: "invalid email address" }),
  parent_phone: z
    .string()
    .min(11, { message: "phone number must be at least 11 number" }),
  parent_address: z.string().min(1, { message: "address is required" }),
  grade_id: z.enum(["1", "2", "3"], { message: "grade is required" }),
  class_id: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9"], {
    message: "class is required",
  }),
});

const updateSchema = z.object({
  name: z.string().min(1, { message: "name is required" }),
  gender: z.enum(["Pria", "Wanita"], { message: "gender is required" }),
  phone: z
    .string()
    .min(11, { message: "phone number must be at least 11 number" }),
  bloodType: z.enum(["A", "B", "AB", "O"], {
    message: "blood type is required",
  }),
  email: z.string().email({ message: "invalid email address" }),
  // Parent
  parent_name: z.string().min(1, { message: "parent name is required" }),
  parent_email: z.string().email({ message: "invalid email address" }),
  parent_phone: z
    .string()
    .min(11, { message: "phone number must be at least 11 number" }),
  parent_address: z.string().min(1, { message: "address is required" }),
  grade_id: z.enum(["1", "2", "3"], { message: "grade is required" }),
  class_id: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9"], {
    message: "class is required",
  }),
  nis: z.string().min(1, { message: "nis is required" }),
});

// --------- Props --------------

type StudentFormProps = {
  type: "create" | "update";
  data?: any;
  onSuccessCreate?: () => void;
};

type CreateStudentForm = z.infer<typeof createSchema>;
type UpdateStudentForm = z.infer<typeof updateSchema>;
type StudentFormType = CreateStudentForm | UpdateStudentForm;

const StudentForm = ({ type, data, onSuccessCreate }: StudentFormProps) => {
  const schema = type === "create" ? createSchema : updateSchema;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<StudentFormType>({
    resolver: zodResolver(schema),
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await createStudent(data);
      SuccessToast({ message: response.message });
      onSuccessCreate?.();
    } catch (error) {
      toast.error("Error to create student. ");
      console.log("Error to create student. ", error);
    } finally {
      setLoading(false);
    }
  });

  return (
    <form action="" className="flex gap-2 flex-col" onSubmit={onSubmit}>
      <h1 className="text-gray-600 font-medium">
        {type === "create" ? "Tambah" : "Edit"} Data Siswa
      </h1>
      <span className="text-sm text-gray-600 font-medium">Data Siswa</span>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
        <InputForm
          label="Nama"
          name="name"
          placeholder="John Doe"
          defaultValue={data?.name}
          register={register}
          error={errors?.name}
          type="text"
        />
        {type === "update" && (
          <InputForm
            label="NIS"
            name="nis"
            placeholder="1103204012"
            defaultValue={data?.nis}
            register={register}
            error={(errors as any)?.nis}
            type="number"
            disabled
          />
        )}
        <InputForm
          label="Email"
          name="email"
          placeholder="johndoe@example.com"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
          type="text"
        />
        <SelectForm
          label="Tingkat Kelas"
          name="grade_id"
          defaultValue={data?.grade_id}
          register={register}
          error={errors?.grade_id}
        />
        <SelectForm
          label="Kelas"
          name="class_id"
          defaultValue={data?.class_id}
          register={register}
          error={errors?.class_id}
        />
        <InputForm
          label="Telepon"
          name="phone"
          placeholder="081275899205"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
          type="number"
        />
        <SelectForm
          label="Jenis Kelamin"
          name="gender"
          defaultValue={data?.gender}
          register={register}
          error={errors?.gender}
        />
        <SelectForm
          label="Golongan Darah"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors?.bloodType}
        />
      </div>
      <span className="text-sm text-gray-600 font-medium mt-4">
        Data Orang Tua Siswa
      </span>
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-4">
        <InputForm
          label="Nama Ibu"
          name="parent_name"
          placeholder="Jane Doe"
          defaultValue={data?.parent_name}
          register={register}
          error={errors?.parent_name}
          type="text"
        />
        <InputForm
          label="Email Orang Tua"
          name="parent_email"
          placeholder="janedoe@example.com"
          defaultValue={data?.parent_email}
          register={register}
          error={errors?.parent_email}
          type="text"
        />
        <InputForm
          label="Telepon Orang Tua"
          name="parent_phone"
          placeholder="082140982345"
          defaultValue={data?.parent_phone}
          register={register}
          error={errors?.parent_phone}
          type="number"
        />
        <InputForm
          label="Alamat Orang Tua"
          name="parent_address"
          placeholder="Jl. Kebangkitan Nasional No. 2"
          defaultValue={data?.parent_address}
          register={register}
          error={errors?.parent_address}
          type="text"
        />
      </div>
      <button
        disabled={loading}
        className={`text-white mt-4 -mb-5 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 ${
          loading
            ? "bg-gray-500 cursor-not-allowed "
            : "bg-brand-500 hover:bg-brand-600 cursor-pointer"
        }`}
      >
        {loading ? (
          <div className="flex items-center gap-4 justify-center">
            <svg
              className="animate-spin h-5 w-5 text-white"
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
            Submiting ....
          </div>
        ) : (
          "Submit"
        )}
      </button>
    </form>
  );
};

export default StudentForm;
