import React, { Component } from "react"
import { ScrollView, TouchableOpacity, SafeAreaView } from "react-native"
import { CardTen } from "react-native-card-ui"
import { connect } from "react-redux"
import { url } from "../url"

class ServicerCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
          servicers:[]
        }
    }

    componentDidMount = () => {
        let id = JSON.stringify(this.props.navigation.getParam("id"))
        id = id.substring(1, id.length - 1)
        console.log(id)
        fetch(url+"vendors/"+id)
        .then(response => response.json())
        .then(data => {
          this.setState({
            servicers: data,
          })
        })
        .catch(err => alert(err))
    }

    render() {
        const {servicers} = this.state
        return (
            <SafeAreaView>
                <ScrollView style={{ paddingLeft: 10 }}>
                    {
                        servicers.map(
                            (servicer) => {
                                return <TouchableOpacity
                                    onPress={() => alert("hi", servicer.name)}
                                    style={{ paddingTop: 80 }}
                                    key={servicer.UserId}>
                                    <CardTen
                                        title={servicer.FName + " " + servicer.LName}
                                        subTitle={servicer.ServiceOffered}
                                        image={{ uri: servicer.ProfilePicture }}
                                        price={parseFloat(servicer.Rate)}
                                        star={parseInt(servicer.Rating)}
                                        starsFor={"0"}
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