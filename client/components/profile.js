import React, { Component } from "react"
import { ScrollView, View, Text } from "react-native"
import { Avatar, Button } from "react-native-elements"
import { connect } from "react-redux"
import { styles } from "../styles/styles"
import ShowOrder from "./showOrder"
import { url } from "../secrets"
import { Col, Grid } from "react-native-easy-grid"

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      orders: []
    }
  }

  componentDidUpdate = () => {
    fetch(url+"appointment/customer/"+this.props.user.Email)
    .then(response => response.json())
    .then(data => {
        if(data.res && data.res === "empty") {
            return
        } else {
            this.setState({
                orders: data,
            })
        }
    })
    .catch(err => alert(err))
  }

  render() {
    const { user } = this.props
    return (
      <ScrollView>
        {
          this.props.user.SignedIn ? 
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
              {user.Email}
            </Text>
            <Text>
              {user.phone}
            </Text>
            <Text>
              {user.Type}
            </Text>
            <Text>
              {user.serviceType}type
            </Text>
            <Text>
              {user.rate}
            </Text>
            <Button title="LogOut" onPress={()=>{this.props.logout()}} />
            <Text> Past Orders </Text>
              <Grid>
              {
                this.state.orders && this.state.orders.map( order =>
                  <Col size={50} key={order.OrderId}>
                    <ShowOrder order={order}/>  
                  </Col>
              )}
              </Grid>
          </View> :
          <View>
            <Text>
              Please login
            </Text>
          </View>
        }
        
        
      </ScrollView>
    )
  }
}


const mapStateToProps = (state) => {  
  return {
    user: state.user
  }
} 

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch({type:'LOG_OUT'})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)