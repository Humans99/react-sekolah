import type React from "react";
import type { FieldError } from "react-hook-form";

type Props = {
  label: string;
  type: string;
  register: any;
  name: string;
  defaultValue?: string;
  placeholder: string;
  disabled?: boolean;
  error?: FieldError;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
};

const InputForm = ({
  label,
  type = "text",
  register,
  name,
  defaultValue,
  placeholder,
  error,
  disabled,
  inputProps,
}: Props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <div className="text-gray-500 text-xs font-medium after:content-['*'] after:text-error-500 after:ml-1">
        {label}
      </div>
      <input
        className={`text-gray-600 font-medium ring-[1.5px] p-2 rounded-md text-sm outline-none focus:pl-3 focus:ring-[1.5px] disabled:cursor-not-allowed disabled:bg-gray-200 transition-all duration-300 w-full placeholder:text-[10px] ${
          error
            ? "ring-error-300 focus:ring-error-500"
            : "ring-gray-300 focus:ring-brand-500"
        }`}
        type={type ?? "text"}
        name={name}
        id={name}
        placeholder={placeholder}
        disabled={disabled ?? false}
        autoComplete="off"
        {...register(name)}
        defaultValue={defaultValue}
        {...inputProps}
      />
      {error?.message && (
        <p className="text-xs text-error-500 font-medium">
          {error.message.toString()}
        </p>
      )}
    </div>
  );
};

export default InputForm;
