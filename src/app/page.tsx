import { RESUME_DATA } from "@/constant/resume";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  const resume = RESUME_DATA;
  return (
    <main
      className={cn(
        "text-sm text-neutral-500 flex flex-col gap-4 md:gap-8",
        "[&_section]:flex [&_section]:flex-col [&_section]:gap-2",
        "[&_h1]:text-2xl [&_h1]:font-bold [&_h1]:text-neutral-900",
        "[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-neutral-900",
        "[&_h2]:text-base"
      )}
    >
      {/* Header */}
      <section className="flex flex-col justify-center items-center w-full gap-4 md:gap-8">
        <h1>{resume.name}</h1>
        <div className="flex items-center gap-1">
          <p>{resume.location}</p>|
          <Link
            href={`mailto:${resume.email}`}
            className="text-blue-500 cursor-pointer hover:underline underline-offset-4"
          >
            {resume.email}
          </Link>
          |<p>{resume.phone}</p>
        </div>
        <Link
          href={resume.linkedin.url}
          target="_blank"
          className="-mt-2 text-blue-500 cursor-pointer hover:underline underline-offset-4"
        >
          {resume.linkedin.label}
        </Link>
      </section>
      <section>
        <h2>Summary</h2>
        <p className="prose text-justify leading-tight">{resume.summary}</p>
      </section>

      {/* Area  of Experties*/}
      <section>
        <h2>Area Of Experties</h2>
        <ul className="grid grid-cols-2">
          {resume.experties.map((item, index) => (
            <li
              key={index}
              className="before:content-['▪️'] before:mr-1 before:text-neutral-900"
            >
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Experiences */}
      <section>
        <h2>Experiences</h2>
        <ul className="flex flex-col gap-2">
          {resume.experiences.map((experience, index) => (
            <li key={index}>
              <div className="flex justify-between items-center gap-4">
                <Link href={experience.link} target="_blank">
                  <h3 className="font-semibold text-neutral-900 text-base hover:underline underline-offset-4">
                    {`${experience.company} - ${experience.location}`}
                  </h3>
                </Link>
                <span className="font-semibold text-neutral-900 text-base">
                  {experience.date}
                </span>
              </div>
              <p className="text-neutral-900 font-semibold italic">
                {experience.role}{" "}
                <span className="text-neutral-500">
                  - {experience.contractType}
                </span>
              </p>
              {experience.jobDescription.length ? (
                <ul>
                  {experience.jobDescription.map((description, index) => (
                    <li
                      key={index}
                      className="before:content-['▪️'] before:mr-1 before:text-neutral-900"
                    >
                      {description}
                    </li>
                  ))}
                </ul>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      {/* Education */}
      <section className="print:break-before-page">
        <h2>Education</h2>
        <ul className="flex flex-col gap-2">
          {/* Fazztrack */}
          <li>
            <div className="flex justify-between items-center gap-4">
              <h3 className="font-semibold text-neutral-900 text-base hover:underline underline-offset-4">
                {resume.educations.fazztrack.name}
              </h3>

              <span className="font-semibold text-neutral-900 text-base">
                {resume.educations.fazztrack.date}
              </span>
            </div>
            <p>{resume.educations.fazztrack.description}</p>
          </li>
          {/* College */}
          <li className="flex flex-col">
            <div className="flex justify-between items-center gap-4">
              <h3 className="font-semibold text-neutral-900 text-base hover:underline underline-offset-4">
                {resume.educations.college.name}
              </h3>

              <span className="font-semibold text-neutral-900 text-base">
                {resume.educations.college.date}
              </span>
            </div>
            <span>{`${resume.educations.college.degree} - ${resume.educations.college.gpa}`}</span>
            <span>
              Specialization: {resume.educations.college.specialization}
            </span>
            <span>
              Undergraduate Thesis: {resume.educations.college.thesis}
            </span>
          </li>
        </ul>
      </section>
    </main>
  );
}
