import { StyleSheet, Dimensions } from 'react-native'

export const SW = Math.round(Dimensions.get('window').width)
export const SH = Math.round(Dimensions.get('window').height)



export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    itemCards: {
      width: SW*0.50
    },
    favServicerCardImage: {
      width: SW*0.50,
      height: SH*0.40,
    }
  })
  