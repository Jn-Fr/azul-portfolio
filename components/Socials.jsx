"use client";

import {
  RiLinkedinFill,
  RiBehanceFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

import { FaDailymotion } from "react-icons/fa";

import Link from "next/link";

//
const icons = [
  {
    path: "/",
    name: <RiLinkedinFill />,
  },
  {
    path: "/",
    name: <RiBehanceFill />,
  },
  {
    path: "/",
    name: <RiFacebookFill />,
  },
  {
    path: "/",
    name: <RiInstagramFill />,
  },
  {
    path: "/",
    name: <FaDailymotion />,
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => (
        <Link href={icon.path} key={index}>
          <div className={`${iconStyles}`}>{icon.name}</div>
        </Link>
      ))}
    </div>
  );
};

export default Socials;
