"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//import swiper styles

import "swiper/css";
import "swiper/css/pagination";

//import required modules
import { Pagination } from "swiper/modules";

//components
import ProjectCard from "@/components/ProjectCard";

const projectData = [
  {
    image: "/work/3.png",
    category: "next js",
    name: "Nexa Website",
    description: "This is the project am working in the commenting about",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "next js",
    name: "Serenity Website",
    description: "This is the project am working in the commenting about",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "next js",
    name: "Nova Website",
    description: "This is the project am working in the commenting about",
    link: "/",
    github: "/",
  },
];

const Work = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* {text} */}
        <div>
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p>Heyyyy this is container a latest projects. </p>
          <Link href="/projects">
            <Button>All projects</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Work;
