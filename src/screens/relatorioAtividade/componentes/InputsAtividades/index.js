import { styles } from './styles';
import { memo, useEffect } from 'react';
import { subDays, format } from 'date-fns';
import { CardLoading } from '../cardLoading';
import { Controller } from 'react-hook-form';
import MaskInput from 'react-native-mask-input';
import { View, TextInput, Text, Alert } from 'react-native';
import { IconButton, Icon } from 'react-native-paper';

function InputsAtividades({ control, id, carregando, inputs, setInputs, item, setValue, unregister }) {

    // Captura o horário atual
    const pegarHoraChegadaESaida = (index) => {
        const data = subDays(new Date(), 0);
        const horaFormatada = format(data, 'HH:mm');
        const novosDados = [...inputs];

        if (!novosDados[index]['chegada']) {
            novosDados[index]['chegada'] = horaFormatada;
            setInputs(novosDados);
        } else {
            novosDados[index]['saida'] = horaFormatada;
            setInputs(novosDados);
        }
    };

    const alteraDadosInput = (text, index, field) => {
        const novosDados = [...inputs];
        novosDados[index][field] = text;
        setInputs(novosDados);        
    };

    const deletarAtividade = (index) => {
        try {
            setInputs(prevState => prevState.filter((_, i) => i !== index));
            unregister(`atividades${index}`);

        } catch (error) {
            Alert.alert("Error!", `Falha ao salvar dados no AsyncStorage\n${error}`, [{ text: "Ok" }]);
        }

    }

    useEffect(() => {
        setValue(`atividades${id}.local`, item.local);
        setValue(`atividades${id}.km`, item.km);
        setValue(`atividades${id}.chegada`, item.chegada);
        setValue(`atividades${id}.saida`, item.saida);
        setValue(`atividades${id}.atividade`, item.atividade);
    }, [inputs]);

    return (
        <View>
            {!carregando ? (
                <View style={styles.containerInputsRelatorio}>
                    <View>
                        <View style={styles.containerTituloInputLocal}>
                            <Text style={styles.titulosInputsRelatorio}>Local:</Text>
                            {id !== 0 && (
                                <IconButton
                                    icon={'delete'}
                                    size={23}
                                    iconColor='#C0392B'
                                    style={{ margin: 0 }}
                                    onPress={() => { deletarAtividade(id) }}
                                />
                            )}
                        </View>
                        <Controller
                            control={control}
                            name={`atividades${id}.local`}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.inputs}
                                    onChangeText={(text) => { onChange(text), alteraDadosInput(text, id, 'local') }}
                                    value={value}
                                />
                            )}
                        />
                    </View>
                    <View>
                        <View style={styles.containerTituloInputKm}>
                            <Text style={styles.titulosInputsRelatorio}>Km <Icon source={'car-speed-limiter'} color='#fb7404' size={22} />:</Text>
                        </View>
                        <Controller
                            control={control}
                            name={`atividades${id}.km`}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.inputs}
                                    onChangeText={(text) => { onChange(text), alteraDadosInput(text, id, 'km') }}
                                    value={value}
                                    keyboardType='decimal-pad'
                                />
                            )}
                        />
                    </View>
                    <View style={styles.containerHoraChegadaSaida}>
                        <View>
                            <View style={styles.containerTituloHorarioChegadaSaida}>
                                <Text style={styles.titulosInputsRelatorio}>Chegada:</Text>
                            </View>
                            <Controller
                                control={control}
                                name={`atividades${id}.chegada`}
                                render={({ field: { onChange, value } }) => (
                                    <MaskInput
                                        style={[styles.inputs, { width: 80 }]}
                                        textAlign='center'
                                        onChangeText={(text) => { onChange(text), alteraDadosInput(text, id, 'chegada') }}
                                        mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                                        placeholderTextColor={"#132135"}
                                        value={value}
                                        keyboardType='decimal-pad'
                                    />
                                )}
                            />
                        </View>
                        <View>
                            <IconButton
                                icon={'alarm'}
                                size={36}
                                iconColor='#48C9B0'
                                onPress={() => pegarHoraChegadaESaida(id)}
                                style={styles.botaoRelogio}
                            />
                        </View>
                        <View>
                            <View style={styles.containerTituloHorarioChegadaSaida}>
                                <Text style={styles.titulosInputsRelatorio}>Saída:</Text>
                            </View>
                            <Controller
                                control={control}
                                name={`atividades${id}.saida`}
                                render={({ field: { onChange, value } }) => (
                                    <MaskInput
                                        style={[styles.inputs, { width: 80 }]}
                                        textAlign='center'
                                        onChangeText={(text) => { onChange(text), alteraDadosInput(text, id, 'saida') }}
                                        mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                                        placeholderTextColor={"#132135"}
                                        value={value}
                                        keyboardType='decimal-pad'
                                    />
                                )}
                            />
                        </View>
                    </View>
                    <View style={styles.containerInputAtividade}>
                        <Text style={[styles.titulosInputsRelatorio, { marginBottom: 6 }]}>
                            Atividade:
                        </Text>
                        <Controller
                            control={control}
                            name={`atividades${id}.atividade`}
                            render={({ field: { onChange, value } }) => (
                                <TextInput
                                    style={styles.inputAtividade}
                                    numberOfLines={3}
                                    multiline
                                    onChangeText={(text) => { onChange(text), alteraDadosInput(text, id, 'atividade') }}
                                    value={value}
                                />
                            )}
                        />
                    </View>
                </View>
            ) : (
                <CardLoading />
            )}
            <View style={styles.linhaSeparaAtividade} />
        </View>
    );
}


export default memo(InputsAtividades)