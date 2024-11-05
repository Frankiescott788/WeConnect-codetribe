import { Button, Card, Image } from "@nextui-org/react";
import ChartComponent from "../../../components/charts/chart";

export default function Overview() {
  return (
    <section>
      <div className="flex justify-between pe-[3rem] mb-5">
        <div>
          <p className="text-2xl">Dashboard Overview</p>
          <p className="text-sm text-gray-400">Lorem ipsum dolor sit amet.</p>
        </div>
        <div>
          <Button className="flex bg-[#2667ff] text-white rounded-md shadowed-btn">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                color={"#fff"}
                fill={"none"}
              >
                <path
                  d="M12 8V16M16 12L8 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <div>Add new Product</div>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-2">
        <div className="col-span-3">
          <Card className="shadow-none border rounded-md">
            <div className="p-2">
              <p className="text-xl">Inventory Value</p>
              <div>
                <p className="text-4xl">275</p>
                <p className="text-sm text-gray-400">
                  Inventory left in the store
                </p>
              </div>
            </div>
          </Card>
        </div>
        <div className="col-span-3">
          <Card className="shadow-none border rounded-md">
            <div className="p-2">
              <div className="flex">
                <p className="text-xl text-gray-400">Recent Orders</p>
                <div className="absolute right-10 top-10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width={24}
                    height={24}
                    color={"#b388eb"}
                    fill={"none"}
                  >
                    <path
                      d="M3 11C3 7.25027 3 5.3754 3.95491 4.06107C4.26331 3.6366 4.6366 3.26331 5.06107 2.95491C6.3754 2 8.25027 2 12 2C15.7497 2 17.6246 2 18.9389 2.95491C19.3634 3.26331 19.7367 3.6366 20.0451 4.06107C21 5.3754 21 7.25027 21 11V13C21 16.7497 21 18.6246 20.0451 19.9389C19.7367 20.3634 19.3634 20.7367 18.9389 21.0451C17.6246 22 15.7497 22 12 22C8.25027 22 6.3754 22 5.06107 21.0451C4.6366 20.7367 4.26331 20.3634 3.95491 19.9389C3 18.6246 3 16.7497 3 13V11Z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 9.5L7 9.5M10 14.5H7"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>

              <div>
                <p className="text-4xl">275</p>
                <p className="text-sm text-gray-400">orders need attention.</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="absolute right-10 w-[30rem]">
          <Card className="rounded-md shadow-none border h-[35rem] p-2">
            <div>
              <div>
                <p className="text-lg">Available Products</p>
              </div>
              <div className="grid grid-cols-12 pt-2 gap-2">
                <Card className="col-span-6 shadow-none border rounded-md">
                  <Image
                    src="https://img.freepik.com/free-photo/pillow-sofa_74190-2070.jpg?ga=GA1.1.1638386202.1729882671&semt=ais_hybrid"
                    className="rounded-sm"
                  />
                  <div className="p-2">
                    <p>Office Chill</p>
                    <p className="text-gray-400 text-sm">23 Available</p>
                    <p className="text-2xl">R 345.00</p>
                  </div>
                </Card>

                <Card className="col-span-6 shadow-none border rounded-md">
                  <Image
                    src="https://img.freepik.com/free-photo/pillow-sofa_74190-2070.jpg?ga=GA1.1.1638386202.1729882671&semt=ais_hybrid"
                    className="rounded-sm"
                  />
                  <div className="p-2">
                    <p>Office Chill</p>
                    <p className="text-gray-400 text-sm">23 Available</p>
                    <p className="text-2xl">R 345.00</p>
                  </div>
                </Card>

                <Card className="col-span-6 shadow-none border rounded-md">
                  <Image
                    src="https://img.freepik.com/free-photo/pillow-sofa_74190-2070.jpg?ga=GA1.1.1638386202.1729882671&semt=ais_hybrid"
                    className="rounded-sm"
                  />
                  <div className="p-2">
                    <p>Office Chill</p>
                    <p className="text-gray-400 text-sm">23 Available</p>
                    <p className="text-2xl">R 345.00</p>
                  </div>
                </Card>

                <Card className="col-span-6 shadow-none border rounded-md">
                  <Image
                    src="https://img.freepik.com/free-photo/pillow-sofa_74190-2070.jpg?ga=GA1.1.1638386202.1729882671&semt=ais_hybrid"
                    className="rounded-sm"
                  />
                  <div className="p-2">
                    <p>Office Chill</p>
                    <p className="text-gray-400 text-sm">23 Available</p>
                    <p className="text-2xl">R 345.00</p>
                  </div>
                </Card>
              </div>
            </div>
          </Card>
        </div>
      </div>
      <div className="w-[43rem]  bg-white mt-5">
        <ChartComponent />
      </div>
    </section>
  );
}
