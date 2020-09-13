import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Tutorial100933Navigator from '../features/Tutorial100933/navigator';
import NotificationList100905Navigator from '../features/NotificationList100905/navigator';
import Settings100904Navigator from '../features/Settings100904/navigator';
import Settings100896Navigator from '../features/Settings100896/navigator';
import UserProfile100894Navigator from '../features/UserProfile100894/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Tutorial100933: { screen: Tutorial100933Navigator },
NotificationList100905: { screen: NotificationList100905Navigator },
Settings100904: { screen: Settings100904Navigator },
Settings100896: { screen: Settings100896Navigator },
UserProfile100894: { screen: UserProfile100894Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
