

import Image from "next/image";
import image1 from "../../images/1.jpg";
import image2 from "../../images/2.jpg";
import image3 from "../../images/3.jpg";
import image4 from "../../images/4.jpg";

import {
  Heart,
  Users,
  Star,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

export default function NewCourse() {
  return (
    <main className="min-h-screen bg-white">

      {/* New Courses Section */}
      <section className="px-5 py-16 md:px-10 lg:px-14">

        {/* Section Header */}
        <div className="mb-12 flex items-center justify-between">

          <h2 className="text-4xl font-semibold text-[#062d59]">
            New Courses
          </h2>

          {/* Arrow Buttons */}
          <div className="hidden gap-1 md:flex">

            <button
              className="flex h-12 w-12 items-center justify-center bg-[#ffc400] text-white transition hover:bg-[#eab400]"
              aria-label="Previous courses"
            >
              <ChevronLeft className="h-7 w-7" />
            </button>

            <button
              className="flex h-12 w-12 items-center justify-center bg-[#ffc400] text-white transition hover:bg-[#eab400]"
              aria-label="Next courses"
            >
              <ChevronRight className="h-7 w-7" />
            </button>

          </div>
        </div>


        {/* Course Cards */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">


          {/* ================= COURSE 1 ================= */}

          <Card className="overflow-hidden rounded-none border bg-white shadow-sm">

            {/* Image Area */}
            <div className="relative h-[240px]">

              <Image
                src={image1}
                alt="Library"
                fill
                className="object-cover"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              {/* Heart */}
              <button
                className="absolute right-3 top-3 text-white"
                aria-label="Add to wishlist"
              >
                <Heart className="h-6 w-6 fill-white" />
              </button>

              {/* Instructor Information */}
              <div className="absolute bottom-4 left-4 right-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Users className="h-7 w-7 text-gray-300" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-white">
                      Tom Steven
                    </h3>

                    <div className="mt-1 flex items-center gap-1">
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />

                      <span className="ml-1 text-sm text-white">
                        / 0 Review
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </div>


            {/* Course Content */}
            <CardContent className="p-7">

              <h3 className="min-h-[68px] text-2xl font-semibold leading-9 text-[#062d59]">
                Learn PHP Programming From Scratch
              </h3>

              <p className="mt-5 line-clamp-2 text-base leading-7 text-gray-600">
                Learn the basics of PHP programming and build a strong
                foundation for web development.
              </p>

            </CardContent>


            {/* Bottom */}
            <CardFooter className="flex items-center justify-between border-t px-7 py-4">

              <div className="flex items-center gap-2 text-gray-600">

                <Users className="h-6 w-6" />

                <span>44 Students</span>

              </div>

              <span className="rounded-lg bg-[#ffc400] px-4 py-2 font-semibold text-white">
                Free
              </span>

            </CardFooter>

          </Card>



          {/* ================= COURSE 2 ================= */}

          <Card className="overflow-hidden rounded-none border bg-white shadow-sm">

            <div className="relative h-[240px]">

              <Image
                src={image2}
                alt="Data analysis course"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <button
                className="absolute right-3 top-3 text-white"
                aria-label="Add to wishlist"
              >
                <Heart className="h-6 w-6 fill-white" />
              </button>


              <div className="absolute bottom-4 left-4 right-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Users className="h-7 w-7 text-gray-300" />
                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      Daisy Millar
                    </h3>

                    <div className="mt-1 flex items-center gap-1">

                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />

                      <span className="ml-1 text-sm text-white">
                        / 0 Review
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            <CardContent className="p-7">

              <h3 className="min-h-[68px] text-2xl font-semibold leading-9 text-[#062d59]">
                Learning Python for Data Analysis and Visualization
              </h3>

              <p className="mt-5 line-clamp-2 text-base leading-7 text-gray-600">
                Learn Python and discover how to analyze data and create
                meaningful visualizations.
              </p>

            </CardContent>


            <CardFooter className="flex items-center justify-between border-t px-7 py-4">

              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-6 w-6" />
                <span>0 Student</span>
              </div>

              <span className="rounded-lg bg-[#ffc400] px-4 py-2 font-semibold text-white">
                $25.00
              </span>

            </CardFooter>

          </Card>



          {/* ================= COURSE 3 ================= */}

          <Card className="overflow-hidden rounded-none border bg-white shadow-sm">

            <div className="relative h-[240px]">

              <Image
                src={image3}
                alt="Web development course"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <button
                className="absolute right-3 top-3 text-white"
                aria-label="Add to wishlist"
              >
                <Heart className="h-6 w-6 fill-white" />
              </button>


              <div className="absolute bottom-4 left-4 right-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Users className="h-7 w-7 text-gray-300" />
                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      Mike Hussy
                    </h3>

                    <div className="mt-1 flex items-center gap-1">

                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />

                      <span className="ml-1 text-sm text-white">
                        / 0 Review
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            <CardContent className="p-7">

              <h3 className="min-h-[68px] text-2xl font-semibold leading-9 text-[#062d59]">
                Build A Full Web Chat App From Scratch
              </h3>

              <p className="mt-5 line-clamp-2 text-base leading-7 text-gray-600">
                Build a complete web chat application and learn modern
                techniques for creating interactive web applications.
              </p>

            </CardContent>


            <CardFooter className="flex items-center justify-between border-t px-7 py-4">

              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-6 w-6" />
                <span>0 Student</span>
              </div>

              <span className="rounded-lg bg-[#ffc400] px-4 py-2 font-semibold text-white">
                $93.00
              </span>

            </CardFooter>

          </Card>



          {/* ================= COURSE 4 ================= */}

          <Card className="overflow-hidden rounded-none border bg-white shadow-sm">

            <div className="relative h-[240px]">

              <Image
                src={image4}
                alt="Cloud computing course"
                fill
                className="object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <button
                className="absolute right-3 top-3 text-white"
                aria-label="Add to wishlist"
              >
                <Heart className="h-6 w-6 fill-white" />
              </button>


              <div className="absolute bottom-4 left-4 right-4">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                    <Users className="h-7 w-7 text-gray-300" />
                  </div>

                  <div>

                    <h3 className="font-semibold text-white">
                      Rosy Janner
                    </h3>

                    <div className="mt-1 flex items-center gap-1">

                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />
                      <Star className="h-4 w-4 fill-[#ffc400] text-[#ffc400]" />

                      <span className="ml-1 text-sm text-white">
                        / 0 Review
                      </span>

                    </div>

                  </div>

                </div>

              </div>

            </div>


            <CardContent className="p-7">

              <h3 className="min-h-[68px] text-2xl font-semibold leading-9 text-[#062d59]">
                Master Microservices with Spring Boot and Cloud
              </h3>

              <p className="mt-5 line-clamp-2 text-base leading-7 text-gray-600">
                Learn microservices architecture with Spring Boot and
                modern cloud technologies.
              </p>

            </CardContent>


            <CardFooter className="flex items-center justify-between border-t px-7 py-4">

              <div className="flex items-center gap-2 text-gray-600">
                <Users className="h-6 w-6" />
                <span>0 Student</span>
              </div>

              <span className="rounded-lg bg-[#ffc400] px-4 py-2 font-semibold text-white">
                $51.00
              </span>

            </CardFooter>

          </Card>


        </div>

      </section>

    </main>
  );
}