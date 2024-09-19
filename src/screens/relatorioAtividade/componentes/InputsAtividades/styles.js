import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    containerInputsRelatorio: {
        borderWidth: 0,
        marginHorizontal: 16,
        marginTop: 30,
        marginBottom: 0
    },
    containerTituloInputLocal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titulosInputsRelatorio: {
        fontSize: 18,
        color: '#fb7404',
        fontWeight: '700'
    },
    inputs: {
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#F0B27A',
        color: '#fff'
    },
    containerTituloInputKm: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 16
    },
    containerHoraChegadaSaida: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        marginTop: 16
    },
    botaoRelogio: {
        borderWidth: 3,
        borderColor: '#48C9B0',
        borderRadius: 12
    },
    containerTituloHorarioChegadaSaida: {
        alignItems: 'center'
    },
    containerInputAtividade: {
        marginTop: 16
    },
    inputAtividade: {
        fontSize: 16,
        borderWidth: 2,
        borderColor: '#F0B27A',
        textAlignVertical: 'top',
        borderRadius: 6,
        color: '#fff',
        padding: 6
    },
    linhaSeparaAtividade: {
        borderWidth: 2,
        borderColor: '#B2BABB',
        alignSelf: 'center',
        width: 60,
        marginTop:50
    }
})