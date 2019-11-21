import React from "react"
import { View, ScrollView, Text, Picker } from "react-native"
import { SocialIcon, Button, Input } from "react-native-elements"
import { styles, SH, SW } from "../styles/styles"
import { GoogleSignCreds } from "../secrets"
import { connect } from 'react-redux'
import { url } from "../secrets"
import * as Google from "expo-google-app-auth"
import Icon from "react-native-vector-icons/FontAwesome"

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          signedIn: false, 
          name: "", 
          photoUrl: "",
          type: "Customer",
          phone: "",
          rate: "",
          serviceType: "",
        }
    }
    
    
    googleSignIn = async () => {
      try{
        const { type, token, user } = await Google.logInAsync(GoogleSignCreds)
          if(type === "success") {
            this.setState({
              ...user,
              signedIn: true
          })
          fetch(url+"customer/"+this.state.email)
          .then(response => response.json())
          .then(data => {
            if(data.res && data.res === "empty"){
              this.refs._scrollView.scrollTo({ y:200, animated: true })
              return
            } else {
              check = data 
              const customer = {...data, SignedIn: true}
              this.props.onLoginSucess(customer) 
              this.props.closeModal()    
            }
          })
          .catch(error => {
            console.log(error)
          })
          } else {
                console.log("Sign-in Failed")
              }
          } catch(e) {
              console.log("error with login: ", e)
        }
    }

    onSubmit = () => {
      const customer = {
        FName: this.state.givenName,
        LName: this.state.familyName,
        Email: this.state.email,
        Phone: this.state.phone,
        ProfilePicture: this.state.photoUrl,
        Type: this.state.type,
        SignedIn: true
      }
      const vendor = {
        FName: this.state.givenName,
        LName: this.state.familyName,
        Email: this.state.email,
        Phone: this.state.phone,
        ProfilePicture: this.state.photoUrl,
        Rating: 5.00,
        Rate: this.state.rate,
        ServiceOffered: this.state.serviceType,
        Type: this.state.type,
        SignedIn: true
      }

      this.state.type === "Customer" ? 
      fetch(url+'customer', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
      },
      body: JSON.stringify(customer)
      }).then(response => {
        fetch(url+"customer/"+this.state.email)
        .then(response => response.json())
        .then(data => {
          this.props.onLoginSucess({...data, SignedIn: true}) 
          this.props.closeModal()  
        })
        .catch(error => {
          console.log(error)
        })  
        })
      .catch(error => {
          console.log(error)
      })
      :
      fetch(url+'vendor', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
      },
      body: JSON.stringify(vendor)
      }).then(response => {
        fetch(url+"vendor/"+this.state.email)
        .then(response => response.json())
        .then(data => {
          this.props.onLoginSucess({...data, SignedIn: true}) 
          this.props.closeModal()  
        })
        .catch(error => {
          console.log(error)
        })
      })
      .catch(error => {
          console.log(error)
      })
    }

    render() {
      return (
        this.props.user.SignedIn ?
        <View>
          <Icon.Button
              name="times" 
              backgroundColor="white"
              color="black" 
              onPress={()=>this.props.closeModal()}
            />
          <Text> 
            You are already loggin in :)
          </Text>
        </View>
        :
        <ScrollView ref='_scrollView'>
            <Icon.Button
              name="times" 
              backgroundColor="white"
              color="black" 
              onPress={()=>this.props.closeModal()}
            />
            <View style={{...styles.container, height: SH*0.45, width: SW*0.65}}>
              <SocialIcon
                  title="Sign in with Google"
                  button
                  type="google"
                  raised={true}
                  onPress={this.googleSignIn}
                  style={{width: 200, backgroundColor: "#dd4b39"}}/>
            </View>
            <View>
              <View style={{height: SH*0.40, width: SW*0.65}}>
                  <Text> Are you a Customer or a Vendor? </Text> 
                  <Picker
                    selectedValue={this.state.type}
                    style={{width: SW*0.40}}
                    onValueChange={(itemValue, itemIndex) =>
                        this.setState({type: itemValue})
                    }>
                    <Picker.Item label="Customer" value="Customer" />
                    <Picker.Item label="Vendor" value="Vendor" />
                </Picker>
                {
                    this.state.type === "Customer" ?
                    <View>
                        <Text> Phone Number </Text>
                        <Input 
                          onChangeText={(phone) => this.setState({phone})}
                          value={this.state.phone}
                          placeholder="Phone Number"
                        />
                    </View> 
                    :
                    <View>
                        <Text> Service Offered </Text>
                        <Picker
                            selectedValue={this.state.serviceType}
                            style={{width: SW*0.40}}
                            onValueChange={(itemValue, itemIndex) =>
                                this.setState({serviceType: itemValue})
                            }>
                          <Picker.Item label="Appliances" value="Appliances" />
                          <Picker.Item label="Electrical" value="Electrical" />
                          <Picker.Item label="Plumbing" value="Plumbing" />
                          <Picker.Item label="Home Tutoring" value="Home Tutoring" />
                          <Picker.Item label="Packaging Moving" value="Packaging Moving" />
                          <Picker.Item label="Painting" value="Painting" />
                          <Picker.Item label="Cleaning" value="Cleaning" />
                          <Picker.Item label="Computer Repair" value="Computer Repair" />
                          <Picker.Item label="Home Repair" value="Home Repair" />
                          <Picker.Item label="Pest Control" value="Pest Control" />
                        </Picker>
                        <Text> Phone Number </Text>
                        <Input 
                          onChangeText={(phone) => this.setState({phone})}
                          value={this.state.phone}
                          placeholder="Phone Number"
                        />
                        <Text> Hourly Rate </Text>
                        <Input
                          onChangeText={(rate) => this.setState({rate})}
                          value={this.state.rate}
                          placeholder="Rate"
                        />
                        <Text> **ServiceMe will keep 20% of your earnings :) </Text>
                    </View>
                }
                </View>
                <Button title="Submit" onPress={()=>this.onSubmit()}/>
            </View>
          </ScrollView>
        )
      }
}

mapStateToProps = state => {
  return {
    user: state.user
  }
}

mapDispatchToProps = dispatch => {
  return{
    onLoginSucess: (user) => dispatch({
      type: 'LOGIN_SUCESS',
      user
    })
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(Login)
