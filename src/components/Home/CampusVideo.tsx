import Image from "next/image";
import { Play } from "lucide-react";
import campusPicture from "../../images/campus.jpg"

import { Button } from "@/components/ui/button";

export default function CampusVideo() {
  return (
    <main>

      {/* Campus Life Video Tour Section */}
      <section className="relative min-h-[550px] overflow-hidden">

        {/* Background Image */}
        <Image
          src={campusPicture}
          alt="EduNova Academy Campus"
          fill
          priority
          className="object-cover"
        />

        {/* Dark Blue Overlay */}
        <div className="absolute inset-0 bg-[#062d59]/90" />


        {/* Content */}
        <div className="relative z-10 flex min-h-[550px] flex-col items-center justify-center px-5 text-center">

          {/* Heading */}
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Watch Campus Life Video Tour
          </h1>


          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100 md:text-lg">
            Discover the vibrant campus life at EduNova Academy,
            where students learn, connect, and grow together in a
            friendly and inspiring environment.
          </p>


          {/* Play Button */}
          <Button
            variant="outline"
            size="icon"
            className="
              mt-12
              h-24
              w-24
              rounded-full
              border-4
              border-white
              bg-transparent
              text-[#ffc400]
              hover:bg-white/10
            "
            aria-label="Play campus life video"
          >
            <Play
              className="ml-1 h-10 w-10 fill-[#ffc400] text-[#ffc400]"
            />
          </Button>

        </div>

      </section>

    </main>
  );
}