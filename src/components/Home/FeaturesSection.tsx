import { GraduationCap, User, BookOpen } from "lucide-react";

export default function FeaturesSection() {
  return (
    <main className="min-h-screen bg-white">

      {/* Main Section */}
      <section className="px-5 py-20 md:py-24">

        {/* Container */}
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="text-center">

            <h1 className="text-4xl font-semibold text-[#062d59] md:text-5xl">
              Welcome To EduNova Academy
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-gray-700 md:text-lg">
              Welcome to EduNova Academy, where learning meets opportunity. We are dedicated to providing quality education, practical knowledge, and a supportive learning environment to help every student grow, succeed, and build a brighter future.
            </p>

          </div>


          {/* Three Features */}
          <div className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">


            {/* Feature 1 */}
            <div className="text-center">

              {/* Icon */}
              <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#f0f0f0]">

                <GraduationCap
                  className="h-12 w-12 text-[#062d59]"
                />

              </div>

              {/* Title */}
              <h2 className="mt-7 text-2xl font-semibold text-[#062d59]">
                Scholarship Facility
              </h2>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-[390px] text-base leading-8 text-gray-700">
               EduNova Academy provides scholarship opportunities to encourage talented and hardworking students, helping them access quality education and achieve their academic goals.
              </p>

            </div>


            {/* Feature 2 */}
            <div className="text-center">

              {/* Icon */}
              <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#f0f0f0]">

                <User
                  className="h-12 w-12 text-[#062d59]"
                />

              </div>

              {/* Title */}
              <h2 className="mt-7 text-2xl font-semibold text-[#062d59]">
                Skilled Lecturers
              </h2>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-[390px] text-base leading-8 text-gray-700">
               Learn from experienced and dedicated lecturers who use modern teaching methods to make learning simple, practical, and engaging for every student.
              </p>

            </div>


            {/* Feature 3 */}
            <div className="text-center">

              {/* Icon */}
              <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-[#f0f0f0]">

                <BookOpen
                  className="h-12 w-12 text-[#062d59]"
                />

              </div>

              {/* Title */}
              <h2 className="mt-7 text-2xl font-semibold text-[#062d59]">
                Book Library & Store
              </h2>

              {/* Description */}
              <p className="mx-auto mt-5 max-w-[390px] text-base leading-8 text-gray-700">
                Explore our well-organized library and store with a wide range of books and learning materials to support students in their academic journey.
              </p>

            </div>


          </div>

        </div>

      </section>

    </main>
  );
}