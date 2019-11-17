import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from '../components/home'
import ServicerCategory from '../components/servicerCategory'

const Navigator = createStackNavigator({
    Home: { screen: Home },
    Service: { screen: ServicerCategory },
},
    Home.navigationOptions = {
        header: null,
    },
    ServicerCategory.navigationOptions = {
        title: 'Servicers',
    },
)

const HomeNav = createAppContainer(Navigator)

export default HomeNav