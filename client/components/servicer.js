import React, { Component } from "react"
import { View, Text, ScrollView } from "react-native"
import { Avatar, Button } from "react-native-elements"
import { CardFive } from "react-native-card-ui"
import { url } from "../secrets"
import { Col, Grid } from "react-native-easy-grid"
import { styles, SH, SW } from "../styles/styles"
import Stars from "react-native-stars-rating"

export default class Sevicer extends Component {
  render() {
    const { vendor } = this.props
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
              <Button title="Message" />
            </Col>
            <Col size={40}>
              <Button title="Set Appointment" />
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
