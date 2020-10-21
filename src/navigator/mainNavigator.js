import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings153190Navigator from '../features/Settings153190/navigator';
import Settings153175Navigator from '../features/Settings153175/navigator';
import NotificationList153174Navigator from '../features/NotificationList153174/navigator';
import Maps153173Navigator from '../features/Maps153173/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
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
