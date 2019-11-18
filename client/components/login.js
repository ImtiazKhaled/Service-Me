import React from "react"
import { View } from "react-native"
import { SocialIcon } from "react-native-elements"
import { styles } from "../styles/styles"
import { GoogleSignCreds } from "../secrets"
import * as Google from "expo-google-app-auth"

export default class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {signedIn: false, name: "", photoUrl: ""}
    }

    googleSignIn = async () => {
        try{
          const { type, token, user } = await Google.logInAsync(GoogleSignCreds)
    
          if(type === "success")
          {
            this.setState({
              ...user,
              signedIn: true
            })
            console.log(this.state)
          }
          else
          {
            console.log("Sign-in Failed")
          }
        } catch(e) {
          console.log("error with login: ", e)
        }
      }

    render() {
        return (
          <View style={styles.container}>
            <SocialIcon
                title="Sign in with Google"
                button
                type="google"
                raised={true}
                onPress={this.googleSignIn}
                style={{width: 200, backgroundColor: "#dd4b39"}}/>
          </View>
        )
      }
}
