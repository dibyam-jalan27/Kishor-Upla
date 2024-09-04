"use client";
import Image from "next/image";

export default function Sections() {
  return (
    <div>
      <section className="h-[calc(100dvh)] w-full">
        <div className="flex flex-col md:flex-row h-full items-center justify-center w-full">
          <div className="md:w-2/5 h-1/2">
            <Image
              src="/hero.png"
              alt="hero"
              width={800}
              height={500}
              objectFit="cover"
            />
          </div>
          <div className="md:w-2/5 md:ml-4">
            <h1
              className={`text-3xl md:text-5xl font-bold
                text-center md:text-left
              `}
            >
              Kishor <span className="text-primary">Upla</span>, Ph.D.{" "}
            </h1>
            <h1
              className={`text-xl md:text-2xl font-medium pt-3
                text-center md:text-left
              `}
            >
              Assistant Professor | Electronics Engineering
            </h1>
            <p
              className="text-sm font-light md:text-base text-muted-foreground pt-4 text-center md:text-left
              px-8 md:px-0
              "
              style={{ lineHeight: "1.8" }}
            >
              I am an academic with a Ph.D. in Electronics and Communication,
              focusing on multi-resolution image fusion. With over a decade of
              experience as an Assistant Professor at SVNIT Surat, I{"'"}ve
              earned recognition for my research in computer vision and image
              processing. My work has been published in esteemed journals and
              conferences, and I{"'"}ve been honored with awards like the ERCIM
              Post-doctoral Fellowship. My research interests include machine
              learning, deep learning, and biomedical image processing.
            </p>
          </div>
          <div className="w-1/5"></div>
        </div>
      </section>
      <section className="h-screen bg-gradient-to-r from-blue-400 to-green-400">
        hhh
      </section>
    </div>
  );
}
