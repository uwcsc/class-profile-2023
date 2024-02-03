"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BodyLink } from "@/components/BlankLink";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { SectionWrapper } from "@/components/SectionWrapper";
import { StackedBarGraphHorizontal, StackedBarGraphVertical } from "@/components/StackedBarGraph";
import { WordCloud } from "@/components/WordCloud";
import {
  A1,
  A10,
  A11,
  A12,
  A12i,
  A12iKeys,
  A13,
  A13i,
  A13ii,
  A13iii,
  A14,
  A15,
  A16,
  A16Keys,
  A18,
  A18i,
  A18ii,
  A19,
  A19i,
  A2,
  A20,
  A21,
  A21i,
  A21ii,
  A21iii,
  A21iv,
  A21v,
  A3,
  A4,
  A5,
  A6,
  A7,
  A8,
  A9,
} from "@/data/academics";
import { pageRoutes } from "@/data/routes";
import { Color } from "@/utils/Color";
import { DefaultProp, barGraphMargin, barGraphProps, barGraphWidth, pieChartProps, wordCloudWidth } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function Academics() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Academics" />

      <SectionWrapper title="Programming" />

      <ComponentWrapper
        heading="How many years of coding experience did you have prior to 1A?"
        bodyText="Almost 70% of the students that participated had minimal to no coding experience (0 - 2 years), prior to coming into UW. It goes to show that years of programming knowledge is not required to be admitted into CS / CFM / CS/BBA at UW.">
        <div className={styles.graphContainer}>
          <PieChart data={A1} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Is your expected graduation date the same as when you enrolled in the program?"
        bodyText="Most people stayed on track with their original plans, but it’s not unheard of for students to delay their graduation date due to retaking failed classes, gap terms, completing minors, etc. Students are also able to shorten their undergraduate career through various ways such as removing co-op from their degree. It's normal to diverge from the planned route for your degree!"
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={A2} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite text editor or IDE?"
        bodyText="The class favours VS Code, a versatile and customizable code editor. This is no surprise as VS Code is known to be a sweet spot between Vim and more complex IDEs like IntelliJ. It's fast, lightweight, easy to use, powerful with its extensions, and offers a plethora of themes. Shout out to the one Microsoft Word user out there!"
        align="left">
        <BarGraphHorizontal
          data={A3}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 180 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite programming language?"
        bodyText="The favourite programming language award for the class of 2022 goes to… PYTHON! No surprise here - it reads the most like English. C++ is a very notable language as a part of the CS program; thus, it’s no surprise it comes in second. It looks like we’ve come a long way from the days of Racket in first year!"
        align="right"
        noBackground>
        <BarGraphHorizontal data={A4} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many programming languages do you know?"
        bodyText="85%+ of individuals that participated in the survey know 4 or more languages. It's evident that, as students take more internships and classes, they learn more programming languages, especially in a field that is continuously evolving!">
        <BarGraphVertical data={A5} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What operating system(s) do you mainly use?"
        bodyText="MacOS and Windows are the predominant operating systems used by our respondents. Each OS provides its own benefits, capabilities, and downsides. As such, choosing the right operating system largely boils down to personal preference and comfort for daily use or programming. We can establish that UNIX based OS (MacOS and Linux) are favoured by our respondents, due to the various tools and features that cater to programmers."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={A6} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <SectionWrapper title="Courses and Grade Averages" />

      <ComponentWrapper
        heading="What category of electives for your degree did you enjoy most?"
        bodyText="It seems like the class really enjoyed their humanities courses! Perhaps this is due to the stark contrast between the content of courses that belong in this category compared to their mandatory math and computer science courses. The refreshing subject matter, combined with the overall ease of the courses, makes for some of students' favourite electives. For context, these electives are a part of the computer science degrees at UW due to breadth and depth requirements for graduation.">
        <BarGraphHorizontal
          data={A7}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 180 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which non-math elective was your favourite?"
        bodyText={
          <p>
            There are lots of amazing non-math electives mentioned in the list, with <BodyLink href="https://uwflow.com/course/music140">MUSIC 140</BodyLink>,{" "}
            <BodyLink href="https://uwflow.com/course/music246">MUSIC 246</BodyLink>, and <BodyLink href="https://uwflow.com/course/clas104">CLAS 104</BodyLink>{" "}
            being crowd favourites!
          </p>
        }
        align="right"
        noBackground>
        <WordCloud
          data={A8}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={30}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which CS course was your favourite?"
        bodyText={
          <p>
            <BodyLink href="https://uwflow.com/course/cs343">CS 343</BodyLink> and <BodyLink href="https://uwflow.com/course/cs486">CS 486</BodyLink> both tied
            up in first place. CS 343 teaches concurrent parallel programming while CS 486 delves into the realm of artificial intelligence. Both are very
            interesting courses, exploring niche aspects of computer science! <BodyLink href="https://uwflow.com/course/cs246">CS 246</BodyLink> is the third
            most popular CS course for the class of 2022. This course introduces object-oriented programming, a fundamental programming paradigm that is used in
            many places. No wonder this course is so well-liked!
          </p>
        }
        align="left">
        <WordCloud
          data={A9}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={8}
          desktopMaxFontSize={60}
          desktopMinFontSize={15}
          mobileMaxFontSize={60}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which CS course was your least favourite?"
        bodyText={
          <p>
            <BodyLink href="https://uwflow.com/course/cs245">CS 245</BodyLink>, Logic and Computation, was the least favourite CS course students took by large
            margin. It can probably be explained by its difficulty, the theoretical focus of the course, the content being less applicable outside of class,
            plus it being a core CS course. As of December 2022, the course has a 28% liked rating on UWFlow. Coming in second place is{" "}
            <BodyLink href="https://uwflow.com/course/cs348">CS 348</BodyLink>, Introduction to Database Management, which has a 36% liked rating on UWFlow.
            Some common complaints of these courses include organization of the course and how interesting the course content is.
          </p>
        }
        align="right"
        noBackground>
        <WordCloud
          data={A10}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={11}
          desktopMaxFontSize={80}
          mobileMaxFontSize={70}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which course did you find the most useful for job preparation?"
        bodyText={
          <p>
            <BodyLink href="https://uwflow.com/course/cs341">CS 341</BodyLink>, Algorithms, was deemed the most useful CS core course for job preparation
            according to respondents. This could be linked to how common software engineering positions are among computing students, and how LeetCode practice
            is crucial for passing technical interviews! Meanwhile, CS 246, Object-Oriented Software Development, is ranked second. This can be correlated with
            students ranking it as one of their favourite CS classes!
          </p>
        }>
        <WordCloud
          data={A11}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={20}
          desktopMaxFontSize={80}
          mobileMaxFontSize={80}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you take any advanced/enriched courses?"
        bodyText="45% of the class has taken at least 1 advanced/enriched course before their graduation. Advanced and enriched courses have a reputation to be time-consuming and contain much more difficult course material, which can already be hard in the first place! However, for those seeking an academic challenge or are curious about math and computer science topics, this deeper dive into the content can be worth the additional struggle. Additionally, many students claim that some courses are simply taught better. Ultimately, it is up to every individual student to decide what they are capable of and desire. Looks like most of the participants were not afraid to take on this challenge!
          "
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={A12} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you took any advanced or enriched courses, how much did you enjoy each course?"
        bodyText="Advanced/enriched CS courses are rated pretty high overall, and it looks like most respondents decide to take them in earlier terms. Trying out advanced courses early and seeing if they’re right for you can be a good strategy to figure out what you’re comfortable with before the workload starts ramping up.">
        <StackedBarGraphHorizontal
          width={isMobile ? pageWidth / 1.5 : 600}
          height={DefaultProp.graphHeight}
          keys={A12iKeys}
          colorRange={[Color.primaryAccent, Color.secondaryAccentLight, Color.primaryAccentLighter]}
          data={A12i}
          margin={{ ...barGraphMargin, ...{ left: 90 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Who is your favourite professor in all of UW?"
        bodyText={
          <p>
            The class of 2022 would like to give a shout out to &nbsp;
            <BodyLink href="https://uwflow.com/professor/alice_gao">Alice Gao</BodyLink>
            ,&nbsp;
            <BodyLink href="https://uwflow.com/professor/carmen_bruni">Carmen Bruni</BodyLink>
            ,&nbsp;
            <BodyLink href="https://uwflow.com/professor/lesley_istead">Lesley Istead</BodyLink>, and&nbsp;
            <BodyLink href="https://uwflow.com/professor/brad_lushman">Brad Lushman</BodyLink>
            &nbsp; as some of the best professors at UW! Go read their ratings UWFlow! We would also like to give an honourable mention to every professor who
            has poured their passion into teaching. This has helped the CS Class of 2022 grow and succeed! You guys are all amazing! ❤️
          </p>
        }
        noBackground>
        <WordCloud
          data={A14}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={3}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which study term did you think was the hardest?"
        bodyText="Second year seems to be the hardest year for most respondents with a whooping 52% of respondents agreeing on this. 2B has the second highest vote which  comparatively makes the later terms look almost relaxing…🤔">
        <BarGraphVertical data={A15} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What were your termly and cumulative averages?"
        bodyText="The majority of people did their best in 1A and their worst in 1B, 2A, or 2B, likely because of the mandatory challenging computer science and math courses that lie around that period of time. Students started getting better grades in 3A, correlating with the term difficulty question. As a clarification, CAV stands for Cumulative Average."
        align="right"
        noBackground>
        <StackedBarGraphVertical
          width={600}
          height={400}
          keys={A16Keys}
          colorRange={[
            Color.primaryAccentLighter,
            Color.secondaryAccentLighter,
            Color.secondaryAccentLight,
            Color.primaryAccentLight,
            Color.primaryAccent,
            Color.primaryAccentDark,
            Color.primaryAccentDarker,
          ]}
          data={A16}
          margin={barGraphMargin}
          displayPercentage={true}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many classes have you failed?"
        bodyText="Most people tend to complete their degree without failing a course, but clearly it's not over if you have failed some."
        align="left">
        <BarGraphVertical data={A20} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Did you complete an option, specialization or minor?"
        bodyText="50% of the students have completed some form of option, specialization, or minor during their undergrad. These are ways you can add qualifications to your degree using the electives that you have. That's what they mean when they say you can customize your CS degree!"
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={A18} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="Which option(s), specialization(s), or minor(s) did you complete?" bodyText=" ">
        <WordCloud
          data={A18i}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={60}
          desktopMinFontSize={15}
          mobileMaxFontSize={30}
        />
      </ComponentWrapper>

      <ComponentWrapper heading="What made you want to complete the option, specialization or minor?" bodyText=" " align="right" noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={A18ii} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="Have you overloaded any of your semesters?" bodyText=" " align="left">
        <div className={styles.graphContainer}>
          <PieChart data={A19} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many overloaded semesters did you take?"
        bodyText="UW academic terms can already be challenging; however, over 45% of participants were able to overload at least 1 term. 20% of students overloaded 3 or more terms. 🤯"
        align="right"
        noBackground>
        <BarGraphVertical data={A19i} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <SectionWrapper title="Transfer" />
      <ComponentWrapper
        heading="Did you transfer into your current program?"
        bodyText="23% of respondents transferred into their current program, which is a surprisingly high number. We can assume that the majority, if not all, of the people that transferred programs transferred into CS as getting into CS/BBA and CFM after initial applications can be exceedingly difficult.">
        <div className={styles.graphContainer}>
          <PieChart data={A13} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What program did you transfer from?"
        bodyText="Most transfers came from Math and CFM. Math and CS share a lot of courses through the first year of the degree, which might have resulted in many of those students pursuing their passion for CS directly by transferring. CFM transfers may be due to students disliking the finance side of their degree."
        align="right"
        noBackground>
        <BarGraphVertical data={A13i} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What term did you transfer into your program?"
        bodyText="Most of the transfers occurred during 2A and 2B terms, which makes sense since students have time to re-evaluate their academic/career path after spending a year in their original program.">
        <BarGraphVertical data={A13ii} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What was your reasoning behind transferring?"
        bodyText="Program interest, flexible course requirements, and a flexible schedule were the most common reasons people transferred into their current program. Many respondents also justified their transfer due to future job prospects and to avoid mandatory courses in their original program. With so many industries relying on technology, it's no wonder computing degrees are so in demand!"
        align="right"
        noBackground>
        <BarGraphVertical data={A13iii} widthAlternatingLabel={1000} alternatingLabelSpace={200} lowerLabelDy="60px" {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <SectionWrapper title="Exchange" />

      <ComponentWrapper
        heading="Did you take any exchange terms?"
        bodyText="Students can apply to the exchange program starting in their second year to experience studying abroad for a term! Note that exchange does not necessarily imply switching schools with another student. It seems that not many students took exchange terms from this sample.">
        <div className={styles.graphContainer}>
          <PieChart data={A21} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What term did you take an exchange in?"
        bodyText="Only 7% of students decided to take an exchange term during their undergrad with most students going during their 3A and 4B terms. Unfortunately, 21% of students were interested in going on an exchange term but were interrupted and unable to go due to the COVID-19 pandemic."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={A21i} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="Where did you take your exchange term?" bodyText="Only three people declared exactly where their exchange term was.">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={A21ii} circleDiameter={0} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Were you unable to complete an exchange term due to the COVID-19 pandemic?"
        bodyText="With the severity of the pandemic restrictions in Canada extending from the beginning of 2020 until 2022, it is understandable that most 2022 graduates’ exchange terms were interrupted. Unfortunately, our results show that a lot more people would have gone on exchange if it wasn’t for the pandemic."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={A21iii} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What was the hardest thing about going on exchange?" bodyText=" ">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={A21iv} circleDiameter={0} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your favourite memory from your time during the exchange?"
        bodyText="Hopefully more students in future classes will have the chance to experience cool opportunities like these as well."
        align="right"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={A21v} circleDiameter={0} />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.demographics} rightPage={pageRoutes.computerScienceExperience} />
    </div>
  );
}
