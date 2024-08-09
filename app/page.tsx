import Approch from "@/components/Approch";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import Footer from '@/components/Footer';
import RecentroProjects from "@/components/RecentroProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import Servieces from "@/components/Servieces";

export default function Home() {
  return (
    <main className=" relative bg-black-100 flex justify-center
     items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav 
        className=""
        navItems={navItems}/>
        <Hero />
        <Grid />
        <RecentroProjects />
        <Approch />
        <Servieces />
        <Footer />
      </div>
    </main>
  );
}
