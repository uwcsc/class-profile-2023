"use client";

import { BottomNav } from "@/components/BottomNav";
import { BoxPlot } from "@/components/Boxplot";
import { ComponentSwitcher } from "@/components/ComponentSwitcher";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { LineGraph } from "@/components/LineGraph";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { StackedBarGraphHorizontal, StackedBarGraphVertical } from "@/components/StackedBarGraph";
import { WordCloud } from "@/components/WordCloud";
import { BarGraphVertical } from "@/components/BarGraph";
import { C1, C2, C3, C4, C5, C6i, C7ii, C7iii, C7iv, C7v, C7vKey, C7vi, C7viKey, C7vii, C7viii, C7viiiKey } from "@/data/coop";
import { pageRoutes } from "@/data/routes";
import { Color } from "@/utils/Color";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function Coop() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  const colorRange = [Color.primaryAccent, Color.secondaryAccentLight, Color.primaryAccentLight, Color.secondaryAccent];

  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Co-op" subtitle="Explore careers, gain experience and earn money through UWaterloo's co-op program!" />
      {/* C1 */}
      <ComponentWrapper heading="Are you in a co-op program?" bodyText=" ">
        <div className={styles.graphContainer}>
          <PieChart data={C1} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      {/* C2 */}
      <ComponentWrapper heading=" What was your favourite co-op location?" bodyText=" " align="right" noBackground>
        <WordCloud
          data={C2}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight * 0.7}
          wordPadding={15}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      {/* C5 */}
      <ComponentWrapper heading="How many co-op offers did you have rescinded?" bodyText=" ">
        <BarGraphVertical data={C5} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      {/* c6i */}
      <ComponentWrapper
        heading="What company did you work for?"
        bodyText="There are lots of companies that people have worked at! This just goes to show that the software world is HUGE."
        align="center"
        noBackground>
        <ComponentSwitcher
          graphList={C6i.map((coopTerm, i) => (
            <WordCloud
              data={coopTerm}
              width={wordCloudWidth(isMobile, pageWidth)}
              height={DefaultProp.graphHeight}
              wordPadding={7}
              desktopMaxFontSize={75}
              mobileMaxFontSize={38}
              key={i}
            />
          ))}
          buttonList={C6i.map((_, i) => "Co-op #" + (i + 1).toString())}
        />
      </ComponentWrapper>

      {/* c4 */}
      <ComponentWrapper
        heading="In your opinion, what is the best company to work at?"
        bodyText="There’s a fair share of companies around here, with Google being the most popular vote. Jane Street ranks 2nd highest, followed by Meta/Facebook.">
        <WordCloud
          data={C4}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={14}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      {/* c3 */}
      <ComponentWrapper
        heading="Have you ever had a co-op term without a placement?"
        bodyText="A sixth of respondents have gone through a term without a co-op placement. You’re not alone if you are here and can’t find one! Finding your first job can be especially difficult. Another possible reason for these results can be due to pandemic conditions."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={C3} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      {/* c4 */}
      <ComponentWrapper
        heading="Were you ever banned from WaterlooWorks for renegotiating an offer/match?"
        bodyText="Reneging an offer can be a risky move, but it can still be beneficial when you believe that your other contract or salary can be better."
        align="right">
        <div className={styles.graphContainer}>
          <PieChart data={C4} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      {/* C7iii */}
      <ComponentWrapper
        heading="What was your salary per hour in CAD (excluding other forms of compensation)?"
        bodyText="Compensation generally increased throughout the terms! For reference, in 2021, the average co-op salaries in the Faculty of Mathematics in Canada were $20.15, $22.05, $24.98, $27.60, $28.96, and $30.95 CAD, respectively. The same amounts in the USA were $28.08, $30.82, $33.65, $34.50, $37.15, and $37.60 USD, respectively. So, CS students tend to get paid more than the faculty average."
        align="right">
        <BoxPlot
          width={isMobile ? pageWidth / 1.5 : 500}
          height={DefaultProp.graphHeight}
          data={C7iii}
          margin={{
            top: 20,
            left: 20,
          }}
        />
      </ComponentWrapper>

      {/* C7iv */}
      <ComponentWrapper
        heading="How much did you receive in other forms of compensation in CAD? (i.e. bonuses, stock options, relocation, housing, etc.)"
        bodyText="Additional compensation had increased as terms progressed and students got better jobs. It’s great to see students having accommodations to make their lives easier. We can also note that most participants didn't get any other form of compensation which explains why the first quartile and the minimum is at 0 for all terms."
        noBackground>
        <BoxPlot
          width={isMobile ? pageWidth / 1.5 : 600}
          height={DefaultProp.graphHeight}
          data={C7iv}
          valueAxisLeftMargin={75}
          margin={{
            top: 20,
            left: 20,
          }}
        />
      </ComponentWrapper>

      {/* C7v */}
      <ComponentWrapper
        heading="What was your co-op evaluation rating?"
        bodyText="Ratings were pretty positive overall, with “Outstanding” and “Excellent” making up the vast majority of evaluations! Respondents did not receive any ratings below “Very Good” in their 3rd, 4th, and 5th co-op terms.">
        <div>
          <StackedBarGraphHorizontal
            width={isMobile ? pageWidth / 1.5 : 600}
            height={DefaultProp.graphHeight}
            keys={C7vKey}
            colorRange={[Color.primaryAccent, Color.secondaryAccentLight, Color.primaryAccentLighter, Color.secondaryAccent]}
            data={C7v}
            margin={barGraphMargin}
            displayPercentage
            tooltipBottomLabel="Co-op Term: "
          />
        </div>
      </ComponentWrapper>

      {/* C7vi */}
      <ComponentWrapper
        heading="How happy were you with your co-op during the work term specified?"
        bodyText="The ratio of people rating 4+ in happiness stayed roughly the same throughout the terms. There seems to be more 5s towards the last work term, likely due to students being more satisfied with better jobs that suit their interests."
        align="right"
        noBackground>
        <div>
          <StackedBarGraphVertical
            width={isMobile ? pageWidth / 1.5 : 600}
            height={DefaultProp.graphHeight}
            keys={C7viKey}
            colorRange={[Color.primaryAccent, Color.secondaryAccentLight, Color.primaryAccentLighter, Color.secondaryAccent, Color.primaryHeading]}
            data={C7vi}
            margin={barGraphMargin}
            tooltipBottomLabel="Co-op Term: "
            displayPercentage
          />
        </div>
      </ComponentWrapper>

      {/* C7vii */}
      <ComponentWrapper
        heading="How did you find your co-op?"
        bodyText="People found more co-ops externally and through return offers as the terms progressed, which makes sense as people gain more experience as they learn and grow. WaterlooWorks was still really good in helping people find jobs in the main and continuous rounds."
        align="right">
        <div style={{ padding: "10px" }}>
          <LineGraph
            data={C7vii}
            colorRange={colorRange}
            width={isMobile ? pageWidth / 1.5 : 600}
            height={DefaultProp.graphHeight}
            margin={{
              top: 20,
              bottom: 80,
              left: 30,
              right: 20,
            }}
          />
        </div>
      </ComponentWrapper>

      {/* C7viii */}
      <ComponentWrapper
        heading="Were you referred for the co-op?"
        bodyText="Interestingly, the referral to non-referral ratio stayed roughly the same as the co-op terms progressed, apart from the first one which had the most referrals. This goes to show that, without a doubt, networking can really give you some great opportunities!"
        noBackground>
        <div>
          <StackedBarGraphVertical
            width={isMobile ? pageWidth / 1.5 : 600}
            height={DefaultProp.graphHeight}
            keys={C7viiiKey}
            colorRange={[Color.primaryAccent, Color.secondaryAccentLight]}
            data={C7viii}
            margin={barGraphMargin}
            displayPercentage={true}
            tooltipBottomLabel="Co-op term: "
          />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.academics} rightPage={pageRoutes.lifestyleAndInterests} />
    </div>
  );
}
