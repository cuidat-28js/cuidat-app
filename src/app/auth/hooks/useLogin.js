import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "react-query";

const login = async (data) => {
  try {
    const response = await fetch("http://localhost:3001/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      console.log(jsonResponse.token);
      setTimeout(() => {
        localStorage.setItem("token", jsonResponse.token);
        localStorage.setItem("user", JSON.stringify(jsonResponse));

      }, 1500);
      console.log(jsonResponse);
      // dispatch({ type: "LOGIN", payload: jsonResponse });
      // setIsAuthenticated(true);
      // router.push("/vitalli/home");
    } else {
      // setIsAuthenticated(false);
      console.log("error al iniciar sesion", response.body);
    }
  } catch (error) {
    console.log(error, "error al crear la solicitud");
  }
};

export const useLogin = () => {
  const queryClient = useQueryClient();
  const router = useRouter();

  const loginMutation = useMutation((data) => login(data), {
    onSuccess: (data) => {
      queryClient.setQueryData('user', data);
      router.push('/vitalli/home');
      // TODO: save the user in the state
    },
    onError: (error) => {
      console.log(error);
    }
  });
  const logInMutation = loginMutation.mutate;
  return logInMutation;
};
