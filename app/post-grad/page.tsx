"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { WordCloud } from "@/components/WordCloud";
import { P1, P2, P3, P4, P5, P6, P7, P8 } from "@/data/post-grad";
import { pageRoutes } from "@/data/routes";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function PostGrad() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Post-grad" subtitle="Furthering your Computer Science Academic Journey" />

      <ComponentWrapper
        heading="Do you plan on pursuing postgraduate education?"
        bodyText="There are a total of 103 respondents to this section. There is a large number of students not pursuing postgraduate studies. Postgraduate education is not necessarily for everyone!"
        align="center"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={P1} {...pieChartProps(isMobile, pageWidth)} labelTextSize={20} minWidth={500} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you secured a full-time position post-grad? "
        bodyText="Most students have secured a full-time position, but how many of those received return offers from the companies that they’ve interned at? Regardless, it seems that the 2 years worth of work experience in the co-op program has paid off!">
        <div className={styles.graphContainer}>
          <PieChart data={P2} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Are you returning to a prior co-op?"
        bodyText="It looks like most people that have a full-time position have gotten it from a return offer! This goes to show how the co-op program improves the students' employability and allows them to find jobs that they enjoy."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={P6} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where will you be working from post grad? (City, State/Province, Country)"
        bodyText="New York and California are huge hot spots here, and it’s great to see that these programs can propel students to go to so many different places. Interestingly, a large majority of respondents will be working in the USA post-grad. This brain drain shows the wealth of opportunities available in computer science in the USA compared to Canada."
        align="right">
        <WordCloud
          data={P3}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many offers did you decide between?"
        bodyText="Over half of the respondents only had to decide between 1 or 2 offers and 35% of them chose between 3+ offers!"
        noBackground>
        <BarGraphVertical data={P4} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many onsites/interviews did you get?"
        bodyText="49 out of 69 respondents had at least one onsite/interview. Out of these students, more people had at least 4 of them! Note that some respondents may not have had any interviews because they could be taking a return offer. "
        align="right">
        <BarGraphHorizontal data={P5} width={barGraphWidth(isMobile, pageWidth)} height={DefaultProp.graphHeight} margin={barGraphMargin} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What will be your first-year total compensation in CAD?"
        bodyText="The tech field has interesting levels of annual compensation - these numbers speak for themselves… Compensation can include a combination of salary, signing, first-year stock, and bonus. Many numbers are converted from USD to CAD. The conversion rate was approximately 1 USD = 1.26 CAD during the time frame of the survey."
        noBackground>
        <BarGraphVertical data={P7} width={barGraphWidth(isMobile, pageWidth)} height={DefaultProp.graphHeight} margin={{ ...barGraphMargin }} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What field/career path will you be in post-grad?"
        bodyText="Computer science degrees can lead to so many different things these days! Web development is a popular field with the presence of web apps. Artificial intelligence and data science are also becoming increasingly popular fields as they continue to innovate our approaches to solving business problems. Cloud computing is also growing in demand by virtualizing IT infrastructure, reducing its costs, and improving its scalability."
        align="right">
        <WordCloud
          data={P8}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={10}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.intimacyAndDrugs} rightPage={pageRoutes.friends} />
    </div>
  );
}
