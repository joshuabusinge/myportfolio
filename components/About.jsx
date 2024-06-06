import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Joshua Businge",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+256-701293950",
  },
  {
    icon: <MailIcon size={20} />,
    text: "joshuabujo9@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 8th Feb, 1993",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Masters of Science in Computer Science",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Plot 120 Semawata RD - Ntinda Kampala(U)",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Makerere University",
        qualification: "Bachelor of Science in Computer Science",
        years: "2012-2016",
      },
      {
        university: "Makerere University",
        qualification: "Masters of Science in Computer Science",
        years: "2022-2024",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        organisation: "ThinkIT Limited",
        role: "Co-founder and Director",
        years: "2013-Present",
      },
      {
        organisation: "ThinkIT Limited",
        role: "Data Scientist",
        years: "2016-Present",
      },
      {
        organisation: "ResilientAfrica Network",
        role: "Innovator Matibabu Project",
        years: "2013-2017",
      },
      {
        organisation: "UNFPA",
        role: "Technical Developer",
        years: "2016-2018",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "Python,SQL",
      },
      {
        name: "Data Science and Data Analysis",
      },
      {
        name: "NextJs, Tailwind",
      },
      {
        name: "Front-End Development",
      },
      {
        name: "Microsoft Azure",
      },
      {
        name: "Cloud Practioner Certificate",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/about/vscode.svg",
      },
      {
        imgPath: "/about/figma.svg",
      },
      {
        imgPath: "/about/notion.svg",
      },
      {
        imgPath: "/about/wordpress.svg",
      },
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  console.log(getData(qualificationData, "education"));
  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* {image} */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/developer.png"
            />
          </div>
          {/* {tabs} */}

          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualifications"
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* {tabs content} */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* {personal} */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4">
                      Unmatched Service Quality for Over 10 Years
                    </h3>
                    <p className="subtitle max-w-xl mx-auto xl:mx-0">
                      I specialise in crafting intuitive websites with
                      cutting-edge technology, delivering and engaging user
                      experiences.
                    </p>
                    {/* {icons} */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* {languages} */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>English, Rutooro </div>
                    </div>
                  </div>
                </TabsContent>
                {/* {qualification} */}
                <TabsContent value="qualifications">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* {experience & education wrapper} */}
                    <div>
                      {/* {experience} */}
                      <div>
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* {List} */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              const { organisation, role, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {organisation}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* {education} */}
                      <div>education</div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">skills info</TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
