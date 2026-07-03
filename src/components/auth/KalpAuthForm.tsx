"use client";

import { useState } from "react";
import { useLocale } from "@/lib/i18n/LocaleContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/lib/store/store";
import { loginUser } from "@/lib/store/auth/authSlice";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const content = {
  en: {
    loginTitle: "Sign In",
    signupTitle: "Create Account",
    emailLabel: "Email",
    passwordLabel: "Password",
    confirmPasswordLabel: "Confirm Password",
    submitLogin: "Sign In",
    submitSignup: "Create Account",
    forgotPassword: "Forgot password?",
    switchToSignup: "Don't have an account?",
    switchToLogin: "Already have an account?",
    switchLink: "Sign up",
    switchLinkLogin: "Sign in",
    successMessage: "Welcome back!",
    errorMessage: "Invalid credentials. Please try again.",
  },
  hr: {
    loginTitle: "Prijava",
    signupTitle: "Izradi Račun",
    emailLabel: "Email",
    passwordLabel: "Lozinka",
    confirmPasswordLabel: "Potvrdi Lozinku",
    submitLogin: "Prijavi se",
    submitSignup: "Izradi Račun",
    forgotPassword: "Zaboravili ste lozinku?",
    switchToSignup: "Nemate račun?",
    switchToLogin: "Već imate račun?",
    switchLink: "Izradi račun",
    switchLinkLogin: "Prijavi se",
    successMessage: "Dobrodošli natrag!",
    errorMessage: "Neispravni podaci. Pokušajte ponovno.",
  },
};

export default function KalpAuthForm() {
  const locale = useLocale();
  const t = content[locale === "hr" ? "hr" : "en"];
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [email, setEmail] = useState("business@hrescic.com");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const dispatch= useDispatch<AppDispatch>();
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
      const response = await dispatch(loginUser({ email, password }))
      if (response.meta.requestStatus === "fulfilled") {
        setStatus("success");
        toast.success(t.successMessage);
        router.push("/");
      } else {
        setStatus("error");
        toast.error(t.errorMessage);
      }
  };

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <Card className="w-full max-w-md">
        <CardContent className="p-8">
          <h1 className="text-2xl font-semibold text-[#223039] mb-6 text-center">
            {mode === "login" ? t.loginTitle : t.signupTitle}
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#1F1F1F] mb-1.5">
                {t.emailLabel}
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-[48px] px-4 rounded-lg border border-[#DDDDDD] text-[#1F1F1F] placeholder-[#666666] focus:border-[#41C717] focus:ring-2 focus:ring-[#41C717]/20 outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-[#1F1F1F] mb-1.5">
                {t.passwordLabel}
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-[48px] px-4 pr-10 rounded-lg border border-[#DDDDDD] text-[#1F1F1F] placeholder-[#666666] focus:border-[#41C717] focus:ring-2 focus:ring-[#41C717]/20 outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#1F1F1F]"
                >
                  {showPassword ? EyeOffIcon : EyeIcon}
                </button>
              </div>
            </div>

            {mode === "signup" && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#1F1F1F] mb-1.5">
                  {t.confirmPasswordLabel}
                </label>
                <div className="relative">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full h-[48px] px-4 pr-10 rounded-lg border border-[#DDDDDD] text-[#1F1F1F] placeholder-[#666666] focus:border-[#41C717] focus:ring-2 focus:ring-[#41C717]/20 outline-none transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-[#666666] hover:text-[#1F1F1F]"
                  >
                    {showConfirmPassword ? EyeOffIcon : EyeIcon}
                  </button>
                </div>
              </div>
            )}

            {mode === "login" && (
              <div className="text-right">
                <button type="button" className="text-sm text-[#41C717] hover:underline">
                  {t.forgotPassword}
                </button>
              </div>
            )}

            <Button type="submit" variant="primary" className="w-full h-[48px]" disabled={status === "submitting"}>
              {status === "submitting" ? "..." : mode === "login" ? t.submitLogin : t.submitSignup}
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-[#555555]">
            {mode === "login" ? (
              <p>
                {t.switchToSignup}{" "}
                <button type="button" onClick={() => setMode("signup")} className="text-[#41C717] hover:underline font-medium">
                  {t.switchLink}
                </button>
              </p>
            ) : (
              <p>
                {t.switchToLogin}{" "}
                <button type="button" onClick={() => setMode("login")} className="text-[#41C717] hover:underline font-medium">
                  {t.switchLinkLogin}
                </button>
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

const EyeIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const EyeOffIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
    <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
    <line x1="1" y1="1" x2="23" y2="23" />
  </svg>
);
