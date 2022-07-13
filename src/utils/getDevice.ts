export default () => {
  const userAgent = navigator.userAgent || navigator.vendor;

  if (userAgent.match(/Windows Phone/i)) {
    return 'windows phone';
  }

  if (userAgent.match(/Android/i)) {
    return 'android';
  }

  if (
    userAgent.match(/iPhone/i)
    || userAgent.match(/iPad/i)
    || userAgent.match(/iPod/i)
    || userAgent.match(/Mac/i)
  ) {
    return 'ios';
  }

  return 'unknown';
};
