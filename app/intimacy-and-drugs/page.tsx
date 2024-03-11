"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { GroupedBarGraphHorizontal } from "@/components/GroupedBarGraph";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { WordCloud } from "@/components/WordCloud";
import { I1, I10, I11, I12, I13, I2i, I2ii, I3, I4, I5, I6, I7, I8, I9i, I9ii, I9iii } from "@/data/intimacy-and-drugs";
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
        bodyText="Most students experience substances for the first time during university. The common ones we see students try are marijuana, alcohol, and tobacco, with most staying away from the harder drugs. Make sure to stay safe and be in a safe environment when trying any type of drug.
        ">
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
        bodyText="University is a time when many students are finally living alone or with friends and have more freedom in their lives. No more curfews, no more parents wondering where they are, and because of this, many students seek out new relationships and explore their sexuality. There is no need to rush, and it is important to take your time and be comfortable before taking this step. "
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <BarGraphVertical data={I2i} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="If so, in which term did you first have sexual intercourse?">
        <div className={styles.graphContainer}>
          <BarGraphVertical data={I2ii} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many committed relationships have you been in during university?"
        bodyText="The majority of our respondents have been in either 1 or 2 relationships during their undergraduate career."
        align="left"
        noBackground>
        <BarGraphVertical data={I3} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many sexual partners have you had during university?"
        bodyText="Most respondents have had one sexual partner during their university with an almost equal number having zero. But nothing can top the one who reported having 57...">
        <BarGraphVertical data={I4} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How much time did you spend in a relationship during university?"
        bodyText="Maintaining relationships during university can sometimes be difficult with heavy course loads, however, if there is a will there's a way! Most relationships tend to last 2-4 years, with 21 of them making it past the 4 year mark. Congratulations!"
        align="left"
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
        bodyText="Almost all respondents have never been in any cheating situations."
        align="right">
        <div className={styles.graphContainer}>
          <BarGraphVertical data={I6} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you ever date another CS / CS/BBA / CFM student?"
        bodyText="Most respondents have not dated another CS/ CS/BBA / CFM student. 42 students reported having done so, while 74 said they did not."
        align="left"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={I7} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you answered no to the previous question, did you want to date another CS / CS/BBA / CFM student?"
        bodyText="Regarding those who answered no, 40 out of the 66 respondents said that they would not. Is this surprising to you? Dating someone in your program means you now have someone to spend those all-nighters with. On the other hand, having a class with your ex after a bad breakup can definitely be awkward."
        align="right">
        <div className={styles.graphContainer}>
          <PieChart data={I8} {...pieChartProps(isMobile, pageWidth, true)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Are you currently in a relationship?"
        bodyText="59 respondents reported being in a relationship and 58 said they were not. Let’s hope that the 18 who did not respond are not in “complicated” relationships. "
        align="left"
        noBackground>
        <PieChart data={I9i} {...pieChartProps(isMobile, pageWidth, false)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="In which term did you meet your current partner?"
        bodyText="Before university and during 1A seem to be the times most people fall in love and meet their current partners. But regardless, who knows, maybe this term is your time to shine!"
        align="right">
        <BarGraphVertical data={I9ii} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where did you meet your current partner?"
        bodyText="For those who had a current partner, most of them met them through mutual friends, with high school being in second. Mutual friends are a great way to meet new people and it helps to create even larger friend groups!"
        align="left"
        noBackground
        wordCloud>
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
        bodyText="For those uninformed, the Rice Purity test is a 100-question survey that aims to gauge a person’s level of “innocence” or their experience in regard to a variety of scenarios ranging from sexual situations to substances and various others. 5 respondents had the same score of 50! Out of all respondents, 8 was our lowest (???) and 96 was our highest."
        align="right">
        <WordCloud
          data={I10}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
          background={true}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How has your understanding of relationships changed during university?"
        bodyText="Relationships are often a major turning point in many people’s lives. It is a commitment to each other—some struggle, while others do not. Let’s see what other people have to say."
        align="left"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={I11} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={isMobile ? 600 : 500} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="Any advice for people looking for a relationship?" bodyText="How does one get rizz?" align="right">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={I12} background={true} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={600} />
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
