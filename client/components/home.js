import React, { Component } from 'react'
import { View, Text, ScrollView, Image, SafeAreaView } from 'react-native'
import { Overlay } from 'react-native-elements'
import { styles } from '../styles/styles'
import { connect } from 'react-redux'
import { url } from '../url'
import PopularItems from './popularItems'
import FavoriteServicers from './favoriteServicers'
import HomeTopBar from './homeTopBar'
import Servicer from './servicer'



class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      servicers:[],
      isVisible: false
    }
  }

  componentWillMount = () => {
    fetch(url+'vendors')
    .then(response => response.json())
    .then(data => {
      this.setState({
        servicers: data,
      })
    })
    .catch(err => alert(err))
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
          <Text>Catergories</Text>
          <PopularItems navigateToServicer={this.serviceSelected} />
          <Text style={{ paddingTop: 20 }}>Servicers</Text>
          <FavoriteServicers 
            servicers={this.state.servicers} 
            servicerSelected={(item, evt) => this.showModal(item, evt)}/>
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

mapStateToProps = state => {
  return {
    servicers: state.servicers
  }
}

mapDispatchToProps = dispatch => {
  return {
    getVendors: () => dispatch({type: 'GET_VENDORS'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)