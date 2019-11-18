import React, { Component } from "react"
import { ScrollView, View, Text } from "react-native"
import { Avatar, Button } from "react-native-elements"
import { connect } from "react-redux"
import { styles } from "../styles/styles"
import { url } from "../url"
import { Col, Grid } from "react-native-easy-grid"


class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {}
    }
  }

  componentWillMount = () => {
    fetch(url+"vendor/"+this.props.UserId)
      .then(response => response.json())
      .then(data => {
        this.setState({
          user: data
        })
      })
     .catch(err => alert(err))
  }

  render() {
    const { user } = this.state
    // console.log(this.props)
    return (
      <ScrollView>
        <View
          style={{ ...styles.center, paddingTop: 30 }}
        >
          <Avatar
            size="xlarge"
            rounded
            source={{ uri: user.ProfilePicture }}
          />
          <Text>
            {user.FName + " " + user.LName}
          </Text>
          <Text>
            {user.ServiceOffered}
          </Text>
          <Grid style={{ ...styles.center}}>
            <Col size={40}>
              <Button title="Message" />
            </Col>
            <Col size={40}>
              <Button title="Set Appointment" />
            </Col>
          </Grid>
        </View>
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {  
  return {
    UserId: state.user.UserId
  }
} 

export default connect(mapStateToProps)(Profile)