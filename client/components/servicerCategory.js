import React, { Component } from "react"
import { ScrollView, TouchableOpacity, SafeAreaView } from "react-native"
import { Overlay } from "react-native-elements"
import { CardTen } from "react-native-card-ui"
import { connect } from "react-redux"
import { url } from "../secrets"
import { SW, SH } from "../styles/styles"
import Servicer from "./servicer"


class ServicerCategory extends Component {
    constructor(props) {
        super(props)
        this.state = {
          isVisible: false,
          servicers:[],
          OverlayVendor: {}
        }
    }

    componentDidMount = () => {
        let id = JSON.stringify(this.props.navigation.getParam("id"))
        id = id.substring(1, id.length - 1)
        fetch(url+"vendors/"+id)
        .then(response => response.json())
        .then(data => {
          this.setState({
            servicers: data,
          })
        })
        .catch(err => alert(err))
    }

    showModal = (item) => {
        this.setState({
          OverlayVendor: item
        })
        this.setState({
          isVisible: true
        })
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
                                    onPress={(evt) => {this.showModal(servicer)}}
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
                <Overlay
                        isVisible={this.state.isVisible}
                        windowBackonBackdropPress={() => this.setState({ isVisible: false })}
                        groundColor="rgba(255, 255, 255, .5)"
                        overlayBackgroundColor="white"
                        width={SW*0.7}
                        height={SH*0.5}
                    >
                        <Servicer vendor={this.state.OverlayVendor} closeModal={() => {
                        this.setState({ isVisible: false })
                        }} />
                </Overlay>
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