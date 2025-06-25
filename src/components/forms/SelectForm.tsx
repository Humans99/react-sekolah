import type React from "react";
import type { FieldError } from "react-hook-form";

type Option = {
  key: string;
  value: string;
};

type Props = {
  label: string;
  register: any;
  name: "gender" | "bloodType" | "subject_id" | "grade_id" | "class_id";
  error?: FieldError;
  defaultValue?: string;
  inputProps?: React.InputHTMLAttributes<HTMLSelectElement>;
};

const dataSelect: Record<
  "gender" | "bloodType" | "subject_id" | "grade_id" | "class_id",
  Option[]
> = {
  gender: [
    { key: "Pria", value: "Pria" },
    { key: "Wanita", value: "Wanita" },
  ],
  bloodType: [
    { key: "A", value: "A" },
    { key: "B", value: "B" },
    { key: "AB", value: "AB" },
    { key: "O", value: "O" },
  ],
  subject_id: [
    { key: "1", value: "Matematika" },
    { key: "2", value: "IPA" },
    { key: "3", value: "IPS" },
    { key: "4", value: "Bahasa Indonesia" },
    { key: "5", value: "Bahasa Inggris" },
    { key: "6", value: "Seni Budaya" },
    { key: "7", value: "PJOK" },
    { key: "8", value: "PKN" },
    { key: "9", value: "Pendidikan Agama" },
  ],
  grade_id: [
    { key: "1", value: "Kelas 7" },
    { key: "2", value: "Kelas 8" },
    { key: "3", value: "Kelas 9" },
  ],
  class_id: [
    { key: "1", value: "A" },
    { key: "2", value: "B" },
    { key: "3", value: "C" },
    { key: "4", value: "D" },
    { key: "5", value: "E" },
    { key: "6", value: "F" },
    { key: "7", value: "G" },
    { key: "8", value: "H" },
    { key: "9", value: "I" },
  ],
};

const SelectForm = ({
  label,
  register,
  name,
  defaultValue,
  error,
  inputProps,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-gray-500 text-xs font-medium after:content-['*'] after:ml-1 after:text-error-500">
        {label}
      </label>
      <select
        {...register(name)}
        className={`ring-[1.5px] text-gray-500 p-2 rounded-md text-sm outline-none w-full ${
          error ? "ring-error-300" : "ring-gray-300"
        }`}
        defaultValue={defaultValue}
        {...inputProps}
      >
        <option disabled value="">
          --Pilih{" "}
          {name === "gender"
            ? "Jenis Kelamain"
            : name === "bloodType"
            ? "Golongan Darah"
            : name === "class_id"
            ? "Kelas"
            : name === "grade_id"
            ? "Tingkat Kelas"
            : "Mata Pelajaran"}
        </option>
        {dataSelect[name].map((item) => (
          <option value={item.key} key={item.key}>
            {item.value}
          </option>
        ))}
      </select>
      {error?.message && (
        <p className="text-xs text-error-500 font-medium">
          {error?.message.toString()}
        </p>
      )}
    </div>
  );
};

export default SelectForm;
