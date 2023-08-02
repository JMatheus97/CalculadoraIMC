import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  formContext: {
        flex: 1,
        backgroundColor: "#fff",
        marginTop: 30,
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30
  },
  form: {
        width: "100%",
        paddingTop: 20,
  },
  formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
  },
  input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10
  },
  buttonCalculetor: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30
  },
  textbutton: {
        fontSize: 20,
        color: "#ffff",

  },
  errorMessage: {
      fontSize: 12,
      color: "red",
      fontWeight: "bold",
      paddingLeft: 12
  },
  exhibitionResultImc: {
      width: "100%",
      height: "50%"
  },
  listaImc: {
      marginTop: 20,
  },
  resultImcItem: {
      fontSize: 24,
      color: "red",
      height: 50,
      width: "100%",
      paddingRight: 20
  },
  textResultItemList: {
      fontSize: 16,
      

  }
})

export default styles;