"use client";

import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { QuotationCarousel } from "@/components/QuotationCarousel";
import { SectionHeader } from "@/components/SectionHeader";
import { P2, P3, P4, P5, P6, P7, P8, P9 } from "@/data/personal";
import { pageRoutes } from "@/data/routes";
import styles from "../basePage.module.css";

export default function Personal() {
  return (
    <div className={styles.page}>
      <Header />
      <SectionHeader title="Personal" subtitle="Life lessons from students" />

      <ComponentWrapper
        heading="What is your favourite memory from your time at UW?"
        bodyText="Most students' favourite memories relate to their time spent with friends and significant others! This goes to show how important the people around us are!">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={P2} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is one thing that you wish you could tell your first year self?"
        bodyText="In summary, don't spend too much time worrying about your grades or co-op during university. Develop new hobbies, be more open-minded, and talk to more people. There's a lot to experience in university that you don't want to miss or regret not being a part of. And as always, remember to drink responsibly!"
        align="right"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={P3} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What is your favourite inspirational quote/words to live by?" bodyText=" ">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={P4} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is the nicest thing a classmate did for you?"
        bodyText="Any small act of kindness can make someone else's day and possibly remain etched in their memory for a lifetime. We see that a lot of respondents' classmates helped them with their assignments and exams. Some respondents fondly remember when their classmate asked them if they were okay and struck up a conversation with them."
        align="right"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={P5} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is the best life hack/tip?"
        bodyText="We have a wide range of life hacks about submitting assignments, coding shortcuts, and living healthily. Take notes and use them to your advantage!">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={P6} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is the best lesson you learned from your time at UW?"
        bodyText="In short, challenge yourself to get out of your comfort zone; new opportunities and experiences can help you grow and you might even find something new that you really enjoy! A lot of the small, insignificant things you worry about won't matter in the end. Most importantly, be sure to take care of yourself, enjoy your life and savour each moment!"
        align="right"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={P7} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is one aspect of your life that makes you the happiest?"
        bodyText="Both romantic and platonic relationships, as well as hobbies, are the areas of respondents’ lives that make them the happiest!">
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={P8} circleDiameter={0} height={300} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What advice would you give current/future CS students at UW?"
        bodyText="The main takeaways here are to be social, take care of yourself and your mental health, and do things beyond just school and co-op. UW is a truly unique experience and you should try to make the most of all aspects of it!"
        align="right"
        noBackground>
        <div className={styles.quotationCarouselContainer}>
          <QuotationCarousel data={P9} circleDiameter={0} height={500} width={800} />
        </div>
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.mentalHealth} rightPage={pageRoutes.contributors} />
    </div>
  );
}
