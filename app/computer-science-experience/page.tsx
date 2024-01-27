"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { E1, E2, E3, E4, E5, E6, E7, E8 } from "@/data/computer-science-experience";
import { pageRoutes } from "@/data/routes";
import { barGraphProps, barGraphMargin, DefaultProp, pieChartProps, barGraphWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function Academics() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className={styles.page}>
      <Header />

      <SectionHeader title="Computer Science Experience" subtitle="Learn about the Computer Science Experience of the graduating class" />

      <ComponentWrapper
        heading="What coding experiences did you have prior to university?"
        bodyText="A large proportion of the students had some coding experience through high school courses. There was a small number of students who did not have any prior coding experience. It goes to show that programming knowledge is not required to be admitted into CS / CFM / CS/BBA.">
        <BarGraphHorizontal
          data={E1}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 200 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many programming languages do you know?"
        bodyText="80%+ of individuals that participated in the survey know 4 or more languages. It's evident that, as students take more internships and classes, they learn more programming languages, especially in a field that is continuously evolving!"
        align="right"
        noBackground>
        <BarGraphVertical data={E2} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite programming language?"
        bodyText="The favourite programming language award for the class of 2022 goes to… PYTHON! No surprise here - it reads the most like English. C++ is a very notable language as a part of the CS program; thus, it’s no surprise it comes in second. It looks like we’ve come a long way from the days of Racket in first year!">
        <BarGraphHorizontal
          data={E3}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 100 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite text editor or IDE?"
        bodyText="The class favours VS Code, a versatile and customizable code editor. This is no surprise as VS Code is known to be a sweet spot between Vim and more complex IDEs like IntelliJ. It's fast, lightweight, easy to use, powerful with its extensions, and offers a plethora of themes."
        align="right"
        noBackground>
        <BarGraphHorizontal
          data={E4}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 180 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What operating system(s) do you mainly use?"
        bodyText="MacOS and Windows are the predominant operating systems used by our respondents. Each OS provides its own benefits, capabilities, and downsides. As such, choosing the right operating system largely boils down to personal preference and comfort for daily use or programming. We can establish that UNIX based OS (MacOS and Linux) are favoured by our respondents, due to the various tools and features that cater to programmers.">
        <div className={styles.graphContainer}>
          <PieChart data={E5} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your LeetCode proficiency level?"
        bodyText="Most respondents can consistently solve medium LeetCode questions, which are often asked by large tech companies during interviews. Some people also responded with being able to solve hard level questions on LeetCode, going above and beyond. A quarter of students never/rarely did LeetCode, demonstrating that it is not required to land a job."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={E6} {...pieChartProps(isMobile, pageWidth)} {...{ labelTextSize: 20 }} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many side projects have you completed during university, if any?"
        bodyText="Students invest time into side projects to show companies their software experiences and skills. However, a large number of them have indicated that they have not done any at all during university. This could be explained by the time-consuming academic obligations, and demonstrates that side projects are not the only factor to landing a job.">
        <BarGraphVertical data={E7} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many hackathons in total have you attended as a hacker?"
        bodyText="Similar to side projects, hackathons allow students to show companies their software skills and passion in technology. Despite this, hackathons are definitely not a necessity for graduating students. In fact, we see that the vast majority of our respondents never or very rarely attend hackathons currently."
        align="right"
        noBackground>
        <BarGraphVertical data={E8} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>
      <BottomNav leftPage={pageRoutes.academics} rightPage={pageRoutes.coop} />
    </div>
  );
}
