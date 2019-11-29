import React, { useState } from "react"
import { ScrollView, View, Text } from "react-native"
import { Overlay } from "react-native-elements"
import { Button } from "react-native-elements"
import { styles, SH, SW } from "../styles/styles"
import Login from './login'

const PleaseLogin = (props) => {

  const [loginVisible, changeVisibility] = useState(false)

  return <View style={styles.container}>
      <Text style={{fontSize: 40, paddingTop: SH*0.30}}>
          Please
      </Text>
      <Button 
        containerStyle={{width: SW * 0.50}} 
        title="Login" 
        onPress={() => changeVisibility(true)}
      />
      <Text style={{fontSize: 40}}>
          to continue
      </Text>
      <Overlay
        isVisible={loginVisible}
        windowBackonBackdropPress={() => changeVisibility(false)}
        groundColor="rgba(255, 255, 255, .5)"
        overlayBackgroundColor="white"
        width={SW*0.7}
        height={SH*0.5}
      >
        <ScrollView>
          <Login 
            closeModal={() => changeVisibility(false)}
          />
        </ScrollView>
      </Overlay>    
  </View>
}

export default PleaseLogin