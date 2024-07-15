import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import { PAGES } from './utils/pages-labels';
import Home from './pages/PageHome';
import Login from './pages/PageLogin';
import Subscription from './pages/PageSubscription';
import Dashboard from './pages/PageDashboard';
const Stack = createStackNavigator();


export default function MyStack() {
    return (
            
    <NavigationContainer>
        <Stack.Navigator initialRouteName={PAGES.HOME}>
            <Stack.Screen  name={PAGES.HOME} component={Home} />
            <Stack.Screen name={PAGES.LOGIN} component={Login} />
            <Stack.Screen name={PAGES.SUBSCRIPTION} component={Subscription} />
            <Stack.Screen name={PAGES.DASHBOARD} component={Dashboard} />
      </Stack.Navigator>
      </NavigationContainer>
    )
}