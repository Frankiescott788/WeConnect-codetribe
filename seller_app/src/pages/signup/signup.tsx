import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Image,
  Input,
} from "@nextui-org/react";
import signupimage from "../../assets/pictures/signup.svg";
import useAuth from "../../hooks/useAuth";
import { s } from "framer-motion/client";

export default function Signup() {
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
    setStreet
  } = useAuth();

  function Handlebtn () : void {
    if(!changeFields) {
      changeFieldsHandler();
    } else {
      sign_up();
    }
  }

  return (
    <section>
      <div className={`absolute top-0 z-10 left-[9rem] ${changeFields ? "mt-3 " : "mt-[5rem]"} transition-all`}>
        <Breadcrumbs>
          <BreadcrumbItem>Home</BreadcrumbItem>
          <BreadcrumbItem>Sign up</BreadcrumbItem>
        </Breadcrumbs>
      </div>
      {changeFields && (
        <div className="absolute top-0 z-10 left-[9rem] mt-[5rem] animate__animated animate_zoomIn">
        <button className="flex gap-2" onClick={() => changeFieldsHandler()}>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              color={"#9b9b9b"}
              fill={"none"}
            >
              <path
                d="M3.99982 11.9998L19.9998 11.9998"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p>Back</p>
        </button>
      </div>
      )}
      
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 lg:col-span-6 flex justify-center pt-[10rem]">
          <div>
            <div className="mb-2">
              <p className="text-3xl">Sign up</p>
              <p className="text-sm text-gray-400">Create a new account</p>
            </div>
            {!changeFields && (
              <>
                <Input
                  className="w-[30rem] mb-2"
                  label="Fist name"
                  onChange={(e) => setFirstname(e.target.value)}
                />
                <Input
                  className="w-[30rem]"
                  label="Last name"
                  onChange={(e) => setLastname(e.target.value)}
                />
                <Input
                  className="w-[30rem] my-2"
                  label="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  className="w-[30rem]"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  className="w-[30rem] my-2"
                  label="Phone"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </>
            )}
            {changeFields && (
              <>
                <Input
                  className="w-[30rem] mb-2"
                  label="BusinessName"
                  onChange={(e) => setBusinessName(e.target.value)}
                />
                <Input
                  className="w-[30rem]"
                  label="Street"
                  onChange={(e) => setStreet(e.target.value)}
                />
                <Input
                  className="w-[30rem] my-2"
                  label="City"
                  onChange={(e) => setCity(e.target.value)}
                />
                <Input
                  className="w-[30rem]"
                  label="Province"
                  onChange={(e) => setProvince(e.target.value)}
                />
                <Input
                  className="w-[30rem] my-2"
                  label="Country"
                  onChange={(e) => setCountry(e.target.value)}
                />
              </>
            )}
            

            <div className="flex justify-center">
              <Button
                className="px-[10rem] bg-[#2667ff] text-white"
                onClick={changeFields ? sign_up : Handlebtn}
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
