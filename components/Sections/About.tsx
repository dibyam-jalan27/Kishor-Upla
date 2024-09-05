import { MailIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin, BiLogoTwitter } from "react-icons/bi";
import Link from "next/link";
import { FaXTwitter } from "react-icons/fa6";

export default function About() {
  return (
    <div className="flex flex-col md:flex-row h-full items-center md:justify-center w-full">
      <div className="md:w-3/8 mb-5">
        <Image
          src="/hero.png"
          alt="hero"
          width={800}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className="md:w-1/2 md:ml-4">
        <h1
          className="text-3xl md:text-5xl font-bold
                text-center md:text-left"
        >
          Kishor <span className="text-primary">Upla</span>, Ph.D.{" "}
        </h1>
        <h1 className="text-xl md:text-2xl font-medium pt-3 text-center md:text-left">
          Assistant Professor | Electronics Engineering
        </h1>
        <p
          className="text-sm font-light md:text-base text-muted-foreground pt-4 text-center md:text-left px-8 md:px-0
          leading-7 md:leading-9
              "
        >
          I am an academic with a Ph.D. in Electronics and Communication,
          specializing in multi-resolution image fusion. With over a decade of
          experience at SVNIT Surat, I have published extensively and received
          recognition, including the ERCIM Post-doctoral Fellowship. My research
          focuses on machine learning, deep learning, and biomedical image
          processing.
        </p>
      </div>
      <div className="md:w-1/10 mx-5 md:space-y-5 flex md:flex-col space-x-4 mt-5">
        <Link href="mailto:kishorupla@gmail.com">
          <Button className="rounded-full bg-white hover:border-white  text-primary py-5 md:py-7 px-3 hover:text-white font-bold border-2 border-primary">
            <AiOutlineMail className="text-xl md:text-3xl" />
          </Button>
        </Link>
        <Button className="rounded-full bg-white hover:border-white  text-primary py-5 md:py-7 px-3 hover:text-white font-bold border-2 border-primary">
          <BiLogoLinkedin className="text-xl md:text-3xl" />
        </Button>
        <Button className="rounded-full bg-white hover:border-white  text-primary py-5 md:py-7 px-3 hover:text-white font-bold border-2 border-primary">
          <FaXTwitter className="text-xl md:text-3xl" />
        </Button>
      </div>
    </div>
  );
}
