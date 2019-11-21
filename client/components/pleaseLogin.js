import React, { Component } from "react"
import { ScrollView, View, Text } from "react-native"
import { Button } from "react-native-elements"
import { styles, SH, SW } from "../styles/styles"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      orders: []
    }
  }

  render() {
    return (
        <View style={styles.container}>
            <Text style={{fontSize: 40, paddingTop: SH*0.30}}>
                Please
            </Text>
            <Button containerStyle={{width: SW * 0.50}} title="Login" />
            <Text style={{fontSize: 40}}>
                to continue
            </Text>
        </View>
    )
  }
}

export default Profile