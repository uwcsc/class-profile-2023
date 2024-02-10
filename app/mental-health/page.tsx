"use client";

import { BarGraphVertical } from "@/components/BarGraph";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { H1, H10, H11, H2, H3, H4, H5, H5i, H6, H7, H8, H9 } from "@/data/mental-health";
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
        bodyText="Mental health is a serious concern for many students. A majority of those surveyed have mentioned struggling with mental health issues during their time in college. The university environment can often be a source of stress, anxiety, or other mental health problems. So, it's important to take care of yourself and support each other during challenging moments.">
        <div className={styles.graphContainer}>
          <PieChart data={H1} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever experienced burnout?"
        bodyText="Burnout is quite prevalent among our respondents, with most individuals indicating they have encountered it at some point. The consistent workload can easily lead to students feeling overwhelmed or emotionally exhausted. It's essential to recognize that these feelings are entirely normal and to prioritize allowing yourself breaks."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <PieChart data={H2} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever been to therapy?"
        bodyText="Many people mentioned they haven't tried therapy, but quite a few have either gone for it or thought about it. This shows that university life can be really tough, so it's crucial to reach out and use the resources available to take care of your mental and physical health!">
        <BarGraphVertical data={H3} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever been to counselling?"
        bodyText="Counseling is something that quite a few people have either tried or thought about. It's a reassuring sign that many students are open to getting help when they need it. So, remember to take care of yourself, both mentally and emotionally – it's an important step in looking out for your well-being during your university journey."
        align="right"
        noBackground>
        <BarGraphVertical data={H4} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Have you ever used UW Health Services for your mental health?"
        bodyText="UW Health Services is a program that offers easily accessible medical services. It's wonderful to observe that a significant portion of our respondents have availed themselves of these services for their well-being. We encourage the continued utilization of these valuable resources in the future. University life can be demanding, and seeking assistance from UW Health Services is a common and supportive choice. To schedule an appointment, you can reach out to them at (519) 888-4096 or email hsforms@uwaterloo.ca if phone booking is not convenient for you. Taking care of your health is a priority, and these services are here to assist you.">
        <div className={styles.graphContainer}>
          <PieChart data={H5} {...pieChartProps(isMobile, pageWidth)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If so, how was your experience with UW Health Services?"
        bodyText="Our respondents have expressed diverse opinions and provided feedback on their encounters with UW Health Services. The majority of respondents have given ratings falling within the 1-3 range"
        align="right"
        noBackground>
        <BarGraphVertical data={H5i} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Overall, how would you rate your mental health over your entire undergraduate career? "
        bodyText="In general, most respondents rated their mental health throughout their undergraduate career as a 3 or 4 out of 5. It's encouraging to note that the majority of scores are toward the higher end of the scale!">
        <BarGraphVertical
          data={H6}
          {...barGraphProps(isMobile, pageWidth)}
          widthAlternatingLabel={1000}
          minWidth={700}
          lowerLabelDy="60px"
          valueAxisLabelOffset={0}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Please give any general comments about mental health in university."
        bodyText="Given the significant impact of mental health concerns in the university setting, a substantial number of our respondents have shared their thoughts on this matter. Below, you will find some quotes from students that discuss how UW's environment influences students' mental health and offer suggestions for enhancing mental well-being."
        align="right"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H7} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={500} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Please give any general comments about mental health in university."
        bodyText="Given the significant impact of mental health concerns in the university setting, a substantial number of our respondents have shared their thoughts on this matter. Below, you will find some quotes from students that discuss how UW's environment influences students' mental health and offer suggestions for enhancing mental well-being."
        align="left"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H7} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={500} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What do you do to help cope with your mental health issues?" bodyText="" align="center" noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H8} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={500} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What do you think UW can do better to accommodate your mental health?" bodyText="" align="center" noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H9} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={500} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="How much of an effect has imposter syndrome played in your university life?"
        bodyText="The impact of imposter syndrome on university life is a concerning issue. When asked to rate its influence on a scale of 1 to 5, the majority of respondents selected 4 or 5, indicating that imposter syndrome has significantly affected their lives. This highlights the need for greater awareness and support to help students address this syndrome and foster a greater sense of confidence in themselves."
        align="right"
        noBackground>
        <BarGraphVertical data={H10} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper heading="What has been your experience with imposter syndrome?" bodyText="" align="center" noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={H11} circleDiameter={0} width={barGraphWidth(isMobile, pageWidth)} height={500} />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.fullTime} rightPage={pageRoutes.personal} />
    </div>
  );
}
