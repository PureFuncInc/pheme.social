import State from './interface';

const state: State = {
  navigate: {
    routerList: [
      { label: 'About', path: '#about', internal: true },
      { label: 'Team', path: '#team', internal: true },
      { label: 'Roadmap', path: '#roadmap', internal: true },
      { label: 'Token', path: 'https://docs.pheme.social/dai-bi-jing-ji/pheme-dai-bi' },
      { label: 'How to Play', path: 'https://docs.pheme.social/ru-men-zhi-nan/kai-shi-you-hu' },
      { label: 'Marketplace', path: 'https://docs.pheme.social/nft-shi-ji/shen-me-shi-shi-ji' },
      { label: 'Paper', path: 'https://docs.pheme.social' },
    ],
    openNavPage: false,
  },
};

export default () => state;
