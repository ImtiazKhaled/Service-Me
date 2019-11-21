import React from "react"
import { TouchableOpacity } from "react-native"
import { SearchBar, Avatar } from "react-native-elements"
import { styles } from "../styles/styles"
import { Col, Grid } from "react-native-easy-grid"
import { connect } from "react-redux"

class HomeTopBar extends React.Component {
    constructor(props) {
        super(props)
        props.user.SignedIn ?
        this.state = {
            ProfilePicture: props.user.ProfilePicture,
            search: "",
        } : this.state = {
            ProfilePicture: "https://www.macmillandictionary.com/external/slideshow/full/Grey_full.png",
            search: "",
        }
    }
    
    updateSearch = search => {
        this.setState({ search })
    }

    render() {
        const { search } = this.state

        return (
            <Grid>
                <Col style={styles.center} size={17}>
                    <TouchableOpacity onPress={this.props.signIn}>
                        <Avatar
                            rounded
                            source={{ uri: this.state.ProfilePicture }}
                        />
                    </TouchableOpacity>
                </Col>
                <Col size={80}>
                    <SearchBar
                        lightTheme={true}
                        round={true}
                        containerStyle={styles.searchBarContainer}
                        placeholder="Type Here..."
                        onChangeText={this.updateSearch}
                        value={search}
                    />
                </Col>
                <Col size={3} />
            </Grid>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(HomeTopBar)