import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { createTeacher } from "../../services";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";
import { toast } from "sonner";
import SuccessToast from "../toast/Success";

const schema = z.object({
  email: z.string().email({ message: "invalid email address" }),
  nip: z
    .string()
    .min(18, { message: "nip must be atleast 18 number" })
    .max(18, { message: "nip must be atleast 18 number" }),
  name: z.string().min(1, { message: "name is required!" }),
  phone: z
    .string()
    .min(11, { message: "phone number must be at least 11 number!" }),
  address: z.string().min(1, { message: "address is required!" }),
  bloodType: z.enum(["A", "B", "AB", "O"], {
    message: "blood type is required !",
  }),
  gender: z.enum(["Pria", "Wanita"], { message: "gender is required!" }),
  subject_id: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9"], {
    message: "Subject is required",
  }),
});

const TeacherForm = ({
  type,
  data,
  onSuccessCreate,
}: {
  type: "create" | "update";
  data?: any;
  onSuccessCreate?: () => void;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const [loading, setLoading] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const response = await createTeacher(data);
      SuccessToast({message: response.message})
      onSuccessCreate?.();
    } catch (error) {
      toast.error("Error to create teacher. ");
      console.log("Error to create teacher. ", error);
    } finally {
      setLoading(false);
    }
  });
  return (
    <form action="" className="flex gap-2 flex-col" onSubmit={onSubmit}>
      <h1 className="text-gray-600 font-medium">
        {type === "create" ? "Tambah" : "Edit"} Data Guru
      </h1>
      <span className="text-sm text-gray-600 font-medium">Data Personal</span>
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
        <InputForm
          label="Nomor Induk Pegawai"
          name="nip"
          placeholder="284758395718392950"
          defaultValue={data?.nip}
          register={register}
          error={errors?.nip}
          type="number"
        />
        <InputForm
          label="Email"
          name="email"
          placeholder="johndoe@example.com"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
          type="email"
        />
        <InputForm
          label="Nomor Telepon"
          name="phone"
          placeholder="081592860391"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
          type="number"
        />
        <InputForm
          label="Alamat"
          name="address"
          placeholder="Jl. Kebangkitan Nasional No. 950, Gorontalo"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
          type="text"
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
        <SelectForm
          label="Mata Pelajaran"
          name="subject_id"
          defaultValue={data?.subject_id}
          register={register}
          error={errors?.subject_id}
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

export default TeacherForm;
