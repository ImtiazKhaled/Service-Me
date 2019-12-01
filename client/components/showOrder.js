import React from "react"
import { View, Text } from "react-native"
import { Card, Button } from "react-native-elements"
import { Col, Grid } from "react-native-easy-grid"
import { useDispatch, useSelector } from "react-redux"
import { styles } from "../styles/styles"

const ShowOrder = (props) => {
    const dispatch = useDispatch()
    const user = useSelector(state=>state.user)
    const { order } = props
    return <Card containerStyle={styles.orderCard}>
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
        {
            order.OrderStatus === "Pending" && user.type === "Vendor" ?
            <Button 
                onPress={() => dispatch({
                    type: 'ORDER_EDIT', 
                    OrderId: order.OrderId,
                    OrderStatus: 'Accepted'
                })} 
                title="Accept" 
            /> : order.OrderStatus === "Accepted" ?
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
    </Card>
}

export default ShowOrder