import React, { useState } from "react";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";

const Contact = () => {
  const [details, setDetails] = useState({ name: "", email: "", message: "" });

  const handlechange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (details.name == "" || details.email == "" || details.message=="") {
      console.log(details)
      alert("Don't leave the fields empty!!!");
    } else {
      alert("We got your query!\nwe will connect with you shortly!!!");
    }
  };

  return (
    <div className="flex">
      <div className="flex-1 h-[600px]">
        <div className="flex justify-center items-center h-[600px]">
          <Card className="w-[650px] border-0">
            <CardHeader>
              <CardTitle>
                <p className="text-[40px]">Connect with me!</p>
              </CardTitle>
              <CardDescription>
                <p className="text-[15px] mt-[20px] leading-[25px]">
                  For all and any kid of commision work you can connect with me,
                  I also take bulk projects
                  <br />
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap
                </p>
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="flex-1  h-[600px]">
        <div className="flex justify-center items-center  h-[600px]">
          <Card className="w-[500px] border-0">
            <CardHeader>
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Fill the form accurately, and we'll get back to you promptly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                  <div className="grid w-full items-center gap-4">
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Name</Label>
                      <input
                        className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                        onChange={handlechange}
                        name="name"
                        type="text"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Email</Label>
                      <input
                        className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                        onChange={handlechange}
                        name="email"
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col space-y-1.5">
                      <Label htmlFor="name">Query</Label>
                      <textarea
                        className="px-[10px] outline-none border-2 rounded-[8px] h-[85px] border-black"
                        onChange={handlechange}
                        name="message"
                        type="text"
                      />
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button onClick={(e) => handleLogin(e)}>Log-In</Button>
              </CardFooter>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
