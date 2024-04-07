import {
  DisneyPlusHotstar,
  FormHandling,
  Four0Four,
  HomePage,
  LoginPage,
  OtpLoginPage,
  OtpVerificationPage,
  SignupPage,
  UIImplementationsPage,
  UnderstandingReact,
} from '../pages';
import {
  CustomizedVideoPlayer,
  Experiment,
  Random,
} from '../components';
import {
  blogsRoutes,
  routes,
} from './routes';

export const publicRoutes = [
  {
    path: routes.HOME,
    element: <HomePage />,
  },
  {
    path: routes.SIGNUP,
    element: <SignupPage />,
  },
  {
    path: routes.LOGIN,
    element: <LoginPage />,
  },
  {
    path: routes.OTP_LOGIN,
    element: <OtpLoginPage />,
  },
  {
    path: routes.OTP_VERIFICATION_PAGE,
    element: <OtpVerificationPage />,
  },
  {
    path: routes.DISNEY_PLUS_HOTSTAR,
    element: <DisneyPlusHotstar />,
  },
  {
    path: routes.CUSTOMISED_VIDEO_PLAYER,
    element: <CustomizedVideoPlayer />,
  },
  {
    path: routes.BLOGS,
    children: blogsRoutes,
  },
  {
    path: routes.FORM_HANDLING,
    element: <FormHandling />,
  },
  {
    path: routes.UI_IMPLEMENTATION,
    element: <UIImplementationsPage />,
  },
  {
    path: routes.EXPERIMENT,
    element: <Experiment />,
  },
  {
    path: routes.RANDOM_TESTING,
    element: <Random />,
  },
  {
    path: routes.UNDERSTANDING_REACT,
    element: <UnderstandingReact />,
  },
  {
    path: '*',
    element: <Four0Four />,
  },
];
