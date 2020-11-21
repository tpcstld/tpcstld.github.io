import {useLayoutEffect} from 'react';

const PLAY_STORE_LINK =
  '//play.google.com/store/apps/details?id=com.tpcstld.twozerogame';

export default function Home() {
  useLayoutEffect(() => {
    location.replace(PLAY_STORE_LINK);
  }, []);

  return <a href={PLAY_STORE_LINK}>Download on Google Play</a>;
}
