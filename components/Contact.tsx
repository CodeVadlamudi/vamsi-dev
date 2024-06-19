import { Lobster } from "next/font/google";
import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

const lobster = Lobster({ subsets: ["latin"], weight: "400" });

function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-zinc-100 h-screen flex items-center justify-center"
    >
      <div className="container grid grid-cols-1 lg:grid-cols-2">
        <form className="space-y-4">
          <h2
            className={`text-orange-500 text-3xl font-semibold mb-5 ${lobster.className}`}
          >
            Contact Me
          </h2>

          <div className="space-y-1">
            <Label htmlFor="name" className="font-medium text-lg">
              Full Name
            </Label>
            <Input
              type="text"
              id="name"
              className="border-2 border-orange-500 border-opacity-40 rounded-sm w-full h-14 px-4 outline-none text-lg bg-white"
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="phoneNumber" className="font-medium text-lg">
              Phone Number (WhatsApp)
            </Label>
            <Input
              type="tel"
              id="phoneNumber"
              maxLength={10}
              className="border-2 border-orange-500 border-opacity-40 rounded-sm w-full h-14 px-4 outline-none text-lg bg-white"
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="email" className="font-medium text-lg">
              Email
            </Label>
            <Input
              type="email"
              id="email"
              maxLength={10}
              className="border-2 border-orange-500 border-opacity-40 rounded-sm w-full h-14 px-4 outline-none text-lg bg-white"
              required
            />
          </div>

          <div className="space-y-1">
            <Label htmlFor="message" className="font-medium text-lg">
              Message
            </Label>
            <Textarea
              placeholder="Message"
              className="border-2 border-orange-500 border-opacity-40 rounded-sm w-full h-28 p-4 outline-none bg-white"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-orange-500 h-16 text-center rounded-md text-white font-medium text-lg hover:bg-black duration-300 block"
          >
            Submit
          </Button>
        </form>

        <div className="flex flex-col space-y-4 mt-10 md:mt-0 md:ml-20">
          <h3 className="text-xl font-medium underline text-orange-500">
            Address
          </h3>
          <address className="text-lg">
            Vijayawada, NTR District
            <br />
            Andhra Pradesh, India
          </address>
        </div>
      </div>
    </section>
  );
}

export default Contact;
