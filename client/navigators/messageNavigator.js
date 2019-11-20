import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Messages from "../components/messages"
import Chat from "../components/chat"
import Servicer from "../components/servicer"

const Navigator = createStackNavigator({
    Messages: { screen: Messages },
    Chat: { screen: Chat },
    Servicer: { screen: Servicer }
},
    Messages.navigationOptions = {
        header: null,
    },
    Chat.navigationOptions = {
        header: null,
    },
    Servicer.navigationOptions = {
        header: null,
    },
)

const MessagesNav = createAppContainer(Navigator)

export default MessagesNav