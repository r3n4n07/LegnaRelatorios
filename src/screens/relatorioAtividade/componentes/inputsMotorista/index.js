import { styles } from "./styles"
import { useEffect, useRef } from "react"
import { Controller } from "react-hook-form"
import { ScrollView, View, TextInput } from "react-native"

export function InputsMotorista({ control, setValue, nome, kmInicial, placa, veiculo, setNome, setKmInicial, setVeiculo, setPlaca, carregando }) {

    useEffect(() => {
        setValue("nome", nome);
        setValue("kmInicial", kmInicial);
        setValue("veiculo", veiculo);
        setValue("placa", placa);
    }, [nome, kmInicial, veiculo, placa])

    return (
        <ScrollView horizontal={true} pagingEnabled style={styles.container} showsHorizontalScrollIndicator={false}>
            <View style={styles.containersFilho}>
                <View>
                    <Controller
                        control={control}
                        name="nome"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                placeholder='Nome'
                                editable={!carregando}
                                style={styles.InputsMotorista}
                                placeholderTextColor={'#B2BABB'}
                                onChangeText={(text) => { onChange(text), setNome(text) }}
                            />
                        )}
                    />
                </View>
                <View>
                    <Controller
                        control={control}
                        name="kmInicial"
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                editable={!carregando}
                                placeholder='Km Inicial'
                                keyboardType='decimal-pad'
                                placeholderTextColor={'#B2BABB'}
                                style={[styles.InputsMotorista, { marginTop: 16 }]}
                                onChangeText={(text) => { onChange(text), setKmInicial(text) }}
                            />
                        )}
                    />
                </View>
            </View>
            <View style={styles.containersFilho}>
                <View>
                    <Controller
                        control={control}
                        name='veiculo'
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                placeholder='Veículo'
                                editable={!carregando}
                                style={styles.InputsMotorista}
                                placeholderTextColor={'#B2BABB'}
                                onChangeText={(text) => { onChange(text), setVeiculo(text) }}
                            />
                        )}
                    />
                </View>
                <View>
                    <Controller
                        control={control}
                        name='placa'
                        render={({ field: { onChange, value } }) => (
                            <TextInput
                                value={value}
                                placeholder='Placa'
                                editable={!carregando}
                                placeholderTextColor={'#B2BABB'}
                                style={[styles.InputsMotorista, { marginTop: 16 }]}
                                onChangeText={(text) => { onChange(text), setPlaca(text) }}
                            />
                        )}
                    />
                </View>
            </View>
        </ScrollView>
    )
}