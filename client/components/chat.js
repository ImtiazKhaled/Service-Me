import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, KeyboardAvoidingView } from 'react-native'
import { Card, Input, Button } from 'react-native-elements'
import { Col, Grid } from 'react-native-easy-grid'
import {styles} from '../styles/styles'
import { url } from '../url'
import Icon from 'react-native-vector-icons/FontAwesome'

class Chat extends Component {
    constructor(props) {
        super(props)
        this.state = {
          chat:[]
        }
      }
      
    componentWillMount = () => {
        let Messagee = JSON.stringify(this.props.navigation.getParam('Messagee'))
        Messagee = Messagee.substring(1, Messagee.length - 1)
        let Messager = JSON.stringify(this.props.navigation.getParam('Messager'))
        Messager = Messager.substring(1, Messager.length - 1)
        fetch(url+'messages/'+Messagee+'/'+Messager)
        .then(response => response.json())
        .then(data => {
            this.setState({
                chat: data,
            })
        })
        .catch(err => alert(err))
    }

    _handleFocus(event, refName) {
        let node = React.findNodeHandle(this.refs[refName]);
        let extraHeight = 100;
        this.refs.keyboardAwareScrollView.scrollToFocusedInput(event, node, extraHeight);
    }
    render() {
        const { chat } = this.state
        return (
            <KeyboardAvoidingView
                behavior="padding"
            >
                  {
                        chat.length === 0 ? 
                        <Card title='Start Chatting!' />
                        :
                        chat.map((msg) => 
                            <Card key={msg.MessageId} title={msg.MessageText}>
                                <Text>
                                    {msg.Sender}
                                </Text>
                            </Card>
                        )
                    }
                    <View style={{padding: 50}} />
                    <Grid>
                        <Col size={79}>
                        <TextInput placeholder='enter message...'/>
                        </Col>
                        <Col size={17}>
                            <Button
                                buttonStyle = {styles.messageButton}
                                icon = {<Icon
                                    name='arrow-right'
                                    size={15}
                                    color='blue'
                                />}
                            />
                        </Col>
                    </Grid>
                </KeyboardAvoidingView>
        )
    }
}


export default Chat