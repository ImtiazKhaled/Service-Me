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
  
  componentDidMount = () => {
    if(this.props.user.SignedIn) {   
      console.log(url+"messages/"+this.state.UserId) 
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
    // console.log('this is props', this.props)  
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
                    key={message.Messager} 
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