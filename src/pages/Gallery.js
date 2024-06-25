import React from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../components/ui/dialog";
import { Label } from "../components/ui/label";
import { OrderNow } from "../components/gallery/order-now";

const Gallery = ({ GalleryData }) => {
  return (
    <div className="pb-[60px] pt-[60px] flex items-center justify-center">
      <Card className="w-[1000px]">
        <CardHeader>
          <CardTitle>Welcome to my Gallery!</CardTitle>
          <CardDescription>
            We also do the modification as per your requirement...
          </CardDescription>
        </CardHeader>
        <CardContent>
          {GalleryData.map((data, index) => {
            const price = data?.price;
            const discount = data?.discount;
            const ourPrice = Math.round(price - price * (discount / 100));

            const imageUrl = `data:image/jpeg;base64,${data?.image?.data}`;

            return (
              <div className="pb-[20px] flex flex-col justify-center items-center">
                <Card
                  key={index}
                  className="bg-gray-200 border-0 border-black w-full p-[20px]"
                >
                  <CardHeader>
                    <CardTitle>{data?.title}</CardTitle>
                    <CardDescription>{data?.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex">
                      <div className="bg-white rounded-[8px] border-0 flex justify-start items-center border-black w-[200px] h-[150px]">
                        
                        <img className=" w-full h-full rounded-[8px]" src={imageUrl} alt="Your Image" />
                      </div>
                      <div className="bg-white rounded-[8px] border-0 flex border-black p-[20px] ml-[60px] w-full ">
                        <div className="border-0 border-black flex-1 h-[100px] justify-evenly flex flex-col ">
                          <p>
                            <b>Medium: </b>
                            {data?.medium}
                          </p>
                          <p>
                            <b>Type: </b>
                            {data?.type}
                          </p>
                        </div>
                        <div className="border-0 border-black flex-4 h-[100px] justify-evenly flex flex-col ">
                          <p className="line-through">
                            <b>price: </b>₹ {price}
                          </p>
                          <p>
                            <b>Our Price: </b>₹ {ourPrice}
                          </p>
                          <OrderNow />
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </div>
  );
};

export default Gallery;
