"use client";
import FormLogin from "@/app/auth/components/Form-login.js";
import { QueryClientProvider, QueryClient } from "react-query";
// import { Provider } from "react-redux";

export default function Login() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex w-full h-screen justify-center">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <FormLogin />
        </div>
      </div>
    </QueryClientProvider>
  );
}
