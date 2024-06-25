import React, { useState } from "react";
import axios from "axios";

import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/ui/use-toast";
import Error from "./error";

const Upload = () => {
  const [file, setFile] = useState(null);
  const [details, setDetails] = useState({
    title: "",
    description: "",
    medium: "",
    price: "",
    stock: "",
    date: "",
    discount: "",
    type: "",
    rating: "",
  });

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append("file", file);
    Object.keys(details).forEach((key) => {
      formData.append(key, details[key]);
    });

    try {
      const res = await axios.post("http://localhost:4000/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(res.data.message);
      if (res.data.message === "added successfully") {
        window.alert("Added successfully");
      } else {
        window.alert("Art piece already exists in the database");
      }
    } catch (error) {
      console.error("Error uploading file:", error);
      window.alert("Error uploading file");
    }
  };

  return localStorage.getItem("session") ? (
    <div className="flex items-center justify-center pt-[20px] pb-[40px]">
      <Card className="w-[450px] bg-gray-100">
        <CardHeader>
          <CardTitle>Enter the details</CardTitle>
          {/* <CardDescription>Fill the form</CardDescription> */}
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-2">
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Title<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleInputChange}
                  value={details.title}
                  type="text"
                  name="title"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Description<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleInputChange}
                  value={details.description}
                  type="text"
                  name="description"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Medium<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleInputChange}
                  value={details.medium}
                  type="text"
                  name="medium"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Price in rupees (₹)<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  value={details.price}
                  onChange={handleInputChange}
                  type="number"
                  name="price"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Stock<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleInputChange}
                  type="number"
                  value={details.stock}
                  name="stock"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Created At in DD-MM-YYYY<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleInputChange}
                  value={details.date}
                  type="string"
                  name="date"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Discount<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleInputChange}
                  value={details.discount}
                  type="number"
                  name="discount"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Type<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleInputChange}
                  value={details.type}
                  type="text"
                  name="type"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Rating<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handleInputChange}
                  type="number"
                  value={details.rating}
                  name="rating"
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label htmlFor="name">
                  Upload File<b className="text-red-800">*</b>
                </Label>
                <input
                  className="px-[0px] outline-none   border-black"
                  type="file"
                  onChange={handleFileChange}
                  name="image"
                />
                {/* <image src={imagePreview} width={"100%"}></image> */}
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={(e) => handleFileUpload(e)}>Submit</Button>
        </CardFooter>
      </Card>
    </div>
  ) : (
    <Error />
  );
};

export default Upload;
