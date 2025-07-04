import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { InputForm, SuccessToast } from "@/components";
import { loginUser } from "@/services";
import { AxiosError } from "axios";
import { useState } from "react";

type LoginData = {
  login: string;
  password: string;
};

type ValidationError = {
  message: string;
  errors?: {
    [key: string]: string[];
  };
};

const schema = z.object({
  login: z.string().min(3, { message: "Email of username is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const SignIn = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      setLoading(true);
      const res = await loginUser(data);
      navigate("/dashboard", { replace: true });
      SuccessToast({ message: res.message });
    } catch (err) {
      const error = err as AxiosError<ValidationError>;
      if (error.response?.data?.errors) {
        const fieldErrors = error.response.data.errors;
        Object.entries(fieldErrors).forEach(([field, messages]) => {
          setError(field as keyof LoginData, {
            type: "manual",
            message: messages[0],
          });
        });
      } else {
        alert("Login Failed");
      }
    } finally {
      setLoading(false);
    }
  });
  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className=" p-6 bg-white rounded-lg shadow-md w-[440px]">
        <h1 className="text-center font-medium text-md lg:text-lg">Sign In</h1>
        <form action="" onSubmit={onSubmit}>
          <div className="flex flex-col gap-4 mt-4">
            <InputForm
              label="Email or Username"
              name="login"
              type="text"
              placeholder="email or username"
              register={register}
              defaultValue=""
              error={errors.login}
            />
            <InputForm
              label="Password"
              name="password"
              type="password"
              placeholder="********"
              register={register}
              defaultValue=""
              error={errors.password}
            />
          </div>
          <button
            disabled={loading}
            className={`text-white mt-4 -mb-5 px-4 py-2 rounded-lg shadow-lg transition-all duration-300 w-full ${
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
                Loading ....
              </div>
            ) : (
              "Login"
            )}
          </button>
          <p className="text-center text-sm text-gray-500 mt-4">
            Don't have an account?{" "}
            <a href="/register" className="text-brand-500 hover:underline">
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
