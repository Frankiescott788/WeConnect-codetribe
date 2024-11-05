import { BreadcrumbItem, Breadcrumbs, Button, Image, Input } from "@nextui-org/react";
import signupimage from "../../assets/pictures/signup.svg";
import useAuth from "../../hooks/useAuth";

export default function Signup() {
    const { sign_up, isLoading, setEmail, setFirstname, setLastname, setPassword, setPhone } = useAuth();

  return (
    <section>
        <div className="absolute top-0 z-10 left-[9rem] mt-3">
            <Breadcrumbs>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem>Sign up</BreadcrumbItem>
            </Breadcrumbs>
        </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-6 flex justify-center pt-[10rem]">
          <div>
            <div className="mb-2">
                <p className="text-3xl">Sign up</p>
                <p className="text-sm text-gray-400">Create a new account</p>
            </div>
            <Input className="w-[30rem] mb-2" label="Fist name" onChange={(e) => setFirstname(e.target.value)}/>
            <Input className="w-[30rem]" label="Last name" onChange={(e) => setLastname(e.target.value)}/>
            <Input className="w-[30rem] my-2" label="Email" onChange={(e) => setEmail(e.target.value)}/>
            <Input className="w-[30rem]" label="Password" onChange={(e) => setPassword(e.target.value)}/>
            <Input className="w-[30rem] my-2" label="Phone" onChange={(e) => setPhone(e.target.value)}/>
            <div className="flex justify-center">
                <Button className="px-[10rem] bg-[#2667ff] text-white" onClick={sign_up}>Sign up</Button>
            </div>
            <p className="text-center text-gray-400">Already have an account? Sign in</p>
          </div>
        </div>
        <div className="col-span-6 me-[5rem] pt-[8rem]">
          <Image src={signupimage} />
        </div>
      </div>
    </section>
  );
}
