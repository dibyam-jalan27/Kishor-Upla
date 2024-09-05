import Image from "next/image";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BiLogoLinkedin } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import { Button } from "../ui/button";

export default function About() {
  return (
    <div className="flex h-full w-full flex-col items-center md:flex-row md:justify-center">
      <div className="md:w-3/8 mb-5">
        <Image
          src="/hero.png"
          alt="hero"
          width={800}
          height={400}
          objectFit="cover"
        />
      </div>
      <div className="md:ml-4 md:w-1/2">
        <h1 className="text-center text-3xl font-bold md:text-left md:text-5xl">
          Kishor <span className="text-primary">Upla</span>, Ph.D.{" "}
        </h1>
        <h1 className="pt-3 text-center text-xl font-medium md:text-left md:text-2xl">
          Assistant Professor | Electronics Engineering
        </h1>
        <p className="px-8 pt-4 text-center text-sm font-light leading-7 text-muted-foreground md:px-0 md:text-left md:text-base md:leading-9">
          I am an academic with a Ph.D. in Electronics and Communication,
          specializing in multi-resolution image fusion. With over a decade of
          experience at SVNIT Surat, I have published extensively and received
          recognition, including the ERCIM Post-doctoral Fellowship. My research
          focuses on machine learning, deep learning, and biomedical image
          processing.
        </p>
        <div className="mt-4 flex flex-col items-center justify-center space-y-2 px-7 md:w-full md:flex-row md:space-x-3 md:space-y-0 md:px-0">
          <a href="/KishorUplaCV.pdf" className="w-full">
            <Button
              className="w-full border-2 border-primary text-primary hover:border-primary hover:bg-primary hover:text-white"
              variant="secondary"
            >
              Download CV
            </Button>
          </a>
          <Link href="mailto:dibyam1jalan@gmail.com" className="w-full">
            <Button className="w-full">Contact Me</Button>
          </Link>
        </div>
      </div>
      <div className="md:w-1/10 mx-5 mt-5 flex space-x-4 md:flex-col md:space-x-0 md:space-y-5">
        <Link href="mailto:kishorupla@gmail.com">
          <Button className="rounded-full border-2 border-primary bg-white px-3 py-5 font-bold text-primary hover:border-white hover:text-white md:py-7">
            <AiOutlineMail className="text-xl md:text-3xl" />
          </Button>
        </Link>
        <Button className="rounded-full border-2 border-primary bg-white px-3 py-5 font-bold text-primary hover:border-white hover:text-white md:py-7">
          <BiLogoLinkedin className="text-xl md:text-3xl" />
        </Button>
        <Button className="rounded-full border-2 border-primary bg-white px-3 py-5 font-bold text-primary hover:border-white hover:text-white md:py-7">
          <FaXTwitter className="text-xl md:text-3xl" />
        </Button>
      </div>
    </div>
  );
}
