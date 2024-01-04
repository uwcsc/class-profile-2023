"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { WordCloud } from "@/components/WordCloud";
import { F1, F10, F11, F12, F13, F14, F15, F16, F2, F3, F4, F5, F6, F7, F8, F9 } from "@/data/friends";
import { pageRoutes } from "@/data/routes";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function Friends() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Friends" subtitle="The friends you make in university are friends you’ll have for life." />

      <ComponentWrapper heading="Rate how social you are." bodyText="It looks like most people were neither antisocial or extremely sociable.">
        <BarGraphVertical data={F1} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How would you describe yourself?"
        bodyText="Introverts dominate CS at UW. Still, contrary to popular opinion, it seems that introverted people do not necessarily comprise such a large majority of the CS student population. Extroverts and ambiverts make up almost half of the CS student population!"
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={F2} {...pieChartProps(isMobile, pageWidth)} labelWidth={145} labelTextRadialOffset={-50} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many of your friendships were made after starting university?"
        bodyText="For a lot of people, most or at least some friendships are made during university. This goes to show how university is an important point in life where people form their most valuable relationships!">
        <BarGraphVertical data={F12} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many close friends throughout university were also in your program?"
        bodyText="For a lot of people, the majority of their friends are in the same program. Perhaps the shared classes, career goals, and pain from shared assignments make scheduling and conversations easier."
        align="right"
        noBackground>
        <BarGraphVertical data={F3} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How often do you keep in touch with high school friends?"
        bodyText="Most people are still in touch with their high friends in one way or another! Keeping in touch with high school friends can be especially difficult, given that high school friends often drift away from each other due to different career and/or academic paths.">
        <div className={styles.graphContainer}>
          <PieChart data={F4} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many friends are going to be in the same city as you post-grad?"
        bodyText="It’s nice to know that the majority of our respondents have a few friends that are going to be in their city post-grad."
        align="right"
        noBackground>
        <BarGraphVertical data={F5} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How often do you stay in touch with friends that you made during co-op?"
        bodyText="Many people don’t keep in touch with friends made during co-op. This makes sense as each co-op term only lasts a short period of time and a remote co-op experience can also affect friendships. It can also be difficult for many students to keep in touch afterwards due to the fact that interns can be from different programs and universities.">
        <div className={styles.graphContainer}>
          <PieChart data={F6} {...pieChartProps(isMobile, pageWidth)} labelTextRadialOffset={-30} labelTextSize={20} minWidth={600} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How often do you stay in touch with friends that you made during school terms?"
        bodyText="In comparison to co-op friends, more people keep in touch with friends made during school terms. This could be because they hang out with each other during multiple school terms while on campus."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={F7} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which term(s) did you meet most of your friends?"
        bodyText="Establishing friendships is generally easier during the beginning of the university experience. Due to all math faculty sequences having their 1A and 1B terms aligned, students take their shared core introductory courses at the same time. However, it is still possible to make friends in later terms.">
        <BarGraphHorizontal
          data={F8}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 100 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many friend groups do you have?"
        bodyText="According to our data, most people have 3-4 friend groups. These friend groups can come from classes, extracurriculars, and high school."
        align="right"
        noBackground>
        <BarGraphVertical data={F9} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper heading="What is the average size of your friend groups?" bodyText="Our respondents’ friend groups typically consist of 3-4 people.">
        <BarGraphVertical data={F10} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How open are you to meeting new people?"
        bodyText="Although they are graduating, most of our respondents are still somewhat open to meeting new people. Meeting new people can make your life more exciting and make you discover new perspectives that change the way you approach life!"
        align="right"
        noBackground>
        <BarGraphVertical data={F11} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many of your friendships were made after starting university?"
        bodyText="For a lot of people, some or most friendships are made during university. This goes to show how university is an important point in life where people form their most valuable relationships!">
        <BarGraphVertical data={F12} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How did you meet most of your friends after starting university?"
        bodyText="There are countless ways to meet new friends in university. Some common ways include classes, mutual friends, and extracurriculars."
        align="right"
        noBackground>
        <BarGraphHorizontal
          data={F13}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 150 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where do you and your friends usually hang out on campus? "
        bodyText="There are many buildings on campus for students to chill and hang out. Looking at our data, hanging out at someone’s residence seems to be the most popular option. It makes sense as having fun outside of school buildings enables people to take their mind off schoolwork. In addition, MC and DC are fairly popular spots since MC has a variety of club offices, computer labs, and classrooms for studying, while DC has a library where many students study.">
        <BarGraphVertical data={F14} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your go-to activity when hanging out with friends?"
        bodyText="There are a variety of activities enjoyed by everyone! Most people enjoy eating food with their friends - who doesn't love eating and trying out new restaurants? Talking and going to the gym are the social activities that are the next most favoured by students. Hanging out with friends doesn't have to be complicated!"
        align="right"
        noBackground>
        <WordCloud
          data={F15}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What proportion of friends will you keep in contact with post graduation?"
        bodyText="Some or even most friendships will be kept by our students post-grad! As mentioned previously, university is an experience where people make most of their long-term friends!">
        <div className={styles.graphContainer}>
          <PieChart data={F16} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.postGrad} rightPage={pageRoutes.miscellaneous} />
    </div>
  );
}
