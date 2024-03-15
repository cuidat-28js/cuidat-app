"use client"
import { QueryClientProvider, QueryClient } from "react-query";
import { redirect } from "next/navigation";

export default function AuthLayout({ children }) {
  const queryClient = new QueryClient();
  // const isAuthenticated = useIsAuthenticated();
  // if (!isAuthenticated) {
  //   return redirect("/auth/login");
  // }
  return (
    <QueryClientProvider client={queryClient} >
    { children }
    </QueryClientProvider>
  )

}
