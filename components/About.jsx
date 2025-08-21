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
    text: "Azul Tamara",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+593 99 566 3286",
  },
  {
    icon: <MailIcon size={20} />,
    text: "tamarafram15@gmail.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 15 Jan, 1996",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on Audiovisual Production",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "Quito, Ecuador - Ponceano",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "University",
        qualification: "Bachelor of Science",
        years: "2015 - 2018",
      },
      {
        university: "Another University",
        qualification: "Bachelor of Science",
        years: "2019 - 2021",
      },
      {
        university: "Yet Another University",
        qualification: "Bachelor of Science",
        years: "2021 - 2025",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "ABC Inc",
        qualification: "Bachelor of Science",
        years: "2018 - 2020",
      },
      {
        company: "XYZ Inc",
        qualification: "Bachelor of Science",
        years: "2020 - 2022",
      },
      {
        company: "LOL Inc",
        qualification: "Bachelor of Science",
        years: "2022 - Present",
      },
    ],
  },
];

const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "Fronteend Dev",
      },
      {
        name: "Javascript",
      },
      {
        name: "Backend Dev",
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

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About me
        </h2>
      </div>
    </section>
  );
};

export default About;
