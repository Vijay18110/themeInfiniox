"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Link from "next/link";
import AuthLayout from "../components/AuthLayout";

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: any) => console.log(data);

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Enter your details to access your account"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <input
            {...register("email")}
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary outline-none transition"
          />
          {errors.email && (
            <p className="text-red-400 text-xs mt-1">
              {errors.email.message as string}
            </p>
          )}
        </div>
        <div>
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:ring-2 focus:ring-primary outline-none transition"
          />
          {errors.password && (
            <p className="text-red-400 text-xs mt-1">
              {errors.password.message as string}
            </p>
          )}
        </div>
        <button className="w-full py-3 bg-primary text-white font-bold rounded-xl hover:brightness-110 transition active:scale-95">
          Sign In
        </button>
        <div className="flex justify-between text-xs text-white/50 pt-2">
          <Link href="/register" className="hover:text-primary">
            Create account
          </Link>
          <Link href="/forgot-password" className="hover:text-primary">
            Forgot password?
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
