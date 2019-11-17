import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import Messages from '../components/messages'
import Chat from '../components/chat'

const Navigator = createStackNavigator({
    Messages: { screen: Messages },
    Chat: { screen: Chat },
},
    Messages.navigationOptions = {
        header: null,
    },
    Chat.navigationOptions = {
        title: 'Messages',
    },
)

const MessagesNav = createAppContainer(Navigator)

export default MessagesNav