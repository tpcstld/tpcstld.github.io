import Link from '../common/Link';
import WebRoutes from '../common/WebRoutes';

import styles from './Header.module.css';

type RouteData = {
  name: string;
  url: WebRoutes;
};

const ROUTES: Array<RouteData> = [
  {
    name: 'Projects',
    url: WebRoutes.PROJECTS,
  },
  {
    name: 'Resume',
    url: WebRoutes.RESUME,
  },
  {
    name: 'About',
    url: WebRoutes.ABOUT,
  },
];

interface RouteEntryProps {
  currentRoute: WebRoutes;
  route: RouteData;
}

function RouteEntry({currentRoute, route}: RouteEntryProps) {
  if (currentRoute === route.url) {
    return <strong>{route.name}</strong>;
  }

  return (
    <Link className={styles.route} href={route.url}>
      {route.name}
    </Link>
  );
}

interface RouteBannerProps {
  currentRoute: WebRoutes;
}

function RouteBanner({currentRoute}: RouteBannerProps) {
  return (
    <div className={styles.routeBanner}>
      {ROUTES.map((route, index) => (
        <>
          {index > 0 ? <span>{' · '}</span> : null}
          <RouteEntry currentRoute={currentRoute} route={route} />
        </>
      ))}
    </div>
  );
}

interface HeaderProps {
  currentRoute: WebRoutes;
}

export default function Header({currentRoute}: HeaderProps) {
  return (
    <div>
      <div className={styles.title}>
        <h1 className={styles.name}>Jerry Jiang</h1>
        <strong>Discord; University of Waterloo</strong>
      </div>
      <RouteBanner currentRoute={currentRoute} />
    </div>
  );
}
