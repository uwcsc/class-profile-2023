"use client";

import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { P1, P2, P3, P4 } from "@/data/post-grad";
import { pageRoutes } from "@/data/routes";
import { pieChartProps } from "@/utils/defaultProps";
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
        heading="Do you plan on pursuing post-graduate education?"
        bodyText="Out of the 133 respondents in this section, about 50% of them are not planning on pursuing a post-graduate education, while 13% are planning to do so and 29% are currently unsure. Post-graduate education is an option, but does not have to be everyone’s pathway!">
        <div className={styles.graphContainer}>
          <PieChart data={P1} {...pieChartProps(isMobile, pageWidth)} labelTextXOffset={20} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What proportion of friends will you keep in contact with post-graduation?"
        bodyText="At university, people often make many long-lasting friendships and connections! All of the respondents will be keeping at least some friends, with the vast majority being some, half, or most of their current friends, and a small percentage keeping all of their friends."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={P2} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you searched for a job, how many onsites/interviews did you get?"
        bodyText="56 participants reported having at least one interview, with most having up to five, but a few had as many as 80. Some did not interview at all, which may be a result of taking a return offer from a previous co-op placement.">
        <div className={styles.graphContainer}>
          <PieChart data={P3} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you secured a full-time position post-grad?"
        bodyText="Most students have secured a full-time position post-grad, at 71% of respondents. Some of these positions could be return offers, while some students may have found new positions. Either way, the two years of co-op experience seem to have paid off in securing these students a job position post-grad!"
        align="right"
        noBackground>
        <PieChart data={P4} {...pieChartProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.intimacyAndDrugs} rightPage={pageRoutes.mentalHealth} />
    </div>
  );
}
