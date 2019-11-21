import { createAppContainer } from "react-navigation"
import { createStackNavigator } from "react-navigation-stack"
import Messages from "../components/messages"
import Chat from "../components/chat"
import Servicer from "../components/servicer"
import AppointmentForm from '../components/appointmentForm'

const Navigator = createStackNavigator({
    Messages: { screen: Messages },
    Chat: { screen: Chat },
    Servicer: { screen: Servicer },
    AppointmentForm: { screen: AppointmentForm }
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
    AppointmentForm.navigationOptions = {
        title: "Set Appointment"
    }
)

const MessagesNav = createAppContainer(Navigator)

export default MessagesNav