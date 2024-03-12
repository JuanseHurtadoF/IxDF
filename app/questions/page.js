import Container from "@/components/sections/container/container";
import Link from "next/link";
import styles from "./questions.module.scss";
import Question from "@/components/ui/question/question";
import MoreInfo from "@/components/ui/moreInfo/moreInfo";
import BackArrow from "@/components/ui/back/backArrow";
import Card from "@/components/ui/card/card";

export default function Home() {
  return (
    <main>
      <Container>
        <BackArrow />
        <Question>
          <h2>1. An interest, favorite activity, or hobby of mine.</h2>
          <p>
            As a kid I used to play Monopoly a lot (and I mean a lot). And even
            though it taught me anger management skills, it was a game that
            consisted mainly of luck, and I started to hate it. It all changed
            with{" "}
            <a
              href="https://www.wired.com/2009/03/mf-settlers/"
              target="_blank"
              className="underlined"
            >
              Catan: The Monopoly Killer
            </a>
            . My board game love started there and I don&apos;t think it&apos;s
            ever leaving.{" "}
          </p>
        </Question>
        <Question>
          <h2>
            2. What is most important when I&apos;m looking for a new job?
          </h2>
          <p>
            I&apos;m looking to be part of an ambitious team that is passionate
            about improving people&apos;s lives. I want to be part of a
            purpose-driven organization.
          </p>
          <p>
            In terms of the day-to-day, I want to focus my time on getting
            things done and not on meetings. I wish to be part of a team that is
            focused on delivering value to the customer and not on internal
            politics.
          </p>
          <p>
            In other words, I&apos;m looking for an environment where you can
            get things done while also being part of a proactive team that is
            there to support each other.
          </p>
          <p>
            I want to be part of a team that pushes me to my best, so that what
            I do today can be great but it&apos;s not enough for tomorrow.
          </p>
        </Question>
        <Question>
          <h2>3. How I learn and develop myself.</h2>
          <p>
            I believe that the biggest regrets in life are not things you did,
            but rather acts of omission. That is also how I approach learning.
            For me, a day in which I learned nothing is a day wasted.
          </p>
          <p>
            As for my method, I like to take a deep dive into the theory and
            concepts of what I&apos;m learning. I usually then try to explain it
            as if a 5-year-old was asking me about it. If I can&apos;t explain
            it, I don&apos;t understand it well enough.
          </p>
          <p>
            I&apos;ve found that the combination of truly understanding the
            concepts and practical experience is a powerful formula. You read,
            you try, you try again, and you succeed.
          </p>
        </Question>
        <Question>
          <h2>4. How I found out about this position.</h2>
          <p>
            I went to the{" "}
            <a
              className="underlined"
              target="_blank"
              href="https://www.interaction-design.org/about/careers"
            >
              IxDF career page
            </a>{" "}
            and saw the position. I though my combination of skills would be a
            good fit, so I applied for the role.
          </p>
        </Question>
        <Question>
          <h2>5.1 Work that makes me proud: McDonald&apos;s Drive Thru</h2>
          <p>
            When I worked at McDonald&apos;s Ecuador, our drive thru growth was
            stuck at 1%, compared to the 8% company-wide average. I gathered
            customer feedback from our drive thru services and personally
            visited four restaurants to understand their preferences better.
            This analysis revealed that our advertising was off-target, focusing
            too much on promotions like buy-1-get-1-free or 40% off deals, while
            customers valued the speed and convenience of drive thru more.
          </p>
          <MoreInfo preview="The data I used to convince the CMO this was worth a shot">
            <ul>
              <li className="list-item">
                Drive-thru customers have more purchasing power and a 20% higher
                average ticket. More volume here means more customers at a
                higher transaction value.
              </li>
              <li className="list-item">
                40% of customers go to drive thru for its convenience and speed,
                only 10% go because of discounts.
              </li>
              <li className="list-item">
                A case about Domino&apos;s Pizza in Ecuador, when they were
                severely damaged by a long-time promotion of selling 2 pizzas
                for the price of 1 on Tuesdays. They had issues for years
                because people only ordered on Tuesdays. We didn&apos;t want to
                end up in the same situation.
              </li>
            </ul>
          </MoreInfo>
          <p>
            Just as we pivoted our campaign to highlight these advantages, the
            pandemic forced all restaurants to close temporarily. When we
            reopened, only delivery and drive thru were operational, making our
            new approach even more relevant. We launched the campaign,
            emphasizing quick, convenient service with minimal contact, aligning
            perfectly with customer needs during such times.
          </p>
          <p>
            This strategy not only gave us a head start over competitors but was
            also adopted by McDonald&apos;s in Argentina, Uruguay, Chile, and
            Peru for their advertising. It was incredible to see my work gain
            international recognition. The campaign led to a 40% increase in
            drive thru sales, positioning McDonald&apos;s as the restaurant with
            the strongest recovery in the market. What makes me proud is how we
            listened to our customers and adapted, achieving significant impact
            across Latin America.
          </p>
          <p>
            This was some time ago, and I don&apos;t have pictures of the out of
            home ads, but here are some examples I could find of posts made by
            McDonald&apos;s in{" "}
            <a
              className="underlined"
              target="_blank"
              href="https://www.instagram.com/p/CDocgz2hoph/"
            >
              Ecuador
            </a>
            ,{" "}
            <a
              className="underlined"
              target="_blank"
              href="https://www.instagram.com/p/CAxytQZn54N/?hl=en"
            >
              Argentina
            </a>{" "}
            and{" "}
            <a
              className="underlined"
              target="_blank"
              href="https://www.instagram.com/p/CA0W0O8Btcm/?hl=en"
            >
              Peru
            </a>
            .
          </p>
        </Question>
        <Question>
          <h2>5.2 Work that makes me proud: Full Stack Development</h2>
          <p>
            Recently, I completed a project where I built a Kanban Board
            application from scratch. I took charge of designing the user
            interactions, drawing inspiration from an initial concept I found
            online, and then fully developed the database, backend, and frontend
            components myself.
          </p>
          <p>
            I actually made a demo for IxDF, in case you want to try it out:{" "}
            <a
              className="underlined"
              target="_blank"
              href="https://kanban-teal.vercel.app/"
            >
              Kanban Application Demo.
            </a>
          </p>
          <p>
            I&apos;m particularly proud of this project because in 2021, I had
            not written a single line of code. Personally, projects like this
            one exemplify the road I&apos;ve taken to learn as much as I can,
            and leave no challenge behind me. Learning Full Stack Development
            was difficult, but it was a dream of mine to be able to think of an
            idea and build it. Now I can!
          </p>
        </Question>
        <Question>
          <h2>6. What does taking ownership mean? With examples.</h2>
          <p>
            Taking ownership means being fully accountable for your work,
            including recognizing your mistakes and knowing how to correct them.
            It also means stepping beyond your defined role to address
            challenges that might fall outside your job description in order to
            help your team.
          </p>
          <p>
            An example of this could be the McDonald&apos;s campaign I mentioned
            above (5.1), which was not in my job description. But I took
            ownership of a problem and proposed a solution.
          </p>
          <p>
            While I was a developer at Long Lost Friends, I noticed our project
            timelines were being extended due to late-stage revisions from
            design and QA, impacting both productivity and team relations. This
            was mainly caused by the lack of collaboration between developers
            and designed being kept out of the development process. This was a
            remote work environment, so we didn&apos;t have designers sitting
            next to us.
          </p>
          <p>
            I suggested a new strategy to the Head of Development. First,
            starting projects with early collaboration between design and
            development teams. Second, having the initial design delivered to
            me, to create an initial repository with reusable styles and
            components, providing all developers with a common starting point
            and reducing the need for numerous decisions throughout the project.
          </p>
          <p>
            For the very first project we applied this to, we delivered in half
            the time we had originally planned and significantly reduced Q/A
            tickets. We kept this process for all future projects.
          </p>
        </Question>
        <Question>
          <h2>
            What are the key skills you (would) bring to an asynchronous and
            remote work environment? What key skills do you feel you need to
            improve for you to fully thrive in such an environment?
          </h2>
          <p>
            In an asynchronous and remote work environment, I find that my blend
            of self-sufficiency and team spirit really comes into play.
            I&apos;ve always been someone who enjoys the balance between
            collaborating with others and diving deep into my work solo. This
            dynamic works well remotely, where being in constant physical
            proximity to your team isn&apos;t an option.
          </p>
          <p>
            {`I make an effort to be as accessible as possible to my
            team. I'm aware of how essential clear and timely
            communication is when you're not sharing an office space. Whether
            it's adjusting to different time zones or just ensuring that
            messages are concise and meaningful. It's all about making sure that
            distance doesn't turn into detachment.`}
          </p>
          <p>
            My approach means I can efficiently manage tasks and meet deadlines
            without the need for constant oversight. I have a self-directed work
            ethic to ensure I contribute effectively to team goals,
            demonstrating my reliability and commitment to excellence even in
            environments where supervision is minimal.
          </p>

          <p>
            {`Lately, I've been working on getting better at managing my time.
            I started using a method called time boxing, where I give each
            task its own chunk of time, focusing on getting the most
            important done first. It's been really helpful in keeping me on
            track and making sure I'm getting the important tasks done without
            getting sidetracked. It's all about trying to be a bit more
            organized and efficient, so I can be as effective as possible in my
            role.`}
          </p>
        </Question>
        <Question>
          <h2>
            Which season of life are you currently in and what are your career
            goals?
          </h2>
          <p>
            I am in a point in my career where I am looking to grow and learn as
            much as I can. I strongly believe that constant effort and
            dedication in the first half of your career has a compounding effect
            over time. My goal is learn as much as I can today, so that later in
            life I can enjoy a better work-life balance.
          </p>
          <p>
            My short term goals are to master data analytics by mastering Data
            Science, Machine Learning and Artificial Intelligence. I believe
            that these skills will be essential in the future, and I want to be
            ready for it.
          </p>
          <p>
            In the long term, my dream is to open a school for underprivileged
            kids throughout Latin America, where they can learn technical skills
            that could open doors for them that, unfortunately, remain closed
            today. I believe that education is the most powerful tool we have to
            change the world, and I want to be part of that change.
          </p>
        </Question>
      </Container>
    </main>
  );
}
