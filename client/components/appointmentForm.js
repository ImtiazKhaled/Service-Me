import React from "react"
import { View, ScrollView, Text } from "react-native"
import { Button, Input } from "react-native-elements"
import { styles, SH, SW } from "../styles/styles"
import { connect } from 'react-redux'
import { url } from "../secrets"
import Icon from "react-native-vector-icons/FontAwesome"
import { Col, Grid } from "react-native-easy-grid"
import DateTimePicker from "react-native-modal-datetime-picker"


class AppointmentForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
          vendor: {},
          user: props.user, 
          customerFName: "", 
          customerLName: "", 
          customerEmail: "",
          customerPhone: "",
          serviceDate: "",
          estimatedTime: "",
          totalCost: 0,
          dateTimePickerVisible: false
        }
    }

    componentDidMount = () => {
        let VendorId = JSON.stringify(this.props.navigation.getParam("VendorId"))
        VendorId = VendorId.substring(1, VendorId.length - 1)
        var dataGot={}
        fetch(url+"vendor/id/"+VendorId)
        .then(response => response.json())
        .then(data => {
            this.setState({
                vendor: {...data}
            })   
        })
        .catch(err => alert(err))
    }

    onSubmit = () => {
        const order = this.state.user.SignedIn ?
        {
            CustomerFName: this.state.user.FName,
            CustomerLName: this.state.user.LName,
            CustomerEmail: this.state.user.Email,
            CustomerPhone: this.state.user.Phone,
            VendorId: this.state.vendor.UserId,
            EstimatedTime: this.state.estimatedTime,
            TotalCost: this.state.totalCost,
            ServiceDate: this.state.serviceDate,
            ServiceType: this.state.vendor.ServiceOffered,
            ServicerName: this.state.vendor.FName + " " + this.state.vendor.LName
        } : {
            CustomerFName: this.state.customerFName,
            CustomerLName: this.state.customerLName,
            CustomerEmail: this.state.customerEmail,
            CustomerPhone: this.state.customerPhone,
            VendorId: this.state.vendor.UserId,
            EstimatedTime: this.state.estimatedTime,
            TotalCost: this.state.totalCost,
            ServiceDate: this.state.serviceDate,
            ServiceType: this.state.vendor.ServiceOffered,
            ServicerName: this.state.vendor.FName + " " + this.state.vendor.LName
        }

        console.log(order)
        fetch(url+'appointment', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(order)
        }).then(response => {
            this.props.navigation.goBack()
        })
        .catch(error => {
            console.log(error)
        })

    }

    showDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: true })
    }
    
    hideDateTimePicker = () => {
        this.setState({ isDateTimePickerVisible: false })
    }
    
    handleDatePicked = serviceDate => {
        this.setState({
            serviceDate
        })
        console.log("A date has been picked: ", serviceDate)
        this.hideDateTimePicker()
    }

    render() {
      return (
        <ScrollView>
        {
            this.state.user.SignedIn ? 
            <View>
                <Text>Name</Text>
                <Grid>
                    <Col>
                        <Input 
                            disabled={true}
                            value={this.state.user.FName}/>
                    </Col>
                    <Col>
                        <Input 
                            disabled={true}
                            value={this.state.user.LName}/>
                    </Col>
                </Grid>
                <Text>Email</Text>
                <Input 
                    disabled={true}
                    value={this.state.user.Email}/>
                <Text>Phone</Text>
                <Input 
                    disabled={true}
                    value={this.state.user.Phone}/>
            </View>  :
            <View>
                <Text>Name</Text>
                <Grid>
                    <Col>
                        <Input 
                            onChangeText={(customerFName) => this.setState({customerFName})}
                            value={this.state.customerFName}
                            placeholder="First Name"/>
                    </Col>
                    <Col>
                        <Input 
                            onChangeText={(customerLName) => this.setState({customerLName})}
                            value={this.state.customerLName}
                            placeholder="Last Name"/>
                    </Col>
                </Grid>
                <Text>Email</Text>
                <Input 
                    onChangeText={(customerEmail) => this.setState({customerEmail})}
                    value={this.state.customerEmail}
                    placeholder="Email Address"/>
                <Text>Phone</Text>
                <Input 
                    onChangeText={(customerPhone) => this.setState({customerPhone})}
                    value={this.state.customerPhone}
                    placeholder="Phone Number"/>
            </View> 
        }
        <Text>Estimated Time of Work</Text>
        <Input 
            onChangeText={(estimatedTime) => this.setState({
                estimatedTime,
                totalCost: this.state.vendor.Rate * parseFloat(estimatedTime)
            })}
            value={this.state.estimatedTime}
            placeholder="Estimated Time"/>
        <Button title="Service Date" onPress={this.showDateTimePicker} />
        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
        <Text> Total Cost: {this.state.totalCost} </Text>
        <Button title="Request Order" onPress={()=>this.onSubmit()} />
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


export default connect(mapStateToProps,mapDispatchToProps)(AppointmentForm)