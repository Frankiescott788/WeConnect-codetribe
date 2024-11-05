import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Image,
  Input,
} from "@nextui-org/react";
import signupimage from "../../assets/pictures/signup.svg";
import useAuth from "../../hooks/useAuth";

export default function Signin() {
  const {
    sign_up,
    isLoading,
    setEmail,
    setFirstname,
    setLastname,
    setPassword,
    setPhone,
    changeFields,
    changeFieldsHandler,
    setBusinessName,
    setChangeFields,
    setCountry,
    setCity,
    setProvince,
    setStreet,
    sign_in
  } = useAuth();

  function Handlebtn(): void {
    if (!changeFields) {
      changeFieldsHandler();
    } else {
      sign_up();
    }
  }

  return (
    <section>
      <div
        className={`absolute top-0 z-10 left-[9rem] ${
          changeFields ? "mt-3 " : "mt-[5rem]"
        } transition-all`}
      >
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Sign up</BreadcrumbItem>
        </Breadcrumbs>
      </div>

      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-6 flex justify-center pt-[15rem]">
          <div>
            <div className="mb-2">
              <p className="text-3xl">Sign in</p>
              <p className="text-sm text-gray-400">Welcome back, login to your account</p>
            </div>

            <Input
              className="w-[30rem] my-2"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              className="w-[30rem] mb-5"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <div className="flex justify-center">
              <Button
                className="px-[10rem] bg-[#2667ff] text-white"
                onClick={sign_in}
              >
                {!changeFields ? "Next" : "Sign up"}
              </Button>
            </div>
            <p className="text-center text-gray-400">
              Already have an account? Sign in
            </p>
          </div>
        </div>
        <div className="col-span-6 me-[5rem] pt-[8rem]">
          <Image src={signupimage} />
        </div>
      </div>
    </section>
  );
}
