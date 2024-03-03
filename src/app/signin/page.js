import FormSignin from "../components/signin-components/Form-signin";
import Image from "next/image";

export default function signin() {
  return (
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
        {/* <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink500 rounded-full animate-spin">
        </div>
        <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg">
        </div> */}
      </div>
    </div>
  );
}