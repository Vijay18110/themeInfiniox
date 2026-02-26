"use client"; // MUST BE THE FIRST LINE

import * as z from "zod";
import AuthLayout from "../components/AuthLayout";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import Link from "next/link";

const registerSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  password: z.string().min(8, "Security requires 8+ characters"),
});

// Use default export for Next.js pages
export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    console.log(data);
  };

  return (
    <AuthLayout
      title="Join CraftWorks"
      subtitle="Start your journey with premium craftsmanship"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-1">
          <input
            {...register("name")}
            placeholder="Full Name"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-primary transition"
          />
          {errors.name && (
            <p className="text-red-400 text-xs ml-1">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <input
            {...register("email")}
            placeholder="Email Address"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-primary transition"
          />
          {errors.email && (
            <p className="text-red-400 text-xs ml-1">{errors.email.message}</p>
          )}
        </div>

        <div className="space-y-1">
          <input
            {...register("password")}
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-primary transition"
          />
          {errors.password && (
            <p className="text-red-400 text-xs ml-1">
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-primary text-white font-bold rounded-xl active:scale-95 transition hover:brightness-110"
        >
          Register
        </button>
      </form>
      <div className="flex justify-between text-xs text-white/50 pt-2">
        <Link href="/login" className="hover:text-primary">
          Already have an account? Login
        </Link>
      </div>
    </AuthLayout>
  );
}
