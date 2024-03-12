"use client";

import { BarGraphHorizontal, BarGraphVertical } from "@/components/BarGraph";
import { BodyLink } from "@/components/BlankLink";
import { BottomNav } from "@/components/BottomNav";
import { ComponentWrapper } from "@/components/ComponentWrapper";
import { Header } from "@/components/Header";
import { PieChart } from "@/components/PieChart";
import { SectionHeader } from "@/components/SectionHeader";
import { WordCloud } from "@/components/WordCloud";
import { D1, D10, D11, D12, D13, D14, D15, D16, D16i, D17, D18, D19, D2, D3, D4, D5, D6, D7, D8, D8i, D9 } from "@/data/demographics";
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
        bodyText="The 2023 class profile has a total of 135 respondents, with the majority of our class, 121 students, pursuing Computer Science. 7 of our talented students are enrolled in the CS/BBA program, bringing their unique blend of technical and business knowledge to the class. Additionally, seven students have chosen the CFM program, combining computer science with financial expertise, to explore the potentials that lie in the world of FinTech. No matter your program, the UW CS Class of 2023 is a community of future tech leaders and problem solvers.">
        <div className={styles.graphContainer}>
          <PieChart data={D1} {...pieChartProps(isMobile, pageWidth, true)} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your gender identity?"
        bodyText={
          <p>
            The UW CS Class of 2023 proudly represents a spectrum of gender identities. However, unsurprisingly most of the representation is from men with 91
            men and 42 women. This also includes a handful of individuals identifying as gender non-conforming, non-binary, or questioning. Underrepresented
            gender identities are a popular topic in the tech community, so it is promising that more diverse people are becoming interested in CS! Take a look
            at clubs such as <BodyLink href="https://wics.uwaterloo.ca/"> WiCS </BodyLink> and
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

      <ComponentWrapper heading="What are your pronouns?">
        <div className={styles.graphContainer}>
          <PieChart data={D3} {...pieChartProps(isMobile, pageWidth, true)} labelTextSize={15} labelTextRadialOffset={-45} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your birth year?"
        bodyText={
          <p>
            The birth years of the UW CS Class of 2023 exhibit a range of generational diversity. The majority, 109 students, were born in the year 2000,
            representing the bridge between the 20th and 21st centuries. 18 students were born between 1998, 1999, and 2001, highlighting the diversity in age
            of a multi-generational graduating community within the field of computer science.
          </p>
        }
        align="right"
        noBackground>
        <BarGraphVertical data={D4} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is the racial category or categories with which you primarily identify?"
        bodyText={
          <p>
            The UW CS Class of 2023 is a dynamic blend of racial backgrounds, reflecting rich cultures and ethnicities. Our class comprises students from East
            Asian, White, South Asian, Southeast Asian, Latin, Middle Eastern, and other racial backgrounds. However, the majority, 92 students, identify as
            East Asian, including Chinese, Korean, Japanese, or other East Asian descent. This diverse mix enriches our collective experiences and fosters a
            global perspective, strengthening our ability to tackle complex challenges in the field of computer science with a more holistic worldview.
          </p>
        }>
        <BarGraphVertical data={D5} {...barGraphProps(isMobile, pageWidth, true)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your religion and/or spiritual affiliation?"
        bodyText="The class represents a wide array of religious and spiritual backgrounds. The majority of our class identifies as Agnostic or Atheist, reflecting our strong emphasis on secular values. We also have a diverse mix of students practising Christianity, Hinduism, Buddhism, Islam, and other faiths. Some students consider themselves to be spiritual in a general sense. Additionally, there are 18 students choosing not to specify their affiliation. 
        "
        align="right"
        noBackground>
        <BarGraphHorizontal
          data={D6}
          width={barGraphWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          margin={{ ...barGraphMargin, ...{ left: 220 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is the sexual identity or identities with which you identify?"
        bodyText={
          <p>
            The UW CS Class of 2023 is a diverse group, with a significant 22% of our students identifying within the LGBTQ+ community. A majority, 117
            students, identify as Heterosexual or straight. UW has plenty of groups that support the LGBTQ+ community that can be found
            <BodyLink href="https://uwaterloo.ca/human-rights-equity-inclusion/equity-office/pride-uwaterloo"> here</BodyLink>. Clubs such as{" "}
            <BodyLink href="https://www.techplusuw.com/"> Tech+ </BodyLink>
            and <BodyLink href="https://ostem.clubs.wusa.ca/"> oSTEM </BodyLink>
            support queer and trans students in tech and STEM environments!
          </p>
        }>
        <BarGraphHorizontal
          data={D7}
          {...barGraphProps(isMobile, pageWidth, true)}
          widthAlternatingLabel={700}
          margin={{ ...barGraphMargin, ...{ left: 125 } }}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many languages are you fluent in?"
        bodyText="The linguistic diversity within the UW CS Class of 2023 is impressive. A significant portion, 88 students, are fluent in two languages. Additionally, 28 students are fluent in one language, while 13 students are fluent in three languages, highlighting their exceptional linguistic skills. One student has a unique fluency in one and a half languages. There's also one student with fluency in four languages, a remarkable accomplishment. This multilingualism enhances our class's global perspective and strengthens our ability to collaborate on a global scale, reflecting the interconnected nature of the tech industry."
        align="right"
        noBackground>
        <BarGraphVertical data={D8} {...barGraphProps(isMobile, pageWidth)} widthAlternatingLabel={700} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Besides English, what languages are you fluent in?"
        bodyText="The multilingualism within the UW CS Class of 2023 is both diverse and impressive. Mandarin is the most widely spoken language, with 47 students demonstrating fluency. Additionally, we have proficiency in French, with 19 students showing their skills. Other languages include Cantonese, Russian, and Hindi, each spoken by several students. This diversity enriches our communication and understanding, making us a truly international community.
">
        <WordCloud
          data={D8i}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is your political alignment?"
        bodyText="The data on political alignment within the UW CS Class of 2023 reveals a balanced distribution of political beliefs, with a slightly higher representation of 'Moderate Left' and 'Moderate' alignments. This diversity of political views reflects the class's ability to engage in open and nuanced discussions about various societal issues. It suggests an intellectually curious and tolerant class that values a range of perspectives, encouraging constructive dialogues and problem-solving in an inclusive academic environment. The presence of students across different points on the political spectrum also signifies the readiness to embrace a well-rounded understanding of complex issues, an important attribute for future leaders in the tech industry, where ethical and societal considerations often intersect with technology development.
"
        align="right"
        noBackground>
        <PieChart data={D9} {...pieChartProps(isMobile, pageWidth)} labelTextSize={15} labelTextRadialOffset={-30} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Where did you live before coming to UW?"
        bodyText="A large population of students arrived in Waterloo from the GTA area prior to coming to Waterloo, with 77% of respondents residing in all of Ontario. There are also a handful of students coming internationally from areas like Germany, Vietnam, Indonesia, and many more.">
        <WordCloud
          data={D10}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
          background
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What is the highest education level of your parents?"
        bodyText="We see that almost 90% of respondents' families have a bachelor's Degree or higher. Most parents of the graduating class have a master's Degree. We will see if many of the graduating class plan to follow in the footsteps of their parents. 
        "
        align="right"
        noBackground>
        <BarGraphVertical data={D11} {...barGraphProps(isMobile, pageWidth)} />
      </ComponentWrapper>

      <ComponentWrapper
        heading="What was your family income before entering your current UW program?"
        bodyText={
          // <p>
          //   Most families made more than the average family income in Canada in 2020 (
          //   <BodyLink href="https://www150.statcan.gc.ca/t1/tbl1/en/tv.action?pid=1110001201">$104,350</BodyLink>) The range of 51k to 200k was the most common
          //   among families. To sustain a first-year tuition fee that can hover between $8,000 to $55,000, it would make sense for many families to rely on other
          //   sources of financial support.
          // </p>
          ""
        }
        align="right">
        <BarGraphVertical
          // TODO: change when histogram component is ready
          data={D12}
          {...barGraphProps(isMobile, pageWidth, true)}
        />
      </ComponentWrapper>

      <ComponentWrapper
        heading="How many close relatives have attended UW?"
        bodyText="Most of the graduating class are the first family member in their extended family to have had the opportunity to attend and graduate from Waterloo. Are you planning to recommend Waterloo to future students in your family?
        "
        align="left"
        noBackground>
        <BarGraphHorizontal data={D13} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper heading="What immigrant generation do you belong to?" align="right">
        <div className={styles.graphContainer}>
          <PieChart data={D14} {...pieChartProps(isMobile, pageWidth, true)} labelTextSize={20} labelTextRadialOffset={-45} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper heading="What was your high school admissions average?" align="right" noBackground>
        <BarGraphVertical data={D15} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper
        heading="Was your current program your first choice out of all of the programs you applied to in high school?"
        bodyText="The majority of respondents agreed that the UW CS programs were their first choice on OUAC during applications. Let's see if their hopes and dreams panned out in the other sections… ">
        <div className={styles.graphContainer}>
          <PieChart data={D16} {...pieChartProps(isMobile, pageWidth, true)} labelTextSize={20} labelTextRadialOffset={-45} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="If not, what university did your first-choice program belong to?"
        bodyText="Seems like most students were hoping to be in other programs at the University of Waterloo (SE cough cough) but ended up settling on coming into CS when they made their final decision. Another handful of students were aiming for a variety of American universities as well."
        align="right"
        noBackground>
        <div className={styles.graphContainer}>
          <BarGraphHorizontal data={D16i} {...barGraphProps(isMobile, pageWidth)} lowerLabelDy="0" margin={{ ...barGraphMargin, ...{ left: 150 } }} />
        </div>
      </ComponentWrapper>

      <ComponentWrapper
        heading="Which of the following specialized high school programs did you do?"
        bodyText="The majority of respondents seemed to have been in some specialized program at their high schools prior to university. With AP and IB programs being the most popular choice for students prior to coming into Waterloo’s CS program.
">
        <BarGraphVertical data={D17} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
      </ComponentWrapper>

      <ComponentWrapper heading="How much money did you receive in UW in scholarships and grants?" align="right" noBackground wordCloud>
        <WordCloud
          data={D18}
          width={wordCloudWidth(isMobile, pageWidth)}
          height={DefaultProp.graphHeight}
          wordPadding={7}
          desktopMaxFontSize={75}
          mobileMaxFontSize={48}
        />
      </ComponentWrapper>

      <ComponentWrapper heading="What is your MBTI type?" align="right">
        <BarGraphVertical data={D19} {...barGraphProps(isMobile, pageWidth, true)} lowerLabelDy="0" />
      </ComponentWrapper>

      <BottomNav leftPage={pageRoutes.home} rightPage={pageRoutes.academics} />
    </div>
  );
}
