"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { WordCloud } from "@/components/WordCloud";
import { L1, L10, L11, L12, L13, L14, L16, L17, L18, L19, L2, L3, L4, L5, L6, L7, L8, L9 } from "@/data/lifestyle-and-interests";
import { pageRoutes } from "@/data/routes";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function LifestyleAndInterests() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Lifestyle and Interests" subtitle="What did the class of 2022 do in their free time?" />

      <ComponentWrapper
        heading="Did you move back home during the beginning of the COVID-19 pandemic?"
        bodyText="The vast majority of respondents moved back home during the beginning of the COVID-19 pandemic, which makes sense given the situation.">
        <div className={styles.graphContainer}>
          <PieChart data={L1} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many doses of the COVID-19 vaccination have you received?"
        bodyText="Proof of vaccination used to be a requirement for entering campus, barring special circumstances. Here, we can see that everyone except for 2 people had 2 or more doses. The large majority had 3+ doses."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={L2} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How did your outlook on religion change during university?"
        bodyText="Although most of our respondents were never religious, most religious students continued to stay religious throughout their undergraduate years.">
        <BarGraphVertical data={L3} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you learn how to cook during university?"
        bodyText="Only 12 people indicated that they have not learned to cook. As for the rest, more of them stated that they learned to cook during university as opposed to before. This may be because going to university is the first time that many students move out from their parents’/guardians’ home and live on their own.
  "
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={L4} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many days are you physically active in a week now?"
        bodyText="Contrary to stereotypes, most UW students are active at least a few days a week! CS is an especially sedentary major so it’s important to stay active and take care of your body.">
        <BarGraphVertical data={L5} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How often did you pull all-nighters throughout university?"
        bodyText="84 people have either never pulled an all-nighter or do so only once every few months. With decent time management skills, work is definitely doable and sleep does not have to be sacrificed."
        noBackground>
        <BarGraphVertical data={L6} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading='Rate how strongly you agree with the following statement: "Throughout my university experience, I felt like I had enough time to pursue my own hobbies."'
        bodyText="52 respondents agree or strongly agree with this statement, contrasted to the 33 who disagree or strongly disagree. Based on our data, It seems like many people did not find enough time for their hobbies. Workload can often pile up."
        align="right">
        <BarGraphVertical data={L7} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How often did you attend parties/gatherings?"
        bodyText="A lot of students attend social events to relieve some stress and build relationships. Many UW students are no exception. Although we are not known for our parties, they can still frequently be found in residential areas around campus."
        align="left"
        noBackground>
        <BarGraphHorizontal
          data={L8}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 200 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper heading="What time do you usually sleep?" bodyText="Looks like we have a lot of night owls!" align="right">
        <BarGraphVertical data={L9} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many hours of sleep do you get on average per night?"
        bodyText="Although many of our respondents sleep late, most people are getting 7+ hours every night. Our class schedules are typically somewhat flexible and morning classes are usually not super popular among students."
        align="left"
        noBackground>
        <BarGraphVertical data={L10} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="While on campus, how many days of the week do you eat out at a restaurant?"
        bodyText="Waterloo students have a wide variety of options when it comes to food. We have a plaza filled with restaurants that serve all sorts of food such as Mexican, East Asian, Persian, Indian, etc. Although most students have learned to cook, we still enjoy eating out every so often."
        align="right">
        <BarGraphVertical data={L11} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite restaurant to go to on/around campus?"
        bodyText="With all the diverse restaurants around campus, it seems like the most popular food choices are sushi, noodles, and shawarma."
        noBackground>
        <WordCloud
          data={L12}
          width={isMobile ? pageWidth / 1.5 : 800}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your LeetCode proficiency level?"
        bodyText="Most respondents can consistently solve medium LeetCode questions, which are often asked by large tech companies during interviews. Some people also responded with being able to solve hard level questions on LeetCode, going above and beyond."
        align="right">
        <BarGraphHorizontal
          data={L13}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 270 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many side projects have you completed during university, if any?"
        bodyText="Students invest time into side projects to show companies their software experiences and skills. Building side projects is a great way to compensate for a lack of relevant work experience. Many of our respondents have completed a few side projects. However, a large number of them have indicated that they have not done any at all during university. This could be explained by the time-consuming academic obligations that take away time to do projects. Furthermore, this also demonstrates that recent side projects are not the only factor to landing a job.
  "
        noBackground>
        <BarGraphVertical data={L14} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How often do you attend hackathons now?"
        bodyText="Similar to side projects, hackathons allow students to show companies their software skills and passion in technology. Despite this, hackathons are definitely not a necessity for graduating students. In fact, we see that the vast majority of our respondents never or very rarely attend hackathons currently."
        align="right">
        <div className={styles.graphContainer}>
          <PieChart data={L16} {...pieChartProps(isMobile, pageWidth)} labelTextSize={20} minWidth={600} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which extracurricular activities did you participate in?"
        bodyText="Many of our respondents are involved with one or more extracurricular activities during university. These include sports, programming, council positions, and many more!"
        noBackground>
        <WordCloud
          data={L17}
          width={isMobile ? pageWidth / 1.5 : 800}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where is your favourite place to study on campus?"
        bodyText="The most popular study locations according to our respondents are the Mathematics & Computer Building (MC) and the William G. Davis Computer Research Centre (DC), having 23 and 22 votes respectively. Other popular places include on residence, QNC, and E7."
        align="right">
        <BarGraphHorizontal
          data={L18}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 50 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you done an Undergraduate Research Assistantship (URA)?"
        bodyText="URAs are great for students interested in gaining research experience. Students work under a professor of their choice and also get paid! Almost a quarter of the respondents had completed a URA."
        noBackground>
        <PieChart data={L19} {...pieChartProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.coop} rightPage={pageRoutes.intimacyAndDrugs} />
    </div>
  );
}
