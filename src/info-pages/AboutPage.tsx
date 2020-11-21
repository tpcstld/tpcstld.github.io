import {Helmet} from 'react-helmet';

import WebRoutes from '../common/WebRoutes';

import Header from './Header';
import PageWrapper from './PageWrapper';

import styles from './AboutPage.module.css';

export default function AboutPage() {
  return (
    <PageWrapper>
      <Helmet>
        <title>About - Jerry Jiang (tpcstld)</title>
      </Helmet>
      <Header currentRoute={WebRoutes.ABOUT} />
      <div className={styles.container}>
        <p>
          My name is <strong>Jerry Jiang</strong>. I'm 23 years old and I'm a
          Canadian living in California.
        </p>
        <p>
          On the internet, I go under the alias <strong>tpcstld</strong>. It's a
          pseudo-GUID that I invented to avoid username collisions.
        </p>
        <p>
          I've been progamming since I was 13, and I've been hanging around
          computers since I was 3. My favourite font is{' '}
          <a href="https://font.ubuntu.com">Ubuntu Monospace</a>!
        </p>
        <p>
          I enjoy playing video games, with a library of over 425 games on
          Steam. My most played game is{' '}
          <a href="https://na.op.gg/summoner/userName=tpcstld">
            League of Legends
          </a>
          , add me if you play too!
        </p>
        <p>
          I spend my spare time watching anime, taking midnight walks, and
          surfing Reddit and Youtube.
        </p>
        <p>
          You can contact me through{' '}
          <a href="mailto:hello@tpcstld.me">hello@tpcstld.me</a>.
        </p>
      </div>
    </PageWrapper>
  );
}
