"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BodyLink } from "@/components/BlankLink";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { WordCloud } from "@/components/WordCloud";
import { M1, M2, M3, M4, M5, M6, M7 } from "@/data/miscellaneous";
import { pageRoutes } from "@/data/routes";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function Miscellaneous() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Miscellaneous" subtitle="" />

      <ComponentWrapper
        heading="How often did you cry per school term?"
        bodyText="University is an experience where students face all kinds of rough patches as they grow. To those reading this and feeling down, it does get better! We all need someone to talk to when things don't go well, so don't bury your feelings away with you.">
        <BarGraphVertical data={M1} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many hours per week do you spend on the UW subreddit?"
        bodyText={
          <p>
            There’s a reason why <BodyLink href="https://www.reddit.com/r/uwaterloo/">r/uwaterloo </BodyLink>
            is one of the most popular university Reddit communities. It is very highly propelled by students, with over 87k members as of January 2023, and
            even has some profs on there too! Check it out if you haven’t heard of it!
          </p>
        }
        align="right"
        noBackground>
        <BarGraphVertical data={M2} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you had to restart university, what program would you enroll in?"
        bodyText="As expected, most respondents would still choose CS if given the chance to start over, but it’s great to see some respondents wanting to branch out into other areas like business and psychology! University provides you a great avenue to explore your interests, and it’s totally okay if the program you start out in is different from what you end up liking!">
        <BarGraphHorizontal
          data={M3}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 220 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you considered dropping/transferring out of your program?"
        bodyText="Roughly a quarter of respondents have considered dropping out at some point. Staying in a program that doesn't align with your interests or is too demanding are probably the main reasons a student might consider switching out to another program."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={M4} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you considered dropping out of university or transferring to another university?"
        bodyText="Around one in six respondents thought about leaving or transferring, so you’re not alone if you have also considered this option! Wanting to transfer to another university can be caused by students feeling lonely in their program, feeling overwhelmed by the schoolwork required in that program, or disliking the UW campus/campus life.">
        <div className={styles.graphContainer}>
          <PieChart data={M5} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you couldn't go to UW, what would you have done instead?"
        bodyText="The University of Toronto (UofT) was a popular answer possibly due to similarly reputable CS programs and for their research, but for better or for worse, all of our students choose UW instead. Meanwhile, the University of British Columbia (UBC) is known for its visually-appealing campus and number of highly-ranked programs, which could also explain its popularity."
        align="right"
        noBackground>
        <WordCloud
          data={M6}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="In what areas have you grown that are unrelated to CS?"
        bodyText="University is an unforgettable, life-changing, and learning experience that we only get once in a lifetime! Make the most out of it!">
        <WordCloud
          data={M7}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.friends} rightPage={pageRoutes.mentalHealth} />
    </div>
  );
}
