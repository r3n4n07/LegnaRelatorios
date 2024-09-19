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
    botaoReload: {
        alignSelf: 'flex-end'
    },
    botaoAdicionar: {
        alignSelf: 'center'
    }
})
