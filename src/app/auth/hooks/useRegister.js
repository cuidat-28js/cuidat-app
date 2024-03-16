import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "react-query";

const signin = async (data) => {
  try {
    const response = await fetch("http://localhost:3001/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      const jsonResponse = await response.json();
      const token = jsonResponse.data.token;
      setTimeout(() => {
        localStorage.setItem("token", token);
      }, 1500);
      console.log("user created", jsonResponse);
      // router.push("/vitalli/home");
    } else {
      console.log(response.body);
      console.log("error al registrar un usuario");
    }
  } catch (error) {
    console.log(error, "error al crear la solicitud");
  }
};
export default function useRegister() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const signinMutation = useMutation(
    ({ email, password }) => signin({ email, password }),
    {
      onSuccess: (data) => {
        queryClient.setQueryData('user', data);
        // TODO: save the user in the state
        router.push("/vitalli/home");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );
  const registerMutation = signinMutation.mutate;
  return registerMutation;
}
