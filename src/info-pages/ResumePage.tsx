import {ReactNode} from 'react';
import {Helmet} from 'react-helmet';

import WebRoutes from '../common/WebRoutes';

import Header from './Header';
import PageWrapper from './PageWrapper';

import styles from './ResumePage.module.css';

type WorkExperienceItem = {
  company: string;
  website: string;
  location: string;
  date: string;
  title: string;
  description: ReactNode;
};

const WORK_EXPERIENCES: Array<WorkExperienceItem> = [
  {
    company: 'Discord',
    website: 'https://discord.com',
    location: 'San Francisco, California',
    date: 'March 2020 - Present',
    title: 'Senior Software Engineer',
    description: (
      <span>
        Implemented watching multiple streams. Rebuilt all marketing pages for
        "Your Place to Talk". Launched Stage channels, Stage discovery, and
        Events.
      </span>
    ),
  },
  {
    company: 'Facebook',
    website: 'https://www.facebook.com',
    location: 'Menlo Park, California',
    date: 'July 2018 - March 2020',
    title: 'Software Engineer - Data Warehouse',
    description: (
      <span>
        Maintained and rebuilt Facebook's data replication system, a distributed
        service responsible for reliably copying petabytes of data every day.
      </span>
    ),
  },
  {
    company: 'Riot Games',
    website: 'https://www.riotgames.com',
    location: 'Los Angeles, California',
    date: 'September 2017 - December 2017',
    title: 'Software Engineering Intern - Accounts',
    description: (
      <>
        <span>Maintained Riot's OAuth 2.0 and OpenID Connect services.</span>
        <span>Helped implement a new account recovery redesign.</span>
      </>
    ),
  },
  {
    company: 'Uber',
    website: 'https://www.uber.com',
    location: 'San Francisco, California',
    date: 'January 2017 - April 2017',
    title: 'Software Engineering Intern - Rider',
    description: (
      <span>
        Improved the Android app by adding UI polish, adding a cancellation
        survey tool, and implementing a redesign for pickups.
      </span>
    ),
  },
  {
    company: 'Riot Games',
    website: 'https://www.riotgames.com',
    location: 'Los Angeles, California',
    date: 'May 2016 - August 2016',
    title: 'Software Engineering Intern - Insights Tech',
    description: (
      <span>
        Helped design, build, and maintain the Real-Time Data Pipeline, which
        indexes millions of messages per minute.
      </span>
    ),
  },
  {
    company: 'Google',
    website: 'https://www.google.com',
    location: 'Kitchener, Waterloo',
    date: 'September 2015 - December 2015',
    title: 'Software Engineering Intern - Display Ads Infrastructure',
    description: (
      <span>
        Maintained critical Display Ads binary, improved release processes,
        migrated state machines to producer graphs.
      </span>
    ),
  },
  {
    company: 'Coursera',
    website: 'https://www.coursera.org',
    location: 'Mountain View, California',
    date: 'January 2015 - May 2015',
    title: 'Data Infrastructure Engineering Intern',
    description: (
      <span>
        Redesigned experiment platform, shipped{' '}
        <a href="//github.com/coursera/dataduct">Dataduct</a>, extended
        accounting.
      </span>
    ),
  },
  {
    company: 'Desire2Learn Incorporated',
    website: 'https://www.d2l.com',
    location: 'Kitchener, Waterloo',
    date: 'April 2014 - August 2014',
    title: 'Software Developer',
    description: (
      <span>
        Built shiny features for{' '}
        <a href="//www.brightspace.com/">Brightspace</a>, fixed many bugs,
        shipped metadata tool.
      </span>
    ),
  },
];

interface WorkExperienceProps {
  item: WorkExperienceItem;
}

function WorkExperience({item}: WorkExperienceProps) {
  return (
    <ul className={styles.list}>
      <a href={item.website}>
        <strong>{item.company}</strong>
      </a>{' '}
      - {item.location}
      <span className={styles.date}>{item.date}</span>
      <br />
      <span>
        <strong>{item.title}</strong>
      </span>
      <br />
      {item.description}
    </ul>
  );
}

export default function ResumePage() {
  return (
    <PageWrapper>
      <Helmet htmlAttributes={{lang: 'en'}}>
        <title>Resume - Jerry Jiang (tpcstld)</title>
        <meta name="description" content="My resume!" />
      </Helmet>
      <Header currentRoute={WebRoutes.RESUME} />
      <div className={styles.container}>
        <h4 className={styles.section}>
          <strong>Technical Qualifications</strong>
        </h4>
        <ul className={styles.list}>
          <span>
            <strong>Languages:</strong> Typescript, Javascript, Python, Java,
            Scala, C++, C#, Bash, SQL
          </span>
          <br />
          <span>
            <strong>Technologies:</strong> React, Flask, Node.js, AWS, GCP
          </span>
          <br />
          <span>
            <strong>Tools and IDEs:</strong> Git, SVN, Vim, IntelliJ, MySQL,
            ¯\_(ツ)_/¯
          </span>
        </ul>
        <h4 className={styles.section}>
          <strong>Work Experience</strong>
        </h4>
        {WORK_EXPERIENCES.map((item, i) => (
          <WorkExperience key={i} item={item} />
        ))}
        <h4 className={styles.section}>
          <strong>Education</strong>
        </h4>
        <ul className={styles.list}>
          <strong>Software Engineering</strong>
          <span className={styles.date}>Sept 2013 - May 2018</span>
          <br />
          <span>University of Waterloo - Waterloo, Ontario</span>
        </ul>
        <div className={styles.pdf}>
          <a href="/resume/resume.pdf">PDF, detailed version</a>
        </div>
      </div>
    </PageWrapper>
  );
}
