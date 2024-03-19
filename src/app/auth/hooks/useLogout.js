import { useRouter } from 'next/navigation'

export const useLogout = () => {
  const router = useRouter();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    router.push("/landing");
  };
  return { logout };
};
