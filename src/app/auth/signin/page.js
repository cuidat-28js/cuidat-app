"use client";
import FormSignin from "../components/Form-signin";
import Image from "next/image";
import { QueryClientProvider, QueryClient } from "react-query";
// import { Provider } from "react-redux";

export default function Signin() {
  const queryClient = new QueryClient();

  return (
    // <Provider>
    <QueryClientProvider client={queryClient}>
      <div className="flex w-full h-screen">
        <div className="w-full flex items-center justify-center lg:w-1/2">
          <FormSignin />
        </div>
        <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-100">
          <Image
            alt="hero logo"
            src="/ilustrations/grupo-salud.svg"
            width={1000}
            height={1000}
          />
        </div>
      </div>
    </QueryClientProvider>

    // </Provider>
  );
}
