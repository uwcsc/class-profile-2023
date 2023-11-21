"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { GroupedBarGraphHorizontal, GroupedBarGraphVertical } from "@/components/GroupedBarGraph";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { I1, I10, I2, I3, I4, I5, I6, I6i, I7, I8, I8i, I9 } from "@/data/intimacy-and-drugs";
import { pageRoutes } from "@/data/routes";
import { Color } from "@/utils/Color";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function IntimacyAndDrugs() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Intimacy and Drugs" subtitle="What have people tried during university?" />

      <ComponentWrapper
        heading="Which drugs have you used?"
        bodyText="Many students experiment with substances during university. However, we can see that most students have not tried drugs that are stronger than marijuana, such as LSD, cigarettes, or magic mushrooms.">
        <GroupedBarGraphHorizontal
          className={styles.barGraphDemo}
          data={I2}
          barColors={[Color.primaryAccentLight, Color.primaryAccentDark]}
          barHoverColorsMap={{
            [Color.primaryAccentLight]: Color.primaryAccentLighter,
            [Color.primaryAccentDark]: Color.primaryAccentDarker,
          }}
          width={barGraphWidth(isMobile, pageWidth)}
          minWidth={700}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 200, bottom: 60 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What level of intimacy have you experienced?"
        bodyText="Undergrad is a time when we are surrounded by many people of our age and are given more freedom to seek out relationships. This is reflected in our data by how many respondents first experienced different levels of intimacy during university. However, it is also worth noting that a large portion of people did not respond for all of the intimacy levels, showing how they have not had these experiences or are uncomfortable sharing.
  "
        align="center"
        noBackground>
        <GroupedBarGraphVertical
          className={styles.barGraphDemo}
          data={I1}
          barColors={[Color.primaryAccentLight, Color.primaryAccentDark]}
          barHoverColorsMap={{
            [Color.primaryAccentLight]: Color.primaryAccentLighter,
            [Color.primaryAccentDark]: Color.primaryAccentDarker,
          }}
          width={barGraphWidth(isMobile, pageWidth)}
          height={700}
          margin={{ ...barGraphMargin, ...{ bottom: 200 } }}
          minWidth={800}
          alternatingLabelSpace={40}
          widthAlternatingLabel={1000}
          lowerLabelDy="100px"
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many committed relationships have you been in during university?"
        bodyText="Our respondents most commonly have been in either 0 or 1 committed relationships during their undergraduate careers. On the other end, 5 is the highest number of committed relationships indicated.">
        <BarGraphVertical data={I3} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many sexual partners have you had during university?"
        bodyText="Similar to the relationships question, most people responded with having 0 or 1 sexual partners during university. However, one individual wrote 20, another wrote 50, and most surprisingly another wrote 120."
        align="left"
        noBackground>
        <BarGraphVertical data={I4} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever cheated on someone, been cheated on, or helped someone cheat?"
        bodyText="14 out of 96 people have selected yes to having been involved in cheating situations.">
        <div className={styles.graphContainer}>
          <PieChart data={I5} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you ever date another CS / CS/BBA / CFM student?"
        bodyText="27 respondents have dated another CS / CS/BBA / CFM student, which is about 1 in 4 students."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={I6} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you answered no to the previous question, did you want to?"
        bodyText="Out of everyone who answered no to the last question, 29 people did want to date someone in their program. Dating someone in the same program can be great in giving students something similar to bond over. On the other hand, finding someone with different interests than yourself can also be very fulfilling. "
        align="right">
        <div className={styles.graphContainer}>
          <PieChart data={I6i} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you've had a significant other, have you ever lived together for a term?"
        bodyText="Out of people who have had a relationship, around half of them have lived together and the other half have not."
        align="right"
        noBackground>
        <BarGraphVertical data={I7} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Are you currently in a relationship?"
        bodyText="A little less than half of our respondents were in a relationship at the time that they filled out this survey!"
        align="left">
        <BarGraphVertical data={I8} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you answered yes to the previous question, will you be living in the same city/region post-grad?"
        bodyText="For those who are currently in a relationship, 25 of them will be in the same city post-grad. The rest will either be in a long-distance relationship or are currently unsure."
        align="right"
        noBackground>
        <BarGraphHorizontal
          data={I8i}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 100 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper heading="How has your understanding of relationships changed in the past 5 years?">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={I9} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={isMobile ? 600 : 500} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="Any advice for people looking for a relationship?" noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={I10} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={600} />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.lifestyleAndInterests} rightPage={pageRoutes.postGrad} />
    </div>
  );
}
