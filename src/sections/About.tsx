import Image from "next/image";
import { Card } from "@/components/Card";
import CSSIcon from "@/assets/icons/css3.svg";
import mapImage from "@/assets/images/map.png";
import HTMLIcon from "@/assets/icons/html5.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import ChromeIcon from "@/assets/icons/chrome.svg";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxtems";
import JavascriptIcon from "@/assets/icons/square-js.svg";
import { SectionHeader } from "@/components/SectionHeader";
import smileMemoji from "@/assets/images/memoji-smile.png";

const toolBoxItems = [
  {
    title: "JavaScript",
    icon: JavascriptIcon,
  },
  {
    title: "HTML5",
    icon: HTMLIcon,
  },
  {
    title: "CSS3",
    icon: CSSIcon,
  },
  {
    title: "React",
    icon: ReactIcon,
  },
  {
    title: "Github",
    icon: GithubIcon,
  },
  {
    title: "Chrome",
    icon: ChromeIcon,
  },
];

const hobbies = [
  {
    title: "Coding",
    emoji: "🖥️",
    left: "5%",
    top: "5%",
  },
  {
    title: "Music",
    emoji: "🎸",
    left: "50%",
    top: "5%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "10%",
    top: "35%",
  },
  {
    title: "Photography",
    emoji: "📷",
    left: "35%",
    top: "40%",
  },
  {
    title: "Travel",
    emoji: "🌍",
    left: "70%",
    top: "45%",
  },
  {
    title: "Cooking",
    emoji: "🍽️",
    left: "5%",
    top: "65%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          title="About Us"
          eyebrow="A Glimpse of Our Story"
          description="Learn more about our company and what inspired us to create Bhinneka Dev."
        />

        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
            <Card className="h-[320px] md:col-span-5">
              <CardHeader
                title="Our Toolbox"
                description="Explore the technologies and tools we used to craft exceptional
                digital experiences."
              />
              <ToolBoxItems items={toolBoxItems} className="mt-6" />
              <ToolBoxItems items={toolBoxItems} className="mt-6" />
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-5 lg:grid-cols-3">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore our interests and hobbies outside the digital world."
                classname="p-6"
              />
              <div className="relative flex-1">
                {hobbies.map((item, index) => (
                  <div
                    key={index}
                    className="inline-flex gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: item.left,
                      top: item.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {item.title}
                    </span>
                    <span>{item.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="map"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-20 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image src={smileMemoji} alt="memoji" className="size-20" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
