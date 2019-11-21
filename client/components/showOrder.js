import React, { Component } from "react"
import { Card } from "react-native-elements"
import { connect } from "react-redux"

class ShowOrder extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isVisible: false,
          servicers:[],
          OverlayVendor: {}
        }
    }    

    render() {
        const { order } = this.props
        return (
            <Card>
                <Text>
                    Order Type: {order.ServiceType}
                </Text>
                <Text>
                    Servicer: {order.ServicerName}
                </Text>
                <Text>
                    Customer: {order.CustomerFName + " " + order.CustomerLName}
                </Text>
                <Text>
                    Total Charge: {order.TotalCost}
                </Text>
                <Text>
                    Total Charge: {order.Status}
                </Text>
            </Card>
        )
    }
}

const mapStateToProps = state => {
    return {
        servicers: state.servicers
    }
}

export default connect(mapStateToProps)(ShowOrder)