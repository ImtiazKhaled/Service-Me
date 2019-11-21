import React, { Component } from "react"
import { View, Text, ScrollView } from "react-native"
import { Avatar, Button } from "react-native-elements"
import { Col, Grid } from "react-native-easy-grid"
import { styles, SH, SW } from "../styles/styles"
import { connect } from "react-redux"
import { withNavigation } from "react-navigation"
import Stars from "react-native-stars-rating"

class Servicer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      messagers:[],
      UserId: "",
    }
  }

  render() {
    const { vendor } = this.props
    const { user } = this.props
    return (
      <ScrollView>
        <View style={{ ...styles.center, paddingTop: 30 }} >
          <Avatar
            size="xlarge"
            rounded
            source={{ uri: vendor.ProfilePicture }}
          />
          <Text>
            {vendor.FName + " " + vendor.LName}
          </Text>
          <Text>
            {vendor.ServiceOffered}
          </Text>
          <Text>
            ${vendor.Rate}
          </Text>
          <Stars
            isActive={true}
            rateMax={5}
            isHalfStarEnabled={true}
            onStarPress={()=>{}}
            rate={vendor.Rating}
            size={30}
          />
          <Grid style={{ ...styles.center}}>
            <Col size={40}>
              {
                user.SignedIn ? 
                <Button 
                  title="Message"
                  onPress={()=>{
                    const ChatIds = {
                      Messagee: vendor.UserId,
                      Messager: user.UserId
                    }
                    this.props.navigation.navigate("Chat", ChatIds)
                    this.props.closeModal()  
                  }} 
                /> :
                <Button 
                  title="Message"
                  disabled   
                />
              }
            </Col>
            <Col size={40}>
              <Button 
                title="Set Appointment" 
                onPress={()=>{
                  const VendorId = {
                    VendorId: vendor.UserId,
                  }
                  this.props.navigation.navigate("AppointmentForm", VendorId)
                  this.props.closeModal()  
                }}/>
            </Col>
          </Grid>
        </View>
        <View style={{height: SH*0.08}} />
        <Button title="Close Modal" onPress={() => {
          this.props.closeModal()
        }} />
      </ScrollView>
    )
  }
}


mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default withNavigation(connect(mapStateToProps)(Servicer))
