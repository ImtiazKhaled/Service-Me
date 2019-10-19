import React, { Component } from 'react'
import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native'
import PopularItems from './popularItems'
import FavoriteServicers from './favoriteServicers'
import HomeTopBar from './homeTopBar'
import { styles } from '../styles/styles'

class Home extends Component {

  serviceSelected = type => {
    this.props.navigation.navigate('Service', type)
  }

  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <View style={styles.topPad} />
          <HomeTopBar />
          <Text>Popular Items</Text>
          <PopularItems navigateToServicer={this.serviceSelected} />
          <Text style={{ paddingTop: 20 }}>Previous Services</Text>
          <PopularItems navigateToServicer={this.serviceSelected} />
          <Text style={{ paddingTop: 20 }}>Favorite Servicers</Text>
          <FavoriteServicers />
          <View style={{ padding: 30 }} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}


export default Home