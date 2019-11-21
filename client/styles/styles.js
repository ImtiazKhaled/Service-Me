import { StyleSheet, Dimensions } from "react-native"

const Theme = {
  backgroundColor: "#ffffff"
}

export const SW = Math.round(Dimensions.get("window").width)
export const SH = Math.round(Dimensions.get("window").height)

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.backgroundColor,
    alignItems: "center",
    justifyContent: "center",
  },
  itemCards: {
    width: SW * 0.40,
    height: SH * 0.15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  itemImage: {
    width: SW * 0.40,
    height: SH * 0.10,
    resizeMode: 'contain',
  },
  itemText: {
    paddingLeft: SH * 0.05,
  },
  favServicerCardImage: {
    width: SW * 0.55,
    height: SH * 0.50,
  },
  searchBarContainer: {
    backgroundColor: Theme.backgroundColor,
    borderBottomColor: Theme.backgroundColor,
    borderTopColor: Theme.backgroundColor,
  },
  center: {
    alignItems: "center",
    justifyContent: "center"
  },
  topPad: {
    padding: 15,
  },
  messageButton: {
    backgroundColor: "white"
  },
  messageTitle: {
    height: SH*0.10
  },
  messageBox: {
    height: SH*0.08
  }
})
