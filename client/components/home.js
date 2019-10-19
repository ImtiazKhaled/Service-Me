import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import PopularItems from './popularItems'
import FavoriteServicers from './favoriteServicers'

class Home extends Component {

  serviceSelected = type => {
    this.props.navigation.navigate('Service', type)
  }

  render() {
    return (
      <ScrollView>
        <View style={{ padding: 30 }} />
        <Text>Popular Items</Text>
        <PopularItems navigateToServicer={this.serviceSelected} />
        <Text style={{ paddingTop: 20 }}>Previous Services</Text>
        <PopularItems />
        <Text style={{ paddingTop: 20 }}>Favorite Servicers</Text>
        <FavoriteServicers />
        <View style={{ padding: 30 }} />
      </ScrollView>
    )
  }
}


export default Home