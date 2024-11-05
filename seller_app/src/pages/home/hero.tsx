import { Button, Card, CardBody, User } from "@nextui-org/react";
import { RiStarFill } from "@remixicon/react";

export default function Hero() {
  return (
    <section className="px-[2rem] ">
      <div className="w-full h-[85dvh] flex justify-center hero rounded-md pt-[13rem]">
        <div className="text-center hero-child">
          <p className="text-5xl">
            Grow Your <span className="text-[#2667ff]">Business</span> with
            Phola
          </p>
          <p className="text-gray-600">
            Reach more customers, manage your products, and boost your sales—all
            in one place.
          </p>
          <div>
            <Button className="px-[5rem] my-2 bg-[#2667ff] text-white">
              Get Started
            </Button>
          </div>
        </div>
        <div className="absolute w-[20rem] bottom-0 mb-[3rem] left-0 ms-[4rem]">
          <Card className="shadow-none">
            <CardBody>
            <div className="flex gap-[10rem] mb-2">
                    <User
                        name="John Doe"
                        description="CEO, Phola"
                    />
                </div>
                <p className="text-gray-400 text-sm">An absolute game-changer for my business</p>
                <div className="flex mt-2">
                    <RiStarFill size={15} className="text-yellow-500"/>
                    <RiStarFill size={15} className="text-yellow-500"/>
                    <RiStarFill size={15} className="text-yellow-500"/>
                    <RiStarFill size={15} className="text-yellow-500"/>
                    <RiStarFill size={15} className="text-gray-400"/>
                </div>
            </CardBody>
            {/* <CardFooter>
                
            </CardFooter> */}
          </Card>

          <Card className="shadow-none mt-2">
            <CardBody>
            <div className="flex gap-[10rem] mb-2">
                    <User
                        name="John Doe"
                        description="CEO, Phola"
                    />
                </div>
                <p className="text-gray-400 text-sm">An absolute game-changer for my business</p>
                <div className="flex mt-2">
                    <RiStarFill size={15} className="text-yellow-500"/>
                    <RiStarFill size={15} className="text-yellow-500"/>
                    <RiStarFill size={15} className="text-yellow-500"/>
                    <RiStarFill size={15} className="text-gray-400"/>
                    <RiStarFill size={15} className="text-gray-400"/>
                </div>
            </CardBody>
            {/* <CardFooter>
                
            </CardFooter> */}
          </Card>
        </div>
      </div>
    </section>
  );
}
