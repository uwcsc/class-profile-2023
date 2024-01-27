"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { GroupedBarGraphHorizontal, GroupedBarGraphVertical } from "@/components/GroupedBarGraph";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { WordCloud } from "@/components/WordCloud";
import { I1, I2i, I2ii, I3, I4, I5, I6, I7, I8, I9i, I9ii, I9iii, I10, I11, I12, I13 } from "@/data/intimacy-and-drugs";
import { pageRoutes } from "@/data/routes";
import { Color } from "@/utils/Color";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
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
        heading="Which drugs have you tried?"
        bodyText="Many students experiment with substances during university. However, we can see that most students have not tried drugs that are stronger than marijuana, such as LSD, cigarettes, or magic mushrooms.">
        <GroupedBarGraphHorizontal
          className={styles.barGraphDemo}
          data={I1}
          barColors={[Color.chartBlueLight, Color.chartPinkLight]}
          barHoverColorsMap={{
            [Color.chartBlueLight]: Color.chartBlueHeavy,
            [Color.chartPinkLight]: Color.chartPinkHeavy,
          }}
          width={barGraphWidth(isMobile, pageWidth)}
          minWidth={700}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 200, bottom: 60 } }}
        />
      </ComponentWrapper>

      {/* <ComponentWrapper
        heading="What level of intimacy have you experienced?"
        bodyText="Undergrad is a time when we are surrounded by many people of our age and are given more freedom to seek out relationships. This is reflected in our data by how many respondents first experienced different levels of intimacy during university. However, it is also worth noting that a large portion of people did not respond for all of the intimacy levels, showing how they have not had these experiences or are uncomfortable sharing.
  "
        align="right"
        noBackground>
        <GroupedBarGraphVertical
          className={styles.barGraphDemo}
          data={I1}
          barColors={[Color.chartBlueLight, Color.chartPinkLight]}
          barHoverColorsMap={{
            [Color.chartBlueLight]: Color.chartBlueHeavy,
            [Color.chartPinkLight]: Color.chartPinkHeavy,
          }}
          width={barGraphWidth(isMobile, pageWidth)}
          height={700}
          margin={{ ...barGraphMargin, ...{ bottom: 200 } }}
          minWidth={800}
          alternatingLabelSpace={40}
          widthAlternatingLabel={1000}
          lowerLabelDy="100px"
        />
      </ComponentWrapper> */}

      <ComponentWrapper
        heading="Have you ever had sexual intercourse?"
        bodyText="Undergrad is a time when we are surrounded by many people of our age and are given more freedom to seek out relationships. This is reflected in our data showing when respondents first had sexual intercourse."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <BarGraphVertical data={I2i} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0"/>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If so, in which term did you first have sexual intercourse?"
        bodyText="Our respondents first had sexual intercourse at different points during their undergraduate career">
        <div className={styles.graphContainer}>
          <BarGraphVertical data={I2ii} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0"/>
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many committed relationships have you been in during university?"
        bodyText="Our respondents most commonly have been in either 0 or 1 committed relationships during their undergraduate careers. However, one individual wrote 56."
        align="right"
        noBackground>
        <BarGraphVertical data={I3} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many sexual partners have you had during university?"
        bodyText="Similar to the relationships question, most people responded with having 0 or 1 sexual partners during university. However, one individual surprisingly wrote 57."
      >
        <BarGraphVertical data={I4} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>
      
      <ComponentWrapper
        heading="How much time did you spend in a relationship during university?"
        bodyText="Many people spent 0 - 1 years in a relationship, but there were some people that have spent almost their entire undergraduate career in a relationship."
        align="right"
        noBackground>
        <BarGraphHorizontal
          data={I5}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 100 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever cheated on someone, been cheated on, or helped someone cheat?"
        bodyText="Our respondents have been involved in cheating situations in various degrees, with most having not been involved with cheating whatsoever.">
        <div className={styles.graphContainer}>
        <BarGraphVertical data={I6} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you ever date another CS / CS/BBA / CFM student?"
        bodyText="42 respondents have dated another CS / CS/BBA / CFM student, which is around 1 of 3 students."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={I7} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you answered no to the previous question, did you want to date another CS / CS/BBA / CFM student?"
        bodyText="Out of everyone who answered no to the last question, 26 people did want to date someone in their program. Dating someone in the same program can be great in giving students something similar to bond over. On the other hand, finding someone with different interests than yourself can also be very fulfilling. ">
        <div className={styles.graphContainer}>
          <PieChart data={I8} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Are you currently in a relationship?"
        bodyText="A little more than half of our respondents were in a relationship at the time that they filled out this survey!"
        align="left">
        <BarGraphVertical data={I9i} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="In which term did you meet your current partner?"
        bodyText="Our respondents mostly met their partners in university, with some people meeting their partners before coming here!"
        align="right"
        noBackground>
        <BarGraphVertical data={I9ii} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where did you meet your current partner?"
        bodyText="Our respondents met there partners in a variety of different manners, including the Aprodite Project."
        align="left">
        <WordCloud
          data={I9iii}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your rice purity score?"
        bodyText="Our respondents scored a wide variety of scores on the Rice Purity Test, with one person surprisingly scoring 8."
        align="right"
        noBackground>
        <WordCloud
          data={I10}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
        />
      </ComponentWrapper>


      <ComponentWrapper heading="How has your understanding of relationships changed during university?" bodyText=" ">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={I11} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={isMobile ? 600 : 500} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="Any advice for people looking for a relationship?" bodyText=" " align="right" noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={I12} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={600} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="Any advice for people already in a relationship?" bodyText=" ">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={I13} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={600} />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.lifestyleAndInterests} rightPage={pageRoutes.postGrad} />
    </div>
  );
}
