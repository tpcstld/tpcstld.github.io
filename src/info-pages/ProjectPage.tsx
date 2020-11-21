import {Helmet} from 'react-helmet';

import Link from '../common/Link';
import WebRoutes from '../common/WebRoutes';
import Header from '../info-pages/Header';
import PageWrapper from '../info-pages/PageWrapper';
import ProjectList, {ProjectData} from '../info-pages/ProjectList';

import styles from './ProjectPage.module.css';

import GithubLogo from './assets/github.svg';

interface ProjectProps {
  project: ProjectData;
}

function Project({project}: ProjectProps) {
  return (
    <Link className={styles.project} href={project.url}>
      <span className={styles.text}>{project.name}</span>
      <span className={styles.text}>
        <small className={styles.description}>{project.description}</small>
      </span>
    </Link>
  );
}

export default function ProjectPage() {
  return (
    <PageWrapper>
      <Helmet>
        <title>Jerry Jiang (tpcstld)</title>
      </Helmet>
      <Header currentRoute={WebRoutes.PROJECTS} />
      <div className={styles.projectContainer}>
        {ProjectList.map((project, i) => (
          <Project key={i} project={project} />
        ))}
      </div>
      <Link className={styles.github} href="https://github.com/tpcstld">
        <img src={GithubLogo} alt="Visit my GitHub" />
      </Link>
    </PageWrapper>
  );
}
