import getDevice from '@/utils/getDevice';

export default () => {
  const device = getDevice();
  const url = device === 'ios'
    ? process.env.VUE_APP_IOS_APP_URL
    : process.env.VUE_APP_ANDROID_APP_URL;
  window.open(url, '', 'noopener=yes,noreferrer=yes');
};
