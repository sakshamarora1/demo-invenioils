import {
  RightMenuItem,
  RightMenuItemMobile,
} from './overridden/components/Menu';
import { LoginDocs } from './overridden/authentication/Login';
import { FeaturesRoute } from './overridden/routes/FrontsiteUrls';

export const overriddenCmps = {
  'SectionsWrapper.servicesInstallationSections': () => null,
  'ILSMenu.RightMenuItems': RightMenuItem,
  'ILSMenu.RightMenuItemsMobile': RightMenuItemMobile,
  'Login.layout.extras': LoginDocs,
  'FrontSite.CustomRoute': FeaturesRoute,
};
