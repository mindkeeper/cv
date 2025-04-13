export type Experience = {
  company: string;
  link: string;
  location: string;
  contractType: string;
  role: string;
  date: string;
  jobDescription: string[];
};

export type RESUMEDATA = {
  name: string;
  location: string;
  email: string;
  phone: string;
  linkedin: {
    label: string;
    url: string;
  };
  summary: string;
  experties: string[];
  experiences: Experience[];
  educations: {
    fazztrack: {
      name: string;
      date: string;
      description: string;
    };
    college: {
      name: string;
      date: string;
      degree: string;
      gpa: string;
      thesis: string;
      specialization: string;
    };
  };
};
