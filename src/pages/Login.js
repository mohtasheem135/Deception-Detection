import React, { useState } from "react";
import axios from "axios";
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
import { useNavigate } from "react-router-dom";
import { useToast } from "../components/ui/use-toast";

const Login = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [details, setDetails] = useState({ name: "", password: "" });

  const handlechange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (details.name == "" || details.password == "") {
      toast({
        description: "Don't leave the fields empty!!!",
      });
      alert("Don't leave the fields empty!!!");
    } else {
      try {
        const res = await axios.get(
          `http://localhost:4000/admins?name=${details.name}&password=${details.password}`
        );
        console.log("res", res);
        const message = res?.data?.message || "success";
        if (message === "no such user") {
          toast({
            description: message,
          });
          alert(message);
        } else {
          toast({
            description: "Login Sucessfu",
          });
          localStorage.setItem("session", "started")
          navigate("/upload");
        }
      } catch (error) {
        const message = error?.response?.data?.message || "some error occured";
        console.error(message, error);
        toast({
          description: message,
        });
      }
    }
  };

  return (
    // <div>
    //  <h1>Verify that you are an admin</h1>
    //  <div>Name : <input onChange={handlechange} name="name" type="text"/></div>
    //  <div>Password : <input onChange={handlechange} name="password" type="password"/></div>
    //  <button onClick={() => handleImageClick()} style={{ cursor: 'pointer' }}>
    //     Submit
    //   </button>
    //  </div>
    <div className="h-[90vh]  flex items-center justify-center">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Admin Login</CardTitle>
          <CardDescription>Login as an Admin...</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">userName</Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handlechange}
                  name="name"
                  type="text"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">password</Label>
                <input
                  className="px-[10px] outline-none border-2 rounded-[8px] h-[35px] border-black"
                  onChange={handlechange}
                  name="password"
                  type="password"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={(e) => handleLogin(e)}>Log-In</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
