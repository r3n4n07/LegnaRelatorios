import { StyleSheet} from 'react-native'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#132135"
    },
    containerSuperior: {
        backgroundColor: '#fb7404',
        height: '60%',
        borderBottomLeftRadius: 26,
        borderBottomRightRadius: 26,
        alignItems: "center",
        justifyContent: "center"
    },
    containerLogo: {
        backgroundColor: '#132135',
        borderRadius: 50,
        padding: 6,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        width: 150
    },
    logo: {
        height: 120,
        width: 120
    },
    botao: {
        position: 'absolute',
        backgroundColor: '#fff',
        top: "55%",
        alignSelf: 'center',
        height: 80,
        width: 250,
        borderRadius: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#fb7404',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 8,
    },
    textoBotao: {
        fontSize: 28,
        color: '#132135',
        fontWeight: 'bold'
    }
});