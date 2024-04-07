import blogsRoutes from "./blogs-routes";

const publicRoutes = {
  '404': '404',
  BLOGS: 'blogs',
  CUSTOMISED_VIDEO_PLAYER: 'customised-video-player',
  DISNEY_PLUS_HOTSTAR: 'disney-plus-hotstar',
  EXPERIMENT: 'experiment',
  HOME: '/',
  RANDOM_TESTING: 'random-testing',
  FORM_HANDLING: 'form-handling',
  LOGIN: 'login',
  OTP_LOGIN: 'otp-login',
  OTP_VERIFICATION_PAGE: 'otp-verification',
  SIGNUP: 'signup',
  UI_IMPLEMENTATION: 'ui-implementations',
  UNDERSTANDING_REACT: 'understanding-react',
};

const protectedRoutes = {
  DASHBOARD: 'dashboard',
};

const routes = {
  ...publicRoutes,
  ...protectedRoutes,
};

export {
  blogsRoutes,
  routes,
};
