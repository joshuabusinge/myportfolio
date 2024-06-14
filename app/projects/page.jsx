"use client";
import React, { useState } from "react";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
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
    category: "data analytics",
    name: "Serenity Website",
    description: "This is the project am working in the commenting about",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "data science",
    name: "Nova Website",
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
//remove category duplicates
//console.log(projectData.map((item) => item.category));
const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];
//console.log(uniqueCategories);

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");
  // console.log(category);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* {tabs} */}
        <Tabs defaultValue={category}>
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:broder-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
