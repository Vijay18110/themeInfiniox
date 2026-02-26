"use client"; // Essential for Next.js 16 Client-side hooks

import * as z from "zod";
import Link from "next/link";
import AuthLayout from "../components/AuthLayout";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const forgotSchema = z.object({
  email: z.string().trim().email("Please enter a valid email address"),
});

type ForgotPasswordValues = z.infer<typeof forgotSchema>;

export default function ForgotPasswordPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordValues>({
    resolver: zodResolver(forgotSchema),
  });

  const onSubmit = async (data: ForgotPasswordValues) => {
    // Simulate API delay
    await new Promise((r) => setTimeout(r, 1500));
    console.log("Reset link requested for:", data.email);
    // You can trigger your React Toastify success message here
  };

  return (
    <AuthLayout
      title="Reset Password"
      subtitle="We will send a reset link to your email"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="space-y-1">
          <input
            {...register("email")}
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-primary transition-all"
          />
          {errors.email && (
            <p className="text-red-400 text-xs ml-1 font-medium">
              {errors.email.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3 bg-primary text-white font-bold rounded-xl transition hover:brightness-110 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Sending Link..." : "Send Link"}
        </button>

        <div className="text-center pt-2">
          <Link
            href="/login"
            className="text-xs text-white/50 hover:text-primary transition-colors"
          >
            ← Back to Login
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
