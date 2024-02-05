"use client";

import { BarGraphVertical } from "@/components/BarGraph";
import { BodyLink } from "@/components/BlankLink";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { H1, H10, H11, H12, H13, H14, H2, H2i, H2ii, H3, H3i, H3ii, H4, H4i, H4ii, H5, H5i, H6, H7, H8, H9, H9i } from "@/data/mental-health";
import { pageRoutes } from "@/data/routes";
import { barGraphProps, barGraphWidth, pieChartProps } from "@/utils/defaultProps";
import { useWindowDimensions } from "@/utils/getWindowDimensions";
import { useIsMobile } from "@/utils/isMobile";
import styles from "../basePage.module.css";

export default function MentalHealth() {
  const pageWidth = useWindowDimensions().width;
  const isMobile = useIsMobile();

  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Mental Health" />

      <ComponentWrapper
        heading="Have you struggled with mental health during undergrad?"
        bodyText="Mental health is a serious issue that affects the well-being of countless students. More than half of our respondents reported that they have struggled with mental health during undergrad. Oftentimes, university can be the cause of stress, anxiety or other forms of mental health problems. Thus, it is crucial to take care of yourself as well as support one another during tough times.">
        <div className={styles.graphContainer}>
          <PieChart data={H1} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever experienced burnout?"
        bodyText="Burnouts are extremely common in our respondents, with the vast majority of people reporting that they have experienced it at some point. The constant demand for work is likely to leave students feeling overwhelmed or emotionally drained. Just keep in mind that it is completely normal to feel this way and remember to let yourself take breaks."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={H2} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Do you feel burnout more during co-op or academic term?"
        bodyText="Most of our respondents indicated that they are more likely to experience a burnout during their academic terms. This could be due to heavy course work and assessments, as well as interview preparation and co-op search. Co-op terms may be preferred because it gives students a break from studying.">
        <div className={styles.graphContainer}>
          <PieChart data={H2i} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Do you feel burnout more online or in person?"
        bodyText="It seems like both online and in-person terms can cause burnout. It looks like for many respondents, being forced to learn online due to COVID-19 has helped a bit with burnout."
        align="right"
        noBackground>
        <BarGraphVertical data={H2ii} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever been to therapy?"
        bodyText="The words therapy and counselling are often used interchangeably, but therapy is generally more long-term and focuses on you as an individual. Meanwhile, counselling is usually for a specific issue for a limited amount of time. Although some respondents have sought out therapy, this number is less than half of the number of respondents who reported struggling with mental health. This could speak to the need to have more accessible and available resources in regards to therapy around UW. In the meantime, if you’re struggling with mental health, don’t hesitate to reach out to professionals.">
        <div className={styles.graphContainer}>
          <PieChart data={H3} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you haven’t been to therapy, have you considered going?"
        bodyText="Around half of those who responded to this question reported that they have considered therapy. Again, this is almost double the number of respondents who have actually been to therapy."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={H3i} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you have considered going to therapy, what factors prevented you from going?"
        bodyText="Seeking professional help can dramatically improve one's well-being. However, many avoidance factors prevent people from doing so. According to our respondents, some of the most common barriers for them include the lack of information, money, stereotypes, and the lack of time.">
        <BarGraphVertical
          data={H3ii}
          {...barGraphProps(isMobile, pageWidth)}
          widthAlternatingLabel={1000}
          minWidth={700}
          lowerLabelDy="60px"
          valueAxisLabelOffset={0}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever been to counselling?"
        bodyText="Out of the 101 respondents who answered this question, 24 said yes to having gone to counselling before. This number is very similar to the number of people who have been to therapy."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={H4} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you haven’t been to counselling, have you considered going?"
        bodyText={
          <p>
            Not many of our respondents have considered going to counselling. This is significantly less than the number of people who have considered going to
            therapy. UW Health Services offers great counselling services and resources for all students, you can check them out
            <BodyLink href="https://uwaterloo.ca/campus-wellness/counselling-services"> here</BodyLink>.
          </p>
        }>
        <div className={styles.graphContainer}>
          <PieChart data={H4i} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If you have considered going to counselling, what factors prevented you from going?"
        bodyText="The factors that inhibit people from going to counselling are similar to those that limit people from trying out therapy."
        align="right"
        noBackground>
        <BarGraphVertical data={H4ii} {...barGraphProps(isMobile, pageWidth)} widthAlternatingLabel={680} lowerLabelDy="50px" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you used UW Health Services for your mental health?"
        bodyText={
          <p>
            UW Health Services is a program that provides accessible medical services. It’s great to see a chunk of our respondents were able to utilize it for
            their benefit and we hope that these services continue to be used even more in the future. University life is stressful, and turning to UW Health
            Services is something you would not be alone in doing. To book an appointment with them, you can call (519) 888-4096 or{" "}
            <BodyLink href="mailto:hsforms@uwaterloo.ca">email hsforms@uwaterloo.ca</BodyLink> if you are unable to book by phone.
          </p>
        }>
        <div className={styles.graphContainer}>
          <PieChart data={H5} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How was your experience with UW Health Services?"
        bodyText="Our respondents have a wide range of opinions and feedback about their experiences with UW Health Services. Here is some of the feedback that was provided."
        align="right"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H5i} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={200} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How would you rate your mental health over your entire undergraduate career?"
        bodyText="Overall, the majority of respondents rated their mental health over their undergrad career as a 3 or 4 out of 5.">
        <BarGraphVertical data={H7} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How would you rate your current mental health?"
        bodyText="Similar to the question above, most students rated their current mental health as a 3 or 4 out of 5. However, more people indicated a mental health score of 4 or 55, showing a slight increase in general mental health status after graduation."
        align="right"
        noBackground>
        <BarGraphVertical data={H6} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How much do you value your mental health?"
        bodyText="Thankfully, most people do highly value their mental health. As shown by the stats, most people gave a score on the higher end.">
        <BarGraphVertical data={H8} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What are some ways you have kept in touch with others during co-op and the pandemic?"
        bodyText="Co-op and the pandemic can separate friends you make at UW. However, here are some ways that our respondents kept in touch with their friends."
        align="right"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H9} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={200} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Please give any general comments about mental health in university."
        bodyText="With mental health being such a large concern in university, many of our respondents have commented on this topic. Here are some quotes from students that describe how UW’s environment affects students’ mental health as well as suggestions for improving mental health.">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H9i} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={800} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Do you feel like you have enough support for your mental health?"
        bodyText="Most of our respondents indicated that they did not feel like they received enough support for their mental health. It’s important to remember that there are people and services out there looking to help you. UW is a very stressful environment, so don’t be afraid to turn to loved ones or professionals for help."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={H10} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What do you do to help cope with your mental health issues?" bodyText=" ">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H11} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={250} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How does mental health affect different aspects of your life (e.g., relationships, studies, career)?"
        bodyText=" "
        align="right"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H12} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={600} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading='Do you feel "senioritis" at this time?'
        bodyText="Most students feel “senioritis” at the time of this survey. This makes sense, as they’re so close to being free.">
        <div className={styles.graphContainer}>
          <PieChart data={H13} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What do you think UW can do better to accommodate your mental health?" bodyText=" " align="right" noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H14} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={500} />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.postGrad} rightPage={pageRoutes.personal} />
    </div>
  );
}
