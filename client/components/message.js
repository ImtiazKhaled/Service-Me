import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { CardThree } from 'react-native-card-ui'

const messages = [
    { "id": "5daa8068fc13ae1596000000", "name": "Laurianne Igounet", "service": "plumber", "rating": 1.17, "profilePicture": "http://dummyimage.com/203x138.png/dddddd/000000" },
    { "id": "5daa80a0fc13ae1f58000064", "name": "Kristina Bolus", "service": "ride", "rating": 3.9, "profilePicture": "http://dummyimage.com/230x174.bmp/cc0000/ffffff" },
    { "id": "5daa80f7fc13ae1596000005", "name": "Juliann Cooper", "service": "car-mechanic", "rating": 1.47, "profilePicture": "http://dummyimage.com/176x226.png/5fa2dd/ffffff" },
]


export default class Message extends Component {
    render() {
        return (
            <View>
                {
                    messages.map(
                        (message) => {
                            return <CardThree
                                key={message.id}
                                title={message.name}
                                subTitle={message.service}
                                profile={{ uri: message.profilePicture }}
                            />
                        }
                    )
                }
            </View>
        );
    }
}
