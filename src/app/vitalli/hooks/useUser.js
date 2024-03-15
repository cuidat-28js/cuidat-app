// import { useQuery } from 'react-query';

// async function getUser(token) {
//     if (!token) return null;
//     const response = await fetch("http//localhost:3001/user/profile", {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     if (!response.ok)
//       throw new Error('Failed on get user request');
  
//     return await response.json();
//   }
  
//   export function useUser() {
//     const { data: token, isError } = useQuery(
//       ['token'],
//       async () => getUser(token),
//       {
//         refetchOnMount: false,
//         refetchOnWindowFocus: false,
//         refetchOnReconnect: false,
//         initialData: userLocalStorage.getUser(),
//         onError: () => {
//           userLocalStorage.removeUser();
//         }
//       });
  
//     useEffect(() => {
//       if (!token || isError) userLocalStorage.removeUser();
//       else userLocalStorage.saveUser(token);
//     }, [token, isError]);
  
//     return {
//       user: user ?? null,
//     };
//   }