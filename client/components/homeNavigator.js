import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Home from './home'
import ServicerCategory from './servicerCategory'

const Navigator = createStackNavigator({
    Home: { screen: Home },
    Service: { screen: ServicerCategory },
},
    Home.navigationOptions = {
        header: null,

    },
)

const HomeNav = createAppContainer(Navigator)

export default HomeNav