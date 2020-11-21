export type ProjectData = {
  name: string;
  url: string;
  description: string;
};

const ProjectList: Array<ProjectData> = [
  {
    name: '2048 for Android',
    url: '//play.google.com/store/apps/details?id=com.tpcstld.twozerogame',
    description: '1000000+ downloads, 4.4 stars, 0 ads.',
  },
  {
    name: 'YouTube Downloader',
    url: 'http://youtube.tpcstld.me',
    description: 'Not just youtube, if you know the secret password.',
  },
  {
    name: 'Streamer',
    url: 'http://stream.tpcstld.me',
    description: "Now you see me, now you don't!",
  },
  {
    name: 'Codenames',
    url: '//tpcstld.me/codenames',
    description: 'Go to /board for the spymaster.',
  },
  {
    name: 'Link Shortener',
    url: '//ls.tpcstld.me',
    description: 'Making long links, uh, still pretty long.',
  },
  {
    name: 'VIP without Flash',
    url: '//vip.tpcstld.me',
    description: 'Long live HTML5!',
  },
  {
    name: 'Jetris',
    url: 'https://github.com/tpcstld/Jetris',
    description: 'Tetris with an actual settings menu... and a J',
  },
  {
    name: 'FileShare',
    url: '//fileshare.tpcstld.me',
    description: 'Imgur for everything.',
  },
  {
    name: 'KoL Wiki Refresher',
    url: '//tpcstld.me/kol',
    description: 'Random page button was too small',
  },
  {
    name: 'Temporary Messages',
    url: '//text.tpcstld.me',
    description: "Now you see it, now you don't!",
  },
  {
    name: 'Champion.gg Redirecter',
    url: '//github.com/tpcstld/champredirect',
    description: 'Type less characters and more slang',
  },
];

export default ProjectList;
