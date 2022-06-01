/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
global.baseUrl = 'https://pingtrack.azurewebsites.net/public/api/all-existing-vendor-details/OP0464'
global.params = 'page=1';

AppRegistry.registerComponent(appName, () => App);
