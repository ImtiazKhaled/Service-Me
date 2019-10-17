import React from 'react'
import { Text, View, Image, ImageBackground } from 'react-native'
import Carousel from 'react-native-snap-carousel'
import { connect } from 'react-redux'
import { SW, SH, styles } from '../styles/styles'
import { Card } from 'react-native-elements'

class FavoriteServicers extends React.Component {
    _renderItem({ item, index }) {
        return (
            <Card
                image={{ uri: item.profilePicture }}
                imageStyle={styles.favServicerCardImage}
            >
                <Text>{item.name}</Text>
            </Card>
        )
    }

    render() {
        const { servicers } = this.props
        return (
            <Carousel
                layout={'stack'}
                layoutCardOffset={18}
                ref={(c) => { this._carousel = c }}
                data={servicers}
                renderItem={this._renderItem}
                sliderWidth={SW}
                itemWidth={SW * 0.70}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        servicers: state.servicers
    }
}


export default connect(mapStateToProps)(FavoriteServicers)