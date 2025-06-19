import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputForm from "./InputForm";
import SelectForm from "./SelectForm";

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
  subject: z.enum(["1", "2", "3", "4", "5", "6", "7", "8", "9"], {
    message: "Subject is required",
  }),
});

const TeacherForm = ({
  type,
  data,
}: {
  type: "create" | "update";
  data?: any;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit((data) => {
    console.log("data form: ", data);
  });
  return (
    <form action="" className="flex gap-8 flex-col" onSubmit={onSubmit}>
      <h1 className="text-gray-600 font-medium">
        {type === "create" ? "Tambah" : "Edit"} Data Guru
      </h1>
      <span className="text-sm text-gray-500 font-medium">
        Data Auntentikasi
      </span>
      <div className="flex flex-col gap-6 -mt-6 lg:flex-row ">
        <InputForm
          label="username"
          name="username"
          defaultValue={data?.username}
          register={register}
          error={errors?.username}
          type="text"
        />
        <InputForm
          label="email"
          name="email"
          defaultValue={data?.email}
          register={register}
          error={errors?.email}
          type="text"
        />
        <InputForm
          label="password"
          name="password"
          defaultValue={data?.password}
          register={register}
          error={errors?.password}
          type="password"
        />
      </div>
      <span className="text-sm text-gray-600 font-medium">Data Personal</span>
      <div className="flex flex-col lg:flex-row gap-6 -mt-6">
        <InputForm
          label="nama lengkap"
          name="fullName"
          defaultValue={data?.fullName}
          register={register}
          error={errors?.fullName}
          type="text"
        />
        <InputForm
          label="telepon"
          name="phone"
          defaultValue={data?.phone}
          register={register}
          error={errors?.phone}
          type="number"
        />
        <InputForm
          label="alamat"
          name="address"
          defaultValue={data?.address}
          register={register}
          error={errors?.address}
          type="text"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-6 -mt-6">
        <SelectForm
          label="golongan darah"
          name="bloodType"
          defaultValue={data?.bloodType}
          register={register}
          error={errors?.bloodType}
        />
        <SelectForm
          label="jenis kelamin"
          name="gender"
          defaultValue={data?.gender}
          register={register}
          error={errors?.gender}
        />
        <InputForm
          label="tanggal lahir"
          name="birthDay"
          defaultValue={data?.birthDay}
          register={register}
          error={errors?.birthDay}
          type="date"
        />
      </div>
      <button className="text-white bg-brand-500 px-4 py-2 rounded-lg hover:bg-brand-600 cursor-pointer shadow-lg transition-all duration-300">
        Submit
      </button>
    </form>
  );
};

export default TeacherForm;
