import React, { Component } from "react"
import { View, SafeAreaView, Text } from "react-native"
import { connect } from "react-redux"
import { styles } from "../styles/styles"
import { url } from "../secrets" 
import Message from "./message"

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messagers:[],
      ...props.user
    }
  }
  
  componentDidMount = () => {
    if(this.props.user.SignedIn) {
      this.props.user.type === "Customer" ?
      fetch(url+"messages/customer/"+this.props.user.Email)
      .then(response => response.json())
      .then(data => {
        this.setState({
          UserId: data[0],
        })
      })
      .catch(err => alert(err)) :
      fetch(url+"messages/vendor/"+this.props.user.Email)
      .then(response => response.json())
      .then(data => {
        this.setState({
          UserId: data[0],
        })
      })
      .catch(err => alert(err))    
      fetch(url+"messages/"+this.state.UserId)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        this.setState({
          messagers: data,
        })
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
        <View style={styles.topPad}>
          {
            
            messagers.map(
                (message) => {
                  return <Message 
                  key={message.UserId} 
                  message={message} 
                  openMessage={this.openMessage}/>
                }
            )
          }
        </View> :
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