import CampusVideo from "@/components/Home/CampusVideo";
import FeaturesSection from "@/components/Home/FeaturesSection";
import HeroBanner from "@/components/Home/HeroBanner";
import LatestEvents from "@/components/Home/LatestEvents";
import NewCourse from "@/components/Home/NewCourse";




export default function HomePage() {
  return (
    <div className="">
     <HeroBanner/>
     <FeaturesSection/>
     <NewCourse/>
     <CampusVideo/>
     <LatestEvents/>
    </div>
  );
}
