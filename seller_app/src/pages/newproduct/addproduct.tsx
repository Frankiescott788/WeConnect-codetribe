import { Button, Card, Image, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import usecrud from "../../hooks/usecrud";

export default function Addproduct() {
  const {
    setproductcategory,
    setproductdescription,
    setproductimage,
    setproductname,
    setproductprice,
    setproductquantity,
    create_product,
  } = usecrud();

  return (
    <section>
      <div className="flex justify-between mb-5">
        <p className="text-2xl">Add new product</p>
        <div className="flex gap-2">
          <Button className="px-[3rem]">Cancel</Button>
          <Button
            className="flex gap-2"
            onClick={() => {
              create_product();
            }}
          >
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
                  d="M5 14L8.5 17.5L19 6.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>Add Product</div>
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-6">
          <div className="bg-white p-3 rounded-md">
            <p>General Information</p>
            <div>
              <Input
                label="Product name"
                placeholder="type here..."
                className="mb-3"
                onChange={(e) => setproductname(e.target.value)}
              />
              <Textarea
                label="Description"
                placeholder="type here..."
                onChange={(e) => setproductdescription(e.target.value)}
              />
            </div>
          </div>
          <div className="p-3 rounded-md bg-white mt-3">
            <p>Pricing and Stock</p>
            <div className="flex gap-3">
              <Input
                label="Price"
                placeholder="type here..."
                className="mb-3"
                onChange={(e) => setproductprice(e.target.value)}
              />
              <Input
                label="Quantity"
                placeholder="type here..."
                className="mb-3"
                onChange={(e) => setproductquantity(e.target.value)}
              />
            </div>
          </div>
          <div className="p-3 bg-white rounded-md mt-3">
            <p>Category</p>
            <select
              className="select select-bordered w-full"
              data-theme="light"
              onChange={(e) => setproductcategory(e.target.value)}
            >
              <option disabled selected>
                Who shot first?
              </option>
              <option value="1">Han Solo</option>
              <option value="2">Greedo</option>
            </select>
          </div>

          <div className="p-3 bg-white rounded-md mt-3">
            <p>Product Image</p>
            <FileUploader
              handleChange={(file : any) => setproductimage(file)}
              name="file"
            />
          </div>
        </div>
        <div className="col-span-5">
          <Card className="shadow-none rounded-md  h-[35rem] border">
            <Image
              src="https://img.freepik.com/free-photo/pillow-sofa_74190-2070.jpg?ga=GA1.1.1638386202.1729882671&semt=ais_hybrid"
              className="rounded-md"
            />
          </Card>
        </div>
      </div>
    </section>
  );
}
