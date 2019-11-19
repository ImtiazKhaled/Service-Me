import React, { Component } from "react"
import { ScrollView, View, Text, KeyboardAvoidingView, ListView } from "react-native"
import { Card, Input, Button } from "react-native-elements"
import { Col, Grid } from "react-native-easy-grid"
import { styles, SH } from "../styles/styles"
import { url } from "../secrets"
import { CardThree } from "react-native-card-ui"
import Icon from "react-native-vector-icons/FontAwesome"

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
          chat:[],
          message: '',
          messagee: '',
          messager: '',
        }
    }

    componentWillMount = () => {
        let Messagee = JSON.stringify(this.props.navigation.getParam("Messagee"))
        Messagee = Messagee.substring(1, Messagee.length - 1)
        let Messager = JSON.stringify(this.props.navigation.getParam("Messager"))
        Messager = Messager.substring(1, Messager.length - 1)
        this.setState({
            messagee: Messagee,
            messager: Messager
        })        
        fetch(url+"messages/"+Messagee+"/"+Messager)
        .then(response => response.json())
        .then(data => {
            this.setState({
                chat: data,
            })
        })
        .catch(err => alert(err))
    }

    sendMessage = () => {
        const messageToSend = {
            Sender: this.state.messager,
            Receiver: this.state.messagee,
            MessageText: this.state.message,
        }

        console.log(messageToSend)

        fetch(url+'messages', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(messageToSend)
            }).then(response => {
                fetch(url+"messages/"+this.state.messagee+"/"+this.state.messager)
                .then(response => response.json())
                .then(data => {
                    this.setState({
                        chat: data,
                        message: ''
                    })
                })
                .catch(err => alert(err))
            })
            .catch(error => {
                console.log(error)
        })
    }

    render() {
        const { chat } = this.state
        const Messagee = JSON.stringify(this.props.navigation.getParam("Messagee"))
        return (
            <KeyboardAvoidingView style={{flex:1}} behavior="padding">
                <Button buttonStyle={styles.messageTitle} title={Messagee} />
                <ScrollView>
                {
                    chat.length === 0 ? 
                    <Card title="Start Chatting!" />
                    :
                    chat.map((msg) => 
                    <CardThree
                        key={msg.MessageId}
                        title={msg.MessageText}
                        subTitle={msg.Sender}
                        profile={{uri: null}}
                        icon={null}
                        iconColor={null}
                    />
                    )
                }
                <Grid>
                    <Col size={90}>
                        <Input 
                            onChangeText={(message) => this.setState({message})}
                            value={this.state.message}
                            placeholder="enter message..."
                        />
                    </Col>
                    <Col size={10}>
                        <Button
                            onPress = {this.sendMessage}
                            buttonStyle = {styles.messageButton}
                            icon = {<Icon
                                name="arrow-right"
                                size={30}
                                color="blue"
                            />}
                        />   
                    </Col>
                </Grid>
                </ScrollView>
          </KeyboardAvoidingView>
            
        )
    }
}


export default Chat