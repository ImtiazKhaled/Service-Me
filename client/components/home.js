import React, { Component } from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import PopularItems from './popularItems'
import FavoriteServicers from './favoriteServicers'


class Home extends Component {

  render() {
    return (
      <ScrollView style={{ paddingTop: 100 }}>
        <Text>Popular Items</Text>
        <PopularItems />
        <Text style={{ paddingTop: 20 }}>Previous Services</Text>
        <PopularItems />
        <Text style={{ paddingTop: 20 }}>Favorite Servicers</Text>
        <FavoriteServicers />
      </ScrollView>
    )
  }
}


export default Home