import ReactGA from 'react-ga4';

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
let initialized = false;
let lastTrackedPage = null;
let campaignPageViewTracked = false;

const getCurrentPage = () =>
  `${window.location.pathname}${window.location.search}${window.location.hash}`;

export const initializeAnalytics = () => {
  if (!measurementId || initialized) return;

  ReactGA.initialize(measurementId);
  initialized = true;
  trackPageView();
};

export const trackPageView = (page = getCurrentPage()) => {
  if (!initialized || lastTrackedPage === page) return;

  ReactGA.send({
    hitType: 'pageview',
    page,
    title: document.title,
  });
  lastTrackedPage = page;
};

export const trackCampaignPageView = () => {
  if (!initialized || campaignPageViewTracked) return;

  ReactGA.event('campaign_page_view');
  campaignPageViewTracked = true;
};

export const trackEvent = (eventName, parameters = {}) => {
  if (!initialized) return;

  ReactGA.event(eventName, parameters);
};
