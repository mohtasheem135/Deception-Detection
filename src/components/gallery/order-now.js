import { useState } from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { Info } from "lucide-react";

export function OrderNow() {
  const [details, setDetails] = useState({
    userName: "",
    email: "",
    instruction: "",
  });
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      details.userName == "" ||
      details.email == "" ||
      details.instruction == ""
    ) {
      alert("We received your message, \nwe will connect with you in a Flash!");
      console.log(details);
    } else {
      alert("Don't leave the fields empty!!!");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Order-Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Place your Order</DialogTitle>
          <DialogDescription>
            Please fill the form and we will connect with you and understand
            your requirement's clearly
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <input
              className="px-[10px] w-[250px] outline-none border-2 rounded-[8px] h-[35px] border-black"
              onChange={handleChange}
              type="text"
              name="userName"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Email
            </Label>
            <input
              className="px-[10px] w-[250px] outline-none border-2 rounded-[8px] h-[35px] border-black"
              onChange={handleChange}
              type="text"
              name="email"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    {/* <Button variant="outline">Hover</Button> */}
                    <div className="flex items-center justify-evenly">
                      <p>Message</p>
                      <Info className="w-3 h-3 mt-1" />
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Send your Message/Instruction's to us </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </Label>
            <textarea
              className="px-[10px] w-[250px] outline-none border-2 rounded-[8px] h-[75px] border-black"
              onChange={handleChange}
              type="text"
              name="email"
            />
          </div>
        </div>
        <DialogFooter>
          <Button onClick={(e) => handleSubmit(e)}>Confirm Order</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
