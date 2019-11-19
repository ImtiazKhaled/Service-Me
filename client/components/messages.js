import React, { Component } from "react"
import { View, SafeAreaView } from "react-native"
import { connect } from "react-redux"
import { styles } from "../styles/styles"
import { url } from "../secrets" 
import Message from "./message"

class Messages extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messagers:[],
      UserId: "",
    }
  }
  
  componentWillMount = () => {
    this.props.type === "Customer" ?
    fetch(url+"messages/customer/"+this.props.Email)
    .then(response => response.json())
    .then(data => {
      this.setState({
        UserId: data[0],
      })
    })
    .catch(err => alert(err)) :
    fetch(url+"messages/vendor/"+this.props.Email)
    .then(response => response.json())
    .then(data => {
      this.setState({
        UserId: data[0],
      })
    })
    .catch(err => alert(err))

    
    fetch(url+"messages/"+this.props.UserId)
    .then(response => response.json())
    .then(data => {
      this.setState({
        messagers: data,
      })
    })
    .catch(err => alert(err))
  }

  openMessage = (Messagee) => {
    const ChatIds = {
      Messagee: Messagee.message.Messagee, Messager: Messagee.message.Messager
    }
    this.props.navigation.navigate("Chat", ChatIds)
  }

  render() {
    const { messagers } = this.state
    return (
      <SafeAreaView>
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
        </View>
      </SafeAreaView>
    )
  }
}


const mapStateToProps = (state) => {
  return {
      UserId: state.user.UserId
  }
}

export default connect(mapStateToProps)(Messages)