import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Profile from "../components/profile"
// import Chat from "../components/chat"

const Navigator = createStackNavigator({
    Profile: { screen: Profile },
    // Chat: { screen: Chat },
},
    Profile.navigationOptions = {
        header: null,
    },
    // Chat.navigationOptions = {
    //     title: "Profile",
    // },
)

const ProfileNav = createAppContainer(Navigator)

export default ProfileNav