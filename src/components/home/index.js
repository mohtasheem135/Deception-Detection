import React from "react";
import Typewriter from "typewriter-effect";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";

const HomeHeader = () => {
  return (
    <div className="flex">
      <div className="flex-1 h-[600px]">
        {/* <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong><br/>'
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              //   .pauseFor(1500)
              .typeString(
                '<strong>only <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              //   .pauseFor(1500)
              //   .deleteAll()
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        /> */}
        <div className="flex justify-center items-center h-[600px]">
          <Card className="w-[650px] border-0">
            <CardHeader>
              <CardTitle>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                    .typeString(
                        // '<strong> <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
                        '<p style="font-size: 55px;">Hello, Sudip this side!</p>'
                    )
                    .callFunction(() => {
                        console.log("String typed out!");
                    })
                    

                      .start();
                  }}
                />
              </CardTitle>
              <CardDescription>
                {/* Login as an Admin... */}
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(
                        // '<strong> <span style="color: #27ae60;">5kb</span> Gzipped!</strong>'
                        '<p style="font-size: 25px;line-height: 30px;">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap </p>'
                      )
                      .callFunction(() => {
                        console.log("String typed out!");
                      })
                      .pauseFor(3500)
                      .start();
                  }}
                />
                </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
      <div className="flex-1  h-[600px]">
      <div className="flex justify-center items-center  h-[600px]">
          <Card className="w-[650px] border-0">
            <CardHeader >
              {/* <CardTitle >
                
              </CardTitle>  */}
              <div className="flex justify-center items-center ml-[40px] w-[400px]">

              <img src="/img/sketch-after.jpg" alt="sudip" />
              </div>
              {/* <CardDescription>
                
                </CardDescription> */}
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
