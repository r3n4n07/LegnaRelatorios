import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#132135'
    },
    botaoRetornar: {
        margin: 0
    },
    containerOpcoes: {
        margin: 12,
        marginLeft: 6,
        marginTop: 0,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    containerBotaoGerarRelatorio: {
        justifyContent: 'center'
    },
    iconeBotaoGerarRelatorio: {
        backgroundColor: "#C0392B",
        position: 'absolute',
        zIndex: 1,
        margin: 0
    },
    textoBotaoGerarRelatorio: {
        fontSize: 14,
        color: "#fff",
        fontWeight: 'bold',
        letterSpacing: 1
    },
    botaoGerarRelatorio: {
        height: 40,
        backgroundColor: '#C0392B',
        width: 176,
        alignItems: 'flex-end',
        justifyContent: 'center',
        borderRadius: 6,
        marginLeft: 6
    },
    textInputNome: {
        fontSize: 16,
        borderBottomWidth: 2,
        borderBottomColor: '#fff',
        paddingLeft: 6,
        color: '#fff'
    },
    botaoReload: {
        alignSelf: 'flex-end'
    },
    containerInputsRelatorio: {
        borderWidth: 0,
        marginHorizontal: 16,
        marginTop: 30,
        marginBottom: 0
    },
    titulosInputsRelatorio: {
        fontSize: 18,
        color: '#fb7404',
        fontWeight: '700'
    },
    containerTituloInputLocal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
        width: 60
    },
    botaoAdicionar: {
        alignSelf: 'center'
    }
})
