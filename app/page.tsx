import { About } from "@/components/About";
import { BodyLink } from "@/components/BlankLink";
import { CenterWrapper } from "@/components/CenterWrapper";
import { Header } from "@/components/Header";
import { Sections } from "@/components/Sections";
import { pageRoutes } from "@/data/routes";
import { title } from "@/utils/title";
import Image from "next/image";
import styles from "./page.module.css";

export const metadata = title("Home");

export default function Home() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.title}>
          <div className={styles.titleImage}>
            <Image src="/images/frontPageTitle.png" alt="A picture of the University of Waterloo campus" width="800" height="800" />
          </div>
          <div className={styles.blurb}>
            <h1 className={styles.classYear}>UW Computer Science 2022</h1>
            <h1 className={styles.classProfile}>Class Profile</h1>
            <h3>Welcome to UW Computer Science 2022 Class Profile.</h3>
            <a href="#about">
              <button className={styles.viewButton}>View</button>
            </a>
          </div>
          <div className={styles.decoratorSolid} />
          <div className={styles.decoratorDots} />
        </div>
        <About />
        <CenterWrapper>
          <h1>Preface</h1>
          <p>
            The 2022 CS Class Profile consists of data relevant to CS, CFM, and CS/BBA students completing their undergrad in 2022. These were combined with the
            knowledge that students in these programs tend to have similar experiences, as they share many core courses. In the standard co-op offering, CS and
            CFM take 4 years and 2 terms to complete, while CS/BBA can take up to a full 5 years.
          </p>
          <p>
            The University of Waterloo’s computer science programs are known to be prestigious and well-known in Canada as well as across the world. As of 2022,
            it ties for first place in Maclean’s university rankings, and 25th internationally as a subject by the QS World University rankings. For prospective
            students or anyone who is interested in learning more about what the students are like, this CS Class Profile will attempt to answer some of your
            questions, and you may even learn a thing or two you didn’t expect!
          </p>
          <p>
            According to the{" "}
            <b>
              <BodyLink href="https://uwaterloo.ca/institutional-analysis-planning/university-data-and-statistics/student-data/degrees-granted-0">
                Institutional Analysis & Planning (IAP)
              </BodyLink>
            </b>
            , there were a 613 graduates from CS, CFM, and CS/BBA, leading to a overall survey turnout of 17%. By program, this is a 17% turnout from CS
            graduates, 22% turnout from CS/BBA graduates, and 14% turnout from CFM graduates.
          </p>
          <p>
            The survey questions were approved by the IAP, where all University of Waterloo stakeholders that are interested in conducting a non-academic
            research survey involving a large portion of the UW population are reviewed and approved. The entirety of the survey creation and data processing
            was done by the{" "}
            <b>
              <BodyLink href="https://csclub.uwaterloo.ca">UW Computer Science Club</BodyLink>
            </b>
            , so please check us out if you enjoy what you see!
          </p>
        </CenterWrapper>
        <Sections data={pageRoutes} className={styles.homeSectionsStyles} />
      </div>
    </>
  );
}
