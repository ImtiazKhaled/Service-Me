import React, { Component } from 'react'
import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native'
import { Overlay } from 'react-native-elements'
import PopularItems from './popularItems'
import FavoriteServicers from './favoriteServicers'
import HomeTopBar from './homeTopBar'
import { styles } from '../styles/styles'
import Servicer from './servicer'


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isVisible: false
    }
  }

  serviceSelected = type => {
    this.props.navigation.navigate('Service', type)
  }

  showModal = (item) => {
    this.setState({
      isVisible: true
    })
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
          <FavoriteServicers servicerSelected={(item, evt) => this.showModal(item, evt)} />
          <Overlay
            isVisible={this.state.isVisible}
            windowBackonBackdropPress={() => this.setState({ isVisible: false })}
            groundColor="rgba(255, 255, 255, .5)"
            overlayBackgroundColor="red"
            width="auto"
            height="auto"
          >
            <Servicer closeModal={() => {
              console.log('hi')
              this.setState({ isVisible: false })
            }} />
          </Overlay>
          <View style={{ padding: 30 }} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}


export default Home