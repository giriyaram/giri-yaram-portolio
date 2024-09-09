export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I focus on continuous learning, staying up-to-date with the latest industry trends",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently learning TypeScript",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to reach out in LinkedIn?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "Prompt Advisor",
      des: "A community-driven platform where users share and discover creative prompts, helping others spark new ideas and inspiration across various topics.",
      img: "/p1.png",
      iconLists: ["/next.svg", "/tail.svg", "/authO.svg","/mongodb.svg"],
      link: "https://prompt-adviser.vercel.app/",
    },
    {
      id: 2,
      title: "Skill Capital CRM - Lead Management",
      des: "A CRM designed specifically for edtech institutes, streamlining lead management and enhancing engagement with prospective students through efficient tracking and communication tools.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/spring.svg", "/postgresql.svg","jwt.png"],
      link: "https://github.com/giriyaram/SkillCapital/tree/main",
    },
    // {
    //   id: 3,
    //   title: "AI Image SaaS - Canva Application",
    //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    //   img: "/p3.svg",
    //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    //   link: "https://github.com/adrianhajdin/ai_saas_app",
    // },
    // {
    //   id: 4,
    //   title: "Animated Apple Iphone 3D Website",
    //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    //   img: "/p4.svg",
    //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    //   link: "https://github.com/adrianhajdin/iphone",
    // },
  ];
  
  export const testimonials = [
    {
      quote:"As the Head of Development for the Skill Capital CRM project, I had the pleasure of overseeing Giri Yaram during his internship. Giri quickly proved himself to be an exceptional developer with a strong command of Spring Boot and Next.js for full-stack development. What truly stood out was his ability to handle complex project requirements independently, consistently delivering high-quality solutions without needing assistance. His dedication, attention to detail, and problem-solving skills were invaluable to the success of the project. Giri is more than capable of taking on challenging tasks and delivering them efficiently. I have no doubt he will excel in any development role.",
      name: "Raju",
      title: "Product Owner at Digital Lync",
      img: "/raju.png",
    },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "FullStack Developer Intern",
      desc: "Assisted in the development of a Complex web-based platform using Next.js, and Spring Boot enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    // {
    //   id: 2,
    //   title: "Mobile App Dev - JSM Tech",
    //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    //   className: "md:col-span-2", // change to md:col-span-2
    //   thumbnail: "/exp2.svg",
    // },
    {
      id: 3,
      title: "Freelance Ecom Project",
      desc: "Led the development of an e-commerce site from initial design to full deployment, ensuring a seamless shopping experience and efficient back-end management.",
      className: "md:col-span-2", // change to md:col-span-2
      thumbnail: "/exp3.svg",
    },
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      href: "https://www.github.com/giriyaram/",
    },
    {
      id: 2,
      img: "/link.svg",
      href: "https://www.linkedin.com/in/giri-yaram/",
    },
  ];

  export const techStack = ["Next.js", "React", "Spring Boot","MySQL",  "PostgreSQL", "Java", "JavaScript", "Python", "Git"]

  export const aboutMe = `Hey there! I’m Giri Yaram, an aspiring Full Stack Developer based in Hyderabad, passionate about building efficient and user-friendly web applications. With a strong foundation in both front-end and back-end technologies, I thrive on crafting solutions that make an impact.

\nHere’s what I bring to the table:

𝐅𝐮𝐥𝐥 𝐒𝐭𝐚𝐜𝐤 𝐃𝐞𝐯𝐞𝐥𝐨𝐩𝐦𝐞𝐧𝐭: I’m proficient in front-end (React, Next.js) and back-end (Java, Spring Boot) technologies, allowing me to create dynamic, responsive, and scalable applications.
 
𝐔𝐈/𝐔𝐗 𝐅𝐨𝐜𝐮𝐬*: Designing intuitive and engaging user interfaces is something I love. Whether it's crafting clean, modern layouts or enhancing user interaction, I ensure the experience is seamless across devices.

𝐃𝐚𝐭𝐚𝐛𝐚𝐬𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭: Skilled in MySQL and PostgreSQL, I work efficiently with databases to store, manage, and retrieve data securely and effectively.

𝐏𝐫𝐨𝐛𝐥𝐞𝐦 𝐒𝐨𝐥𝐯𝐞𝐫: Whether it's debugging code or optimizing system performance, I’m always up for a challenge and driven to find solutions that work well and scale smoothly.

𝐂𝐨𝐥𝐥𝐚𝐛𝐨𝐫𝐚𝐭𝐢𝐨𝐧 & 𝐋𝐞𝐚𝐝𝐞𝐫𝐬𝐡𝐢𝐩: From leading college events to working in teams, I thrive in collaborative environments. I’m known for being a proactive communicator and someone who can rally the team around a shared vision.

I’m always eager to learn new technologies, adapt to different challenges, and bring fresh ideas to the table. Let’s connect if you’re looking for someone with a mix of technical skills, creativity, and a collaborative spirit!`;