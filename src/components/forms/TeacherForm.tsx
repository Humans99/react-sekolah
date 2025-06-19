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
          type="text"
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
          name="subject"
          defaultValue={data?.subject}
          register={register}
          error={errors?.subject}
        />
      </div>
      <button className="text-white mt-4 -mb-5 bg-brand-500 px-4 py-2 rounded-lg hover:bg-brand-600 cursor-pointer shadow-lg transition-all duration-300">
        Submit
      </button>
    </form>
  );
};

export default TeacherForm;
