import { RESUMEDATA } from "./types";

export const RESUME_DATA: RESUMEDATA = {
  name: "Nur Cholis Majid",
  location: "Jakarta, Indonesia",
  email: "nurcholismjd10@gmail.com",
  phone: "+62 812 3390 5659",
  linkedin: {
    label: "linkedin.com/in/nurcholism",
    url: "https://www.linkedin.com/in/nurcholism",
  },
  summary:
    "Motivated Software Engineer with specialized expertise in React, Next.js, Express, and NestJS, and over a year of professional and freelance experience. I have a proven track record of successfully delivering dynamic web applications and interactive websites through collaboration on diverse projects. By focusing on optimizing performance, ensuring seamless cross-browser compatibility, and crafting responsive designs, I create intuitive and engaging user experiences. Passionate about delivering impactful, scalable solutions. I embrace continuous learning and am committed to making a meaningful contribution to every project I undertake.",
  experties: [
    "Javascript",
    "Typescript",
    "React JS",
    "Next JS",
    "Nest JS",
    "Express JS",
    "Node JS",
  ],
  experiences: [
    {
      company: "Anggada Duta Wisesa",
      link: "https://www.linkedin.com/company/anggada-duta-wisesa-pt",
      contractType: "Contract",
      date: "Dec 2024 - Present",
      location: "Jakarta, Indonesia",
      role: "Sr. Frontend Engineer",
      jobDescription: [
        "Contributed to the development of an E-Procurement web and mobile application for one of the largest banking companies in Indonesia.",
        "Optimized components and pages to improve code quality, efficiency, and reusability.",
        "Collaborated with cross-functional and internal teams to deliver high-quality solutions.",
      ],
    },
    {
      company: "Nutech Integrasi",
      link: "https://www.linkedin.com/company/pt-nutech-integrasi",
      contractType: "Contract",
      date: "Oct 2023 - Des 2024",
      location: "Jakarta, Indonesia",
      role: "Frontend Engineer",
      jobDescription: [
        "Contributed to the development of the CEISA 4.0 web application, enhancing operational efficiency for the Directorate General of Customs and Excise.",
        "Designed and implemented two dynamic modules, each featuring 4+ user-friendly menus, utilizing  React Ant Design for a seamless user experience.",
        "Successfully integrated complex RESTful APIs to facilitate smooth data exchange and  functionality across the application.",
        "Collaborated with cross-functional teams, including System Analysts, Backend Developers, QA  Engineers, and Technical Writers, to deliver high-quality solutions.",
      ],
    },
    {
      company: "Azara Course",
      link: "https://www.azaracourse.com",
      contractType: "Freelance",
      date: "Feb 2024 - Des 2024",
      location: "Jakarta, Indonesia",
      role: "Backend Engineer",
      jobDescription: [
        "Designed and implemented a robust PostgreSQL database schema to manage the entire course workflow, including user management, class creation, teacher courses, class meetings, and student attendance tracking.",
        "Developed the backend API using Express JS, integrated with Sequelize for ORM, and managed file uploads via Cloudinary and Multer.",
        "Implemented authentication and authorization, with role-based access control (RBAC) to ensure secure API access for teachers, students, and admins.",
      ],
    },
  ],
  educations: {
    fazztrack: {
      name: "Fazztrack",
      date: "Sep 2022 - Jan 2023",
      description:
        "Learning how to be a full-stack web developer using React JS, Next JS as the front-end framework, and Express JS as the backend framework.",
    },
    college: {
      name: "State University of Malang ",
      date: "Aug 2016 - Jan 2022",
      gpa: "3.48 out of 4.0",
      degree: "Bachelor Degree in Computer Science",
      specialization: "Machine Learning",
      thesis:
        "Thesis: Survival Prediction of Hepatocellular Carcinoma Cancer Patients Using the Random Forest Algorithm.",
    },
  },
};
