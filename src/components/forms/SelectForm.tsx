import type React from "react";
import type { FieldError } from "react-hook-form";

type Option = {
  key: string;
  value: string;
};

type Props = {
  label: string;
  register: any;
  name: "gender" | "bloodType" | "subject";
  error?: FieldError;
  defaultValue?: string;
  inputProps?: React.InputHTMLAttributes<HTMLSelectElement>;
};

const dataSelect: Record<"gender" | "bloodType" | "subject", Option[]> = {
  gender: [
    { key: "pria", value: "Pria" },
    { key: "wanita", value: "Wanita" },
  ],
  bloodType: [
    { key: "A", value: "A" },
    { key: "B", value: "B" },
    { key: "AB", value: "AB" },
    { key: "O", value: "O" },
  ],
  subject: [
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
