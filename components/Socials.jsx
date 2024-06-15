"use client";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.youtube.com/channel/UCQZbGMqHMNoW7UeFU-1Y4cw",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/businge-joshua-muleesi-90536180/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/joshuabusinge",
    name: <RiGithubFill />,
  },
  // {
  //   path: "/",
  //   name: <RiFacebookFill />,
  // },
  // {
  //   path: "/",
  //   name: <RiInstagramFill />,
  // },
];
const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
