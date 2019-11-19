import React from "react"
import { Text, TouchableOpacity } from "react-native"
import Carousel from "react-native-snap-carousel"
import { SW, styles } from "../styles/styles"
import { Card } from "react-native-elements"

class FavoriteServicers extends React.Component {
    render() {
        const { servicers } = this.props
        return (
            <Carousel
                layout={"stack"}
                layoutCardOffset={18}
                ref={(c) => { this._carousel = c }}
                data={servicers}
                loop={true}
                renderItem={({ item, index }) => {
                    return <TouchableOpacity
                        onPress={() => {
                            this.props.servicerSelected(item)
                        }}>
                        <Card
                            image={{ uri: item.ProfilePicture }}
                            imageStyle={styles.favServicerCardImage}
                        >
                            <Text>{item.FName + " " + item.LName}</Text>
                        </Card>
                    </TouchableOpacity>
                }}
                sliderWidth={SW}
                itemWidth={SW * 0.70}
            />
        )
    }
}

export default FavoriteServicers