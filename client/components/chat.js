import React, { Component } from "react"
import { ScrollView, KeyboardAvoidingView } from "react-native"
import { Card, Input, Button } from "react-native-elements"
import { Col, Grid } from "react-native-easy-grid"
import { styles } from "../styles/styles"
import { url } from "../secrets"
import { CardThree } from "react-native-card-ui"
import { connect } from "react-redux"
import Icon from "react-native-vector-icons/FontAwesome"

class Chat extends Component {
    constructor(props) {
        super(props)
        let Messagee = JSON.stringify(this.props.navigation.getParam("Messagee"))
        Messagee = Messagee.substring(1, Messagee.length - 1)
        let Messager = JSON.stringify(this.props.navigation.getParam("Messager"))
        Messager = Messager.substring(1, Messager.length - 1)
        this.state = {
            chat:[],
            message: '',
            messagee: Messagee,
            messager: Messager,
        }
    }
    
    componentWillMount = () => {
        if(this.props.user.SignedIn) {
            fetch(url+"messages/"+this.state.messagee+"/"+this.state.messager)
            .then(response => response.json())
            .then(data => {
                if(data.res && data.res === "empty") {
                    return
                } else {
                    this.setState({
                        chat: data,
                    })
                }
            })
            .catch(err => alert(err))
        } else {
            return
        }
    }

    sendMessage = () => {
        const messageToSend = {
            Sender: this.state.messager,
            Receiver: this.state.messagee,
            MessageText: this.state.message,
        }

        if(this.state.chat.length == 0)    {
            const messageStart = {
                Sender: this.state.messager,
                Receiver: this.state.messagee,        
            }

            fetch(url+"messages/add/"+this.state.messagee+"/"+this.state.messager)
            .then(response => {
                    fetch(url+"messages/"+this.state.messagee+"/"+this.state.messager)
                    .then(response => response.json(messageStart))
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
                <ScrollView
                    ref='_scrollView'
                    onContentSizeChange={
                        (contentHeight) => {
                            this.refs._scrollView.scrollTo({y: contentHeight, animated: true});
                        }}    
                >
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

mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Chat)