import Container from "@/components/sections/container/container";
import Question from "@/components/ui/question/question";
import BackArrow from "@/components/ui/back/backArrow";

export default function Home() {
  return (
    <main>
      <Container>
        <BackArrow />
        <Question>
          <h2>IxDF&apos;s Website Audit</h2>
          <p>
            {`In this article, I'll describe my findings on the current analytics
            and marketing setup of IxDF's website.`}
          </p>
          <p>
            {`Since I don't have access to IxDF's internal data/tools, I'll be
            basing my analysis on publicly available information and
            observations made through external tools.`}
          </p>
          <h2>The current setup</h2>
          <p>
            {`By analyzing your tracking scripts in IxDF website's HTML and
            tracking events that were asynchronously triggered with user
            actions, I was able to get some of the tools in your analytics and
            marketing setup:`}
          </p>
          <ul>
            <li>
              <span className="bold">Google Tag Manager (GTM)</span>, used for
              managing and deploying various tracking tags.
            </li>
            <li>
              <span className="bold">Facebook Pixel</span>, LinkedIn Insight Tag
              and Google Ads, for tracking ad conversions, audience retargeting,
              and measuring the effectiveness of campaigns.
            </li>
            <li>
              <span className="bold">Google Analytics (GA4)</span> for tracking
              page views and user interactions.
            </li>
            <li>
              In <span className="bold">Email Marketing</span>, you also track
              the source of the web visits in the URL, even identifying the
              campaign that triggered it.
            </li>
            <li>
              <span className="bold">BugSnag</span>, used for error monitoring
              and tracking errors on the website. This is used for development
              purposes.
            </li>
            <li>
              <span className="bold">Algolia Search Insights</span>, which
              collects data on how users interact with the search.
            </li>
          </ul>
          <h2>A deeper look into the events</h2>
          <p>
            {`Through an analysis of the asynchronous requests your website made,
            available in the network tab of Chrome's Inspector, I was able to
            identify the events that were being tracked:`}
          </p>
          <ul>
            <li>
              <span className="bold">Page views</span>, to track a user&apos;s
              navigation through the site. You also use this event to track user
              interactions that use filters in the URL to render different
              content on the same page, for example, when a user picks a career
              path.
            </li>
            <li>
              <span className="bold">E-commerce</span> events, when a user
              proceeds to checkout, or completes a purchase.
            </li>
            <li>
              <span className="bold">Other user interactions</span> that trigger
              changes in the UI but are not specifically page_view events. For
              example, playing a video or submitting a form.
            </li>
          </ul>
          <h2>Recommendations</h2>
          <h3>1. Remove duplicate script tags</h3>
          <p>
            {`Remove duplicate script tags from your website. Currently, there are two LinkedIn Insight Tags which might lead to errors if not configured properly.`}
          </p>
          <h3></h3>
          <h3>2. Use server-side tracking for important events</h3>
          <p>
            {`For important events like tracking purchases or form submissions, it's better to use server-side tracking to avoid any possible data loss. With this method you avoid any inaccuracies in the data. In the client side, some issues might arise if users have ad blockers or close browser windows too soon.`}
          </p>
          <h3>3. Track all events, even small ones.</h3>
          <p>
            {`Tracking all user interactions might lead to possible conclusions
            that are not always as noticeable. Currently, some events are only
            tracked by LinkedIn Tag, but not by GA4 so you can't keep track of
            them in your reports.`}
          </p>
          <h3>
            4. Reduce main-thread blocking caused by unused scripts, Javascript
            or CSS.
          </h3>
          <p>
            {`Google Page Speed Insights shows that your website has a low performance score on mobile. This might be due to unused scripts, Javascript or CSS that are blocking the main thread. Optimizing performance will improve the user experience and SEO. It's difficult to give specifics without access to your codebase, although I did notice your scripts are loaded asynchronously, which is good for performance.`}
          </p>
          <h3></h3>
          <h3>
            5. Consider alternative tools to understand how users navigate IxDF.
          </h3>
          <p>
            {`While GA4 excels in tracking conversions, platforms like Heap offer a better understanding of customer journeys and their impact on conversion rates, providing valuable data to improve user experience and increase conversions.`}
          </p>
        </Question>
      </Container>
    </main>
  );
}
