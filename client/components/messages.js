import React, { Component } from "react"
import { View, SafeAreaView, Text } from "react-native"
import { connect } from "react-redux"
import { styles } from "../styles/styles"
import { url } from "../secrets" 
import Message from "./message"
import { ScrollView } from "react-native-gesture-handler"

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messagers:[],
      ...props.user
    }
  }
  
  componentDidUpdate = () => {
    if(this.props.user.SignedIn) {
      fetch(url+"messages/"+this.props.user.UserId)
      .then(response => response.json())
      .then(data => {
        if(data.res && data.res === "empty") {
          return
        } else{
          this.setState({
            messagers: data,
          })
        }
      })
      .catch(err => alert(err))   
    } else {
      return
    }
  }

  openMessage = (Messagee) => {
    const ChatIds = {
      Messagee: Messagee.message.Messagee, 
      Messager: Messagee.message.Messager
    }
    this.props.navigation.navigate("Chat", ChatIds)
  }

  render() {
    const { messagers } = this.state
    return (
      <SafeAreaView>
        {
        this.props.user.SignedIn ?
        <ScrollView>
            <View style={styles.topPad}>
              {
                messagers.map(
                  (message) => {
                    return <Message 
                    key={message.UserId} 
                    message={message} 
                    openMessage={this.openMessage}/>
                })
              }
            </View>
        </ScrollView> 
        :
        <View>
          <Text>
              Please login
            </Text>
        </View>      
      }
      </SafeAreaView>
    )
  }
}


const mapStateToProps = (state) => {  
  return {
      user: state.user
  }
}

export default connect(mapStateToProps)(Messages)