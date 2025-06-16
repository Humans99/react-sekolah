import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";
import { InputForm } from "../../components";
import { loginUser } from "../../services";
import { AxiosError } from "axios";

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
      await loginUser(data);
      navigate("/dashboard", { replace: true });
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
              register={register}
              defaultValue=""
              error={errors.login}
            />
            <InputForm
              label="Password"
              name="password"
              type="password"
              register={register}
              defaultValue=""
              error={errors.password}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-brand-500 hover:bg-brand-600 text-white font-semibold px-4 py-2 rounded-md mt-6 transition-colors duration-300 cursor-pointer"
          >
            Sign In
          </button>
          <p className="text-center text-sm text-gray-500 mt-2">
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
