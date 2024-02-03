"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { WordCloud } from "@/components/WordCloud";
import { F1, F2, F3, F4, F5, F6, F7 } from "@/data/full-time";
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
      <SectionHeader title="Full-time" />

      <ComponentWrapper
        heading="What company will you be working for post-grad?"
        bodyText="Most students have secured full-time positions and will be working full time post-grad. This is more than 50% of respondents. ">
        <WordCloud
          data={F1}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where will you be working from post-grad?"
        bodyText="Toronto, Ontario, and New York are the two main places most people seem to be moving to start their new life as full-time adults! A majority of students said they will be working in the USA, which is no surprise due to most opportunities in the tech field being in tech hubs like San Francisco, New York, and Seattle. Regardless, it just goes to show that if you work hard, and with just a bit of luck, you can work in your dream location!"
        align="right"
        noBackground>
        <WordCloud
          data={F2}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many offers did you decide between? Please enter a number."
        bodyText="More than half of the respondents chose between 1 or 2 offers!">
        <div className={styles.graphContainer}>
          <PieChart data={F3} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Are you returning to a prior co-op?"
        bodyText="59 out of 81 respondents are returning to a prior co-op on a permanent return offer! This statistic shows that a co-op program lets you test jobs and find what team/company culture fits your liking much earlier in your career.  Additionally, in these co-op positions, students can obtain new connections and leverage them for future full-time employment."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={F4} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If working in Canada, what will be your first-year total compensation (salary + signing + first-year stock + bonus) in CAD?"
        bodyText="The world of tech offers intriguing annual compensation and salary options.  These compensation packages encompass a mix of components, including salary, signing bonuses, first-year stock options, and more. Many of these salaries start high and will just continue rising as the years go by!">
        <BarGraphVertical data={F5} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="If working outside of Canada, what will be your first-year total compensation (salary + signing + first-year stock + bonus) in CAD?"
        bodyText="For those working outside of Canada, with a majority of them working in the USA, their first-year total compensation is significantly higher than working in Canada. This disparity highlights the competitive nature of the international tech job market and the opportunities available for individuals willing to explore opportunities abroad."
        align="right"
        noBackground>
        <BarGraphHorizontal data={F6} width={barGraphWidth(isMobile, pageWidth)} height={DefaultProp.graphHeight} margin={barGraphMargin} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What field/career path will you be in post-grad?"
        bodyText="More than 60% of respondents are set to embark on their careers in software development! However, it is fascinating to see many others venturing into diverse fields such as cloud computing, game development, and various others. Undergraduate is a time for individuals to discover their passions and chart the course for their future careers. "
        noBackground>
        <WordCloud
          data={F7}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={10}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.intimacyAndDrugs} rightPage={pageRoutes.miscellaneous} />
    </div>
  );
}
