import React, { Component } from "react"
import { Text, ScrollView, TouchableOpacity, Image } from "react-native"
import { Card } from "react-native-elements"
import { styles } from "../styles/styles"
import { connect } from "react-redux"


class PopularItems extends Component {

    navigateToServicer = type => {
        this.props.navigateToServicer(type)
    }

    render() {
        const { categories } = this.props
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {categories.map((type) =>
                    <TouchableOpacity key={type.id} onPress={() => this.navigateToServicer(type)}>
                        <Card
                            containerStyle={styles.itemCards}>
                            <Image style={styles.itemImage} source={type.image} />
                            <Text style={styles.itemText}>
                                {type.id}
                            </Text>
                        </Card>
                    </TouchableOpacity>
                )}

            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
}

export default connect(mapStateToProps)(PopularItems)