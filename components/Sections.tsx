"use client";

import Image from "next/image";

export default function Sections() {
  return (
    <div>
      <section className="h-[calc(100dvh)] w-full">
        <div className="flex flex-col md:flex-row h-full pb-24 items-center justify-center w-full">
          <div className="md:w-2/5 p-8">
            <div className="p-4 border-2 border-primary/50">
              <Image
                src="/hero.jpg"
                alt="hero"
                width={800}
                height={300}
                objectFit="cover"
              />
            </div>
          </div>
          <div className="md:w-2/5 ml-4">
            <h1 className="text-3xl md:text-5xl font-bold">
              Kishor Upla, Ph.D.{" "}
            </h1>
            <h1 className="text-xl md:text-2xl font-medium pt-2">
              Assistant Professor | Electronics Engineering
            </h1>
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
