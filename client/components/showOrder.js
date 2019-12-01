import React, { Component } from "react"
import { Text } from "react-native"
import { Card } from "react-native-elements"
import { useSelector, useDispatch } from "react-redux"
import { Col, Grid } from "react-native-easy-grid"
 
const ShowOrder = (props) => {
    
    const user = useSelector(state => state.user)
    const dispatch = useDispatch()
    
    const { order } = props
    
    return <Card>
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
            Order Status: {order.OrderStatus}
        </Text>
        <View>
            {
                order.OrderStatus === "Pending" && user.type === "Vendor" ?
                <Button 
                    onPress={() => dispatch({
                        type: 'ORDER_EDIT', 
                        OrderId: order.OrderId,
                        OrderStatus: 'Accepted'
                    })} 
                    title="Accept" 
                /> :
                order.OrderStatus === "Accepted" ?
                <Grid>
                    <Col>
                        <Button      
                            onPress={() => dispatch({
                                type: 'ORDER_EDIT', 
                                OrderId: order.OrderId,
                                OrderStatus: 'Canceled'
                            })} 
                            title="Cancel" 
                        /> 
                    </Col>
                    <Col>
                        <Button          
                            onPress={() => dispatch({
                                type: 'ORDER_EDIT', 
                                OrderId: order.OrderId,
                                OrderStatus: 'Completed'
                            })} 
                            title="Complete" 
                        /> 
                    </Col>
                </Grid> :
                <View />
            }
        </View>
    </Card>
}

export default ShowOrder