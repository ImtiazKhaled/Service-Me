import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import PopularItems from './popularItems'

class Home extends Component {

  render() {
    const { categories } = this.props
    return (
      <View style={{paddingTop: 100}}>
        <Text>Popular Items</Text>
        <PopularItems />
        <Text style={{paddingTop: 20}}>Previous Services</Text>
        <PopularItems />
        <Text style={{paddingTop: 20}}>Favorite Servicers</Text>
        <PopularItems />
      </View>
    )
  }
}


export default Home