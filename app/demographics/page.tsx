"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BodyLink } from "@/components/BlankLink";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { WordCloud } from "@/components/WordCloud";
import { D1, D10, D11, D2, D3, D4, D5, D6, D7, D8, D9 } from "@/data/demographics";
import { pageRoutes } from "@/data/routes";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function Demographics() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Demographics" subtitle="An insight into the demographics of UW’s CS programs" />

      <ComponentWrapper
        heading="What program are you in?"
        bodyText="There are a total of 106 respondents of the CS Class Profile. The majority of students are just in CS, due to CS being the largest program in size compared to CFM and CS/BBA. Breaking it down, 89 respondents were in CS, 12 were CS/BBA, and 5 were in CFM.">
        <div className={styles.graphContainer}>
          <PieChart data={D1} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Please select the gender identity option(s) with which you identify."
        bodyText={
          <p>
            Unsurprisingly, most respondents were men at around 69%. About 31% of students identified as women or gender non-conforming. This statistic has been
            steadily increasing throughout the years, as seen <BodyLink href="https://uwaterloo.ca/women-in-computer-science/statistics">here.</BodyLink>{" "}
            According to the same source, in 2017/2018 (when many 2022 graduates were admitted), around 24% of CS admits, 34% of CFM admits, and 41% of CS/BBA
            admits were women or queer. Underrepresented gender identities is a popular topic in the tech community, and so it is promising that a more diverse
            range of people are becoming interested in CS! Take a look at clubs such as <BodyLink href="https://wics.uwaterloo.ca/"> WiCS </BodyLink> and
            <BodyLink href="https://www.techplusuw.com/"> Tech+</BodyLink> that address these issues and work to provide an inclusive environment in UW&apos;s
            tech scene.
          </p>
        }
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={D2} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Please indicate the pronouns that you use."
        bodyText={
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>
        }>
        <div className={styles.graphContainer}>
          <PieChart data={D3} {...pieChartProps(isMobile, pageWidth)} labelTextSize={20} labelTextRadialOffset={-45} />
        </div>
      </ComponentWrapper>

      {/* <ComponentWrapper heading="Please indicate the pronouns that you use.">
        <div className={styles.graphContainer}>
          <PieChart data={D3} {...pieChartProps(isMobile, pageWidth)} labelTextSize={20} labelTextRadialOffset={-45} />
        </div>
      </ComponentWrapper> */}

      <ComponentWrapper
        heading="Please select the racial category or categories with which you primarily identify."
        bodyText={
          <p>
            The largest racial group was East Asian at about 64%, followed by White at 17%, and South Asian at 12%. Note that certain respondents have chosen
            two or more of the listed categories. We have counted each of them as a separate entry rather than a category itself. Check out clubs such as
            <BodyLink href="https://www.techplusuw.com/"> Tech+</BodyLink>, which supports ethnic minorities in tech!
          </p>
        }
        align="left"
        noBackground>
        <BarGraphVertical data={D4} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What was your high school admissions average?"
        bodyText="With a mean average of roughly 95.5%, getting into any of these programs is no easy feat. That makes everyone special from the day they were admitted into the school!">
        <BarGraphVertical data={D5} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Please select the sexual identity option(s) you identify with."
        bodyText={
          <p>
            Over 27% of respondents identified as LGBTQ+. UW has plenty of groups that support the LGBTQ+ community that can be found
            <BodyLink href="https://uwaterloo.ca/human-rights-equity-inclusion/equity-office/pride-uwaterloo"> here</BodyLink>. Clubs such as{" "}
            <BodyLink href="https://www.techplusuw.com/"> Tech+ </BodyLink>
            and <BodyLink href="https://ostem.clubs.wusa.ca/"> oSTEM </BodyLink>
            support queer and trans students in tech and STEM environments!
          </p>
        }
        align="right"
        noBackground>
        <BarGraphVertical data={D6} {...barGraphProps(isMobile, pageWidth)} widthAlternatingLabel={700} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where did you live before coming to UW?"
        bodyText="The UW computing programs receive the most students from the GTA/Toronto, as most people may expect. But it’s always great to meet people from all over the world."
        align="right">
        <WordCloud
          data={D7}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is the highest education level of your parents?"
        bodyText="The most common education level of parents indicated by respondents was a Bachelor's Degree. That means that students will meet or surpass this level of education! The trend seems to be that children will follow in their parents' footsteps to graduate from a university. Find out later in the class profile how students want to continue past this stage of education..."
        noBackground>
        <BarGraphVertical data={D8} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What was your family income before entering your current UW program?"
        bodyText={
          <p>
            Most families made more than the average family income in Canada in 2020 (
            <BodyLink href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110001201">$104,350</BodyLink>) The range of 51k to 200k was the most common
            among families. To sustain a first-year tuition fee that can hover between $8,000 to $55,000, it would make sense for many families to rely on other
            sources of financial support.
          </p>
        }
        align="right">
        <BarGraphVertical
          // TODO: change when histogram component is ready
          data={D9}
          {...barGraphProps(isMobile, pageWidth)}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many close relatives have attended UW?"
        bodyText="Wow! The vast majority of students are the first in the family to be a UW graduate. This could be explained by older relatives receiving education in other countries, or simply the vast number of other universities in Canada."
        align="left"
        noBackground>
        <BarGraphVertical data={D10} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Please indicate your religion and/or spiritual affiliation."
        bodyText="80 respondents identified themselves as non-religious, which is a surprising 72% of the total responses to this question. According to Statistics Canada, in 2019, 68% of Canadians reported being religious. However, this number has decreased over the years, and this is heavily reflected in the younger generations such as the students in this class profile."
        align="right">
        <BarGraphHorizontal
          data={D11}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 220 } }}
        />
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.home} rightPage={pageRoutes.academics} />
    </div>
  );
}
