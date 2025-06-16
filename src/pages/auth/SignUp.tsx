import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { InputForm } from "../../components";
import { registerUser } from "../../services";
import { useNavigate } from "react-router-dom";

const schema = z.object({
  username: z
    .string()
    .min(3, { message: "Username must be at least 3 characters long" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

const SignUp = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    try {
      await registerUser(data);
      navigate("/login", { replace: true });
      console.log(registerUser(data));
    } catch (error) {
    }
  });

  return (
    <div className="bg-gray-200 min-h-screen flex items-center justify-center">
      <div className=" p-6 bg-white rounded-lg shadow-md w-[440px]">
        <h1 className="text-center font-medium text-md lg:text-lg">Sign Up</h1>
        <form action="" onSubmit={onSubmit}>
          <div className="flex flex-col gap-4 mt-4">
            <InputForm
              label="Username"
              name="username"
              type="text"
              register={register}
              defaultValue=""
              error={errors.username}
            />
            <InputForm
              label="Email"
              name="email"
              type="email"
              register={register}
              defaultValue=""
              error={errors.email}
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
            Sign Up
          </button>
          <p className="text-center text-sm text-gray-500 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-brand-500 hover:underline">
              Sign In
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
