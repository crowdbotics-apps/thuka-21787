import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile153231Navigator from '../features/UserProfile153231/navigator';
import Maps153212Navigator from '../features/Maps153212/navigator';
import Settings153190Navigator from '../features/Settings153190/navigator';
import Settings153175Navigator from '../features/Settings153175/navigator';
import NotificationList153174Navigator from '../features/NotificationList153174/navigator';
import Maps153173Navigator from '../features/Maps153173/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile153231: { screen: UserProfile153231Navigator },
Maps153212: { screen: Maps153212Navigator },
Settings153190: { screen: Settings153190Navigator },
Settings153175: { screen: Settings153175Navigator },
NotificationList153174: { screen: NotificationList153174Navigator },
Maps153173: { screen: Maps153173Navigator },

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
