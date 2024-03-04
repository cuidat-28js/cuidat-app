import FormLogin from "@/app/components/login-components/Form-login.js";

export default function login() {
  return (
    <div className="flex w-full h-screen justify-center">
      <div className="w-full flex items-center justify-center lg:w-1/2">
        <FormLogin />
      </div>
      {/* <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink500 rounded-full animate-spin">
        </div>
        <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg">
        </div>
      </div> */}
    </div>
  );
}
