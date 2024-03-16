"use client"
import { QueryClientProvider, QueryClient } from "react-query";
import { redirect } from "next/navigation";
import { getUser } from "../auth/hooks/useUser";
import { useEffect } from "react";

export default function AuthLayout({ children }) {
  const queryClient = new QueryClient();
  // useEffect(()=>{
  //   const user = getUser();
  //   return user;
  // })
  
  // if(!user){
  //   redirect('/auth/login')
  // }
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
