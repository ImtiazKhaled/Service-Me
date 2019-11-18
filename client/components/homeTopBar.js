import React from "react"
import { TouchableOpacity } from "react-native"
import { SearchBar, Avatar } from "react-native-elements"
import { styles } from "../styles/styles"
import { Col, Grid } from "react-native-easy-grid"

export default class HomeTopBar extends React.Component {
    state = {
        search: "",
    }

    updateSearch = search => {
        this.setState({ search })
    }

    render() {
        const { search } = this.state

        return (
            <Grid>
                <Col style={styles.center} size={17}>
                    <TouchableOpacity>
                        <Avatar
                            rounded
                            source={{
                                uri:
                                    "https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg",
                            }}
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