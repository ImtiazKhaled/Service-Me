import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { Card } from 'react-native-elements'
import { styles } from '../styles/styles'
import { connect } from 'react-redux'

class PopularItems extends Component {

    render() {
        const { categories } = this.props
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
            >
                {categories.map((type) =>
                    <Card key={type.title} containerStyle={styles.itemCards}>
                        <Text>
                            {type.title}
                        </Text>
                    </Card>
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