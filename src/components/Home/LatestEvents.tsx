import Image from "next/image";
import { Button } from "@/components/ui/button";
import post1 from "../../images/post1.jpg";
import post2 from "../../images/post2.jpg";
import post3 from "../../images/post3.jpg";

export default function LatestEvents() {
  return (
    <div className="bg-gray-100 py-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2">

        {/* Latest Posts */}
        <div>
          <h2 className="mb-12 text-3xl font-bold text-[#062b52]">
            Latest Posts
          </h2>

          <div className="bg-white p-6">

            {/* Post 1 */}
            <div className="flex gap-4 border-b pb-7">
              <Image
                src={post1}
                alt="Post"
                width={190}
                height={125}
                className="h-[125px] w-[190px] object-cover"
              />

              <div>
                <h3 className="text-xl font-semibold text-[#062b52]">
                  Summer Course Starts From 1st June
                </h3>

                <p className="mt-2 italic text-yellow-500">
                  September 14, 2026
                </p>

                <p className="mt-2 leading-7 text-gray-700">
                  Dimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been...
                </p>
              </div>
            </div>

            {/* Post 2 */}
            <div className="flex gap-4 border-b py-7">
              <Image
                src={post2}
                alt="Post"
                width={190}
                height={125}
                className="h-[125px] w-[190px] object-cover"
              />

              <div>
                <h3 className="text-xl font-semibold text-[#062b52]">
                  Guest Interview will Occur Soon in the Auditorium
                  About Artificial Intelligence
                </h3>

                <p className="mt-2 italic text-yellow-500">
                  September 14, 2026
                </p>

                <p className="mt-2 leading-7 text-gray-700">
                  Dimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been...
                </p>
              </div>
            </div>

            {/* Post 3 */}
            <div className="flex gap-4 pt-7">
              <Image
                src={post3}
                alt="Post"
                width={190}
                height={125}
                className="h-[125px] w-[190px] object-cover"
              />

              <div>
                <h3 className="text-xl font-semibold text-[#062b52]">
                  New Exam Schedules for Diploma
                </h3>

                <p className="mt-2 italic text-yellow-500">
                  September 14, 2026
                </p>

                <p className="mt-2 leading-7 text-gray-700">
                  Dimply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been...
                </p>
              </div>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Button className="rounded-none bg-[#062b52] px-10 py-6">
              VIEW ALL
            </Button>
          </div>
        </div>


        {/* Upcoming Events */}
        <div>
          <h2 className="mb-12 text-3xl font-bold text-[#062b52]">
            Upcoming Events
          </h2>

          {/* Event 1 */}
          <div className="mb-7 flex gap-6 bg-white p-6">

            <div className="w-[125px] shrink-0 text-center">
              <div className="bg-yellow-400 py-5">
                <p className="text-3xl font-bold text-[#062b52]">20</p>
                <p className="text-[#062b52]">Oct</p>
              </div>

              <div className="bg-[#062b52] py-4 text-white">
                2026
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#062b52]">
                SAT Implementation Workshops November 2026
              </h3>

              <p className="mt-4 leading-8 text-gray-700">
                Bimply dummy text of the printing and typesetting
                istryrem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </p>

              <p className="mt-4 font-medium">
                11:00 - 13:30
              </p>
            </div>
          </div>


          {/* Event 2 */}
          <div className="flex gap-6 bg-white p-6">

            <div className="w-[125px] shrink-0 text-center">
              <div className="bg-yellow-400 py-5">
                <p className="text-3xl font-bold text-[#062b52]">21</p>
                <p className="text-[#062b52]">Oct</p>
              </div>

              <div className="bg-[#062b52] py-4 text-white">
                2028
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#062b52]">
                National Capital Leadership 2028
              </h3>

              <p className="mt-4 leading-8 text-gray-700">
                Bimply dummy text of the printing and typesetting
                istryrem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer.
              </p>

              <p className="mt-4 font-medium">
                15:30 - 20:30
              </p>
            </div>

          </div>

          <div className="mt-12 text-center">
            <Button className="rounded-none bg-[#062b52] px-10 py-6">
              VIEW ALL
            </Button>
          </div>

        </div>

      </div>
    </div>
  );
}