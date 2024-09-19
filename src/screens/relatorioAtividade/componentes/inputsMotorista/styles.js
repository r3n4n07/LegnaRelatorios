import { StyleSheet, Dimensions} from "react-native"

const { width } = Dimensions.get("window")

export const styles = StyleSheet.create({
    container:{
        flexDirection: 'row'
    },
    containersFilho:{
        width: width
    },
    InputsMotorista: {
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        paddingLeft: 6,
        color: '#fff'
    }
})