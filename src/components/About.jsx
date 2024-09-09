import { aboutMe, techStack } from "@/data";
import { Caveat } from "next/font/google";

const caveat = Caveat({
  weight: ["500"],
  subsets: ["latin"],
});

const About = () => {
  return (
    <div id="about" className="py-20 flex flex-col gap-10 px-5 relative">
      <div className="z-30">
        <h1 className="heading">
          About <span className="text-purple">Me</span>
        </h1>
      </div>
      <div className="border border-white/[0.1] p-4 rounded-2xl mt-8 z-30">
        <p
          className="text-sm lg:text-base opacity-55
                    lg:opacity-50 text-justify"
        >
          Hey there! I&apos;m Giri Yaram, an aspiring Full Stack Developer based in
          Hyderabad, passionate about building efficient and user-friendly web
          applications. With a strong foundation in both front-end and back-end
          technologies, I thrive on crafting solutions that make an impact.{" "}
          <br />
          <br />
          Here&apos;s what I bring to the table: <br /> <br />{" "}
          <span className="text-purple font-semibold">
            Full Stack Development
          </span>
          : I&apos;m proficient in front-end (React, Next.js) and back-end (Java,
          Spring Boot) technologies, allowing me to create dynamic, responsive,
          and scalable applications. <br />
          <br />
          <span className="text-purple font-semibold">UI/UX Focus</span>:
          Designing intuitive and engaging user interfaces is something I love.
          Whether it&apos;s crafting clean, modern layouts or enhancing user
          interaction, I ensure the experience is seamless across devices.{" "}
          <br /> <br />{" "}
          <span className="text-purple font-semibold">Database Management</span>
          : Skilled in MySQL and PostgreSQL, I work efficiently with databases
          to store, manage, and retrieve data securely and effectively.
          <br />
          <br />{" "}
          <span className="text-purple font-semibold">Problem Solver</span>:
          Whether it&apos;s debugging code or optimizing system performance, I&apos;m
          always up for a challenge and driven to find solutions that work well
          and scale smoothly.
          <br />
          <br />{" "}
          <span className="text-purple font-semibold">
            Collaboration & Leadership
          </span>
          : From leading college events to working in teams, I thrive in
          collaborative environments. I&apos;m known for being a proactive
          communicator and someone who can rally the team around a shared
          vision. I&apos;m always eager to learn new technologies, adapt to different
          challenges, and bring fresh ideas to the table.
          <br />
          <br />
          Let&apos;s connect if you&apos;re looking for someone with a mix of technical
          skills, creativity, and a collaborative spirit!
        </p>
      </div>

      <div className="mt-10 ">
        <h1 className="heading">
          Tech <span className="text-purple">Stack</span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-4 items-center justify-center">
        {techStack?.map((item, i) => (
          <span
            key={i}
            className="lg:py-4 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 
                    lg:opacity-50 rounded-lg text-center bg-[#10132E]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default About;
