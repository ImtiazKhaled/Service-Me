import React, { Component } from 'react'
import { ScrollView, View, Text } from 'react-native'
import { Avatar, Rating, AirbnbRating } from 'react-native-elements'
import { styles } from '../styles/styles'

export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render() {
    return (
      <ScrollView>
        <View
          style={{ ...styles.center, paddingTop: 10 }}
        >
          <Avatar
            size="large"
            rounded
            source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg' }}
          />
          <Text>
            Lady Lexy
          </Text>
          <Rating style={{ paddingTop: 10 }} startingValue={3} />
          <Text> Payment Methods </Text>
          <Text> Service History </Text>
          <Text> Logout </Text>
        </View>
      </ScrollView>
    )
  }
}
