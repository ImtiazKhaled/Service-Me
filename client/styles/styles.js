import { StyleSheet, Dimensions } from 'react-native'

const SW = Math.round(Dimensions.get('window').width)
const SH = Math.round(Dimensions.get('window').height)



export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemCards: {
      width: SW*0.50
    }  
  })
  