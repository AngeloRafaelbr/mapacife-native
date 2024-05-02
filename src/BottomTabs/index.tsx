import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Login from "../Login";
import Principal from "./Principal";
import Eventos from "./Eventos";
import Explorar from "./Explorar";
import Perfil from "./Perfil";
import { Icon } from "native-base";


const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarStyle: {
        backgroundColor:'#002851'
    },
    tabBarActiveTintColor:'#339cFF',
    tabBarInactiveTintColor:'#FFF'

}



const tabs = [
    {
        name: 'Principal',
        component: Principal,
        Icon: 'home'
    },
    {
        name: 'Eventos',
        component: Eventos,
        Icon: 'calendar'
    },
    {
        name: 'Explorar',
        component: Explorar,
        Icon: 'map'
    },
    {
        name: 'Perfil',
        component: Perfil,
        Icon: 'human',
    },
]

export default function Tabs({navigation, route}){
    //  const {valorEmail} = route.params
    // const params = navigation.getParam({valorEmail}, {});
    
    return(
        <Tab.Navigator screenOptions={screenOptions}>
            {tabs.map(tab =>(
                <Tab.Screen 
                key={tab.name}
                name={tab.name}
                component={tab.component} 
                options={{headerShown:false, 
                          tabBarIcon: ({color, size}) => 
                        (<MaterialCommunityIcons name={tab.Icon} color={color} size={size}/>) 
                    }}
                    />         
            )) 
        }
            
        </Tab.Navigator>
    )
}