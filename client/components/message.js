import React, { Component } from "react";
import { TouchableOpacity, Button } from "react-native";
import { CardThree } from "react-native-card-ui"

export default class Message extends Component {
    openMessage = (Messagee) => {
        this.props.openMessage(Messagee)
    }
    render() {
        const { message } = this.props
        return (
         <TouchableOpacity
            onPress={() => this.openMessage(this.props)} >
            <CardThree
                title={message.FName + " " + message.LName}
                subTitle=""
                profile={{ uri: message.ProfilePicture }}
            />
        </TouchableOpacity>
        );
    }
}
