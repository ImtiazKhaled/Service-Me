import React, { Component } from 'react'
import { ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { CardTen } from 'react-native-card-ui'
import { connect } from 'react-redux'

class ServicerCategory extends Component {

    render() {
        let id = JSON.stringify(this.props.navigation.getParam('id'))
        id = id.substring(1, id.length - 1)
        const servicer = this.props.servicers.filter((service) => {
            return service.service === id
        })

        return (
            <SafeAreaView>
                <ScrollView style={{ paddingLeft: 10 }}>
                    {
                        servicer.map(
                            (service) => {
                                return <TouchableOpacity
                                    onPress={() => alert('hi', service.name)}
                                    style={{ paddingTop: 80 }}
                                    key={service.id}>
                                    <CardTen
                                        title={service.name}
                                        subTitle={service.service}
                                        image={{ uri: service.profilePicture }}
                                        price={33.5}
                                        star={service.rating}
                                        starsFor={'24'}
                                    />
                                </TouchableOpacity>
                            }
                        )
                    }
                </ScrollView>
            </SafeAreaView>
        )
    }
}

const mapStateToProps = state => {
    return {
        servicers: state.servicers
    }
}

export default connect(mapStateToProps)(ServicerCategory)