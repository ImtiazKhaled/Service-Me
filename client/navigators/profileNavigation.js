import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Profile from "../components/profile"

const Navigator = createStackNavigator({
    Profile: { screen: Profile },
},
    Profile.navigationOptions = {
        header: null,
    },
)

const ProfileNav = createAppContainer(Navigator)

export default ProfileNav