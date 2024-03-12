import Container from "@/components/sections/container/container";
import BackArrow from "@/components/ui/back/backArrow";
import Question from "@/components/ui/question/question";

export default function Home() {
  return (
    <main>
      <Container>
        <BackArrow />
        <Question>
          <h2>High-level Analytics Implementation Plan</h2>
          <p>
            The purpose of this plan is to outline a high-level implementation
            plan to ensure IxDF can continuously analyze data, and get
            actionable insights from it that can positively impact the
            organization.
          </p>
          <h2>Overview of business KPIs</h2>
          <p>
            {`When diving into analytics, it's crucial to begin with a high-level
          overview before delving into the specifics of various channels. This
          approach transforms analytics from mere metric tracking into a
          comprehensive practice that examines how the metrics we monitor
          influence the financial health of the organization.`}
          </p>
          <p>
            For an organization like IxDF, where one of its main is increasing
            the growth rate, some important KPIs to track are:
          </p>
          <ul>
            <li>
              <span className="bold">Website Traffic: </span>tracks the number
              of total vistis and unique visitors to the website.
            </li>
            <li>
              <span className="bold">New memberships: </span>tracks the number
              of new members joining IxDF over a specific period.
            </li>
            <li>
              <span className="bold">Churn rate: </span>the opposite of
              retention rate. Measures the percentage of members who cancel
              their subscriptions within a certain time frame.
            </li>
            <li>
              <span className="bold">Conversion rate: </span>Measures the
              percentage of visitors to the IxDF website or specific campaign
              landing pages who take a desired action, such as signing up for a
              course or becoming a member.
            </li>
            <li>
              <span className="bold">Customer Lifetime value (CLV): </span>The
              total revenue expected from a member throughout their relationship
              with IxDF. It encompasses membership renewals, course enrollments,
              and other purchases.
            </li>
            <li>
              <span className="bold">Cost Per Acquisition (CPA): </span>The
              average cost spent on acquiring a new member, calculated across
              all marketing and advertising efforts.
            </li>
          </ul>
          <p className="italic">
            Please note, the KPIs and other lists in this plan are foundational
            yet not exhaustive.
          </p>
          <h2>Applying filters to KPIs to get actionable insights</h2>
          <p>
            While maintaining a broad view of KPIs is essential, diving deeper
            into each KPI provides valuable specifics. Here are some examples on
            how leveraging different filters transforms raw data into a roadmap
            for targeted action:
          </p>
          <ul>
            <li>
              <span className="bold">By Channel: </span>Identifies effective
              channels by comparing conversion rates. Organic traffic may
              outperform paid marketing, suggesting SEO and content marketing
              are more efficient over time.
            </li>
            <li>
              <span className="bold">By Campaign: </span>Assesses individual
              campaigns to find what works. A highly successful campaign could
              guide future strategies with its effective messaging or creative.
            </li>
            <li>
              <span className="bold">By Geographical Area: </span>Reveals
              regional performance differences through data segmentation. High
              conversion regions might be ideal for targeted marketing,
              leveraging local preferences.
            </li>
            <li>
              <span className="bold">By Demographics: </span>Applies demographic
              filters for a comprehensive audience analysis. This can uncover
              diverse preferences, informing more personalized strategies.
            </li>
            <li>
              <span className="bold">By Device Type: </span>Offers insights on
              preferred engagement or conversion devices. Low mobile conversions
              could highlight a need for mobile UX improvements or a desktop
              preference for certain actions.
            </li>
          </ul>
          <p>
            {`By filtering data, objectives go from "Let's increase conversion
            rates" to actionable information like "Instagram conversion rates
            are lower than Youtube's by 15%, suggesting we either improve our
            Instagram content strategy or reallocate part of the budget to
            Youtube where we see higher engagement and conversions."`}
          </p>
          <h2>An exhaustive approach to measuring user activity</h2>
          <p>
            Analyzing user interactions in the website or product, allows us to
            know, which users are more likely to convert or churn. To get here,
            it is necessary to measure all user activity, as it can lead to an
            actionable roadmap of optimizations.
          </p>
          <p>
            {`Let's take a look a some possible conclusions we can get from user
            activity:`}
          </p>
          <ul>
            <li>80% of users exit our site at the pricing table.</li>
            <li>
              Visitors who watch our introductory video are 25% more likely to
              sign up.
            </li>
            <li>
              Visitors who explore course details and curriculum are twice as
              likely to convert.
            </li>
          </ul>
          <p>
            The first observation presents a challenge without a clear cause for
            the high exit rate at the pricing table. In contrast, the latter two
            offer straightforward paths for action. By getting conclusions like
            #2 and #3 we can constantly A/B test improvements in the user
            journey to see how they affects KPIs.
          </p>
          <h2>Paid Marketing: Beyond Surface-Level Analysis</h2>
          <p>
            Metrics like Cost per Mille (CPM), Cost Per Click (CPC),
            Click-Through Rate (CTR), among others, are very important to track
            and constantly optimize. And by applying filters to these metrics
            some real optimization can be done. However, decisions in paid
            marketing should always be made with the business KPIs in mind.
          </p>
          <p>
            {`A great CPM means very little at a low conversion rate. Similarly,
            funneling resources into the most conversion-rich channel might seem
            prudent until you discover it's also the channel with the highest
            churn rate and the most refund requests. It's also possible to
            overlook valuable opportunities, such as failing to recognize that
            users arriving from YouTube may exhibit the highest Customer
            Lifetime Value (CLV).`}
          </p>
          <p>
            The essence of effective paid marketing lies in its alignment with
            business objectives. It demands an analytical approach that places
            business KPIs at the forefront. This view ensures that every dollar
            spent on paid marketing not only seeks to improve immediate metrics
            like CPM or CPC but also contributes positively to the overall
            financial health and long-term goals of the organization.
          </p>
          <h2>Tracking Organic Growth</h2>
          <p>
            It is very important to track all KPIs mentioned initially, filtered
            by organic channels. This is what will provide the most insightful
            feedback for future optimizations. However, there are some important
            metrics that are also very important to track:
          </p>
          <ul>
            <li>
              <span className="bold">Search Engine Rankings: </span>Monitor
              positions in search results for targeted keywords with tools like
              Google Search Console or SEMrush to refine SEO strategies based on
              ranking changes.
            </li>
            <li>
              <span className="bold">Social Media Engagement by Channel: </span>
              Track likes, shares, comments, and follower growth with
              platform-specific analytics (e.g., Instagram Insights, Facebook
              Analytics) to gauge content impact.
            </li>
            <li>
              <span className="bold">Content Engagement: </span>
              {`Monitor how
              often IxDF's articles and videos are shared or cited, assessing
              engagement with educational content.`}
            </li>
            <li>
              <span className="bold">Email Newsletter Growth: </span>Observe
              subscriber increases over time via email marketing platform
              reports, aiding content strategy and communication adjustments.
            </li>
          </ul>

          <h2>Strategies for Identifying Issues</h2>
          <p>
            <span className="bold">
              Setting Up Real-Time Alerts with Google Analytics:{" "}
            </span>
            Use GA to configure custom alerts for key metrics and changes in
            website performance. This helps in identifying anomalies or
            significant events promptly, allowing for immediate action.
          </p>
          <p>
            <span className="bold">
              Avoid Browser Events for Server Actions (e.g., Purchasing):{""}
            </span>
            Relying on browser events for server-side actions like purchases can
            lead to inaccurate data due to ad blockers, browser crashes, or
            connectivity issues. Server-side tracking is a more reliable and
            accurate measurement of critical actions.
          </p>
          <p>
            <span className="bold">Constant Communication with Teams: </span>
            {`Regular interaction with different teams provides diverse insights
            and can uncover issues not immediately apparent through data alone.
            Each team's unique perspective and expertise can highlight potential
            problems or opportunities for optimization.`}
          </p>
          <p>
            <span className="bold">Talk to Users: </span>
            Direct feedback from users is invaluable. Their experiences and the
            issues they face may not always align with the data, pointing to
            issues in how data is being collected. Take a look at this{" "}
            <a
              href="https://www.youtube.com/shorts/eP8RsS-oNM8"
              target="_blank"
              className="underlined"
            >
              podcast clip
            </a>{" "}
            where Jeff Bezos explains how something similar happened at Amazon.
          </p>
          <h2>A guide to effective A/B testing</h2>
          <p>
            A/B testing is crucial for conversion optimization and feature
            testing. To expand more on this subject, I took this opportunity to
            write a blog post about it.
          </p>
          <a
            href="https://medium.com/@juansebastianhurtadof/a-guide-to-effective-a-b-testing-fd5161e24548"
            target="_blank"
            className="underlined"
          >
            <p>Read the blog post here.</p>
          </a>
          <h2>Centralizing Data for Effective Decision-Making</h2>
          <p>
            The main focus of this plan is to analyze data to make impactful
            decisions for the business. However, this becomes significantly
            challenging if data is scattered across different platforms and
            sources.
          </p>
          <p>
            {`Establishing a data-driven culture becomes difficult if data is
            examined in isolation and if extracting insights from it is
            time-consuming. To ensure effective decision-making, it's crucial to
            have a centralized data hub where stakeholders can swiftly obtain
            answers, facilitating the monitoring of their quarterly and annual
            goals.`}
          </p>
        </Question>
      </Container>
    </main>
  );
}
