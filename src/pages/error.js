import React from 'react'
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
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
    const getBack = async (e) => {
        e.preventDefault();
        navigate("/");
    }
  return (
    <div className="h-[90vh]  flex items-center justify-center">
      <Card className="w-[350px] border-0">
        <CardHeader >
            <div className='flex flex-col justify-center items-center'>

          <CardTitle>OOPs!!!</CardTitle>
          <CardDescription>Something went wrong</CardDescription>
            </div>
        </CardHeader>
        <CardContent>
          <img src='/img/er-cat.png' alt='error'/>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={(e) => getBack(e)}>Go-Back-Home</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default Error
