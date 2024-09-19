import { styles } from "./styles";
import { View, Text } from 'react-native';
import { IconButton, Icon } from 'react-native-paper';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

export function CardLoading() {
    return (
        <View style={styles.containerInputsRelatorio}>
            <View>
                <View style={styles.containerTituloInputLocal}>
                    <Text style={styles.titulosInputsRelatorio}>Local:</Text>
                </View>
                <SkeletonPlaceholder borderRadius={4} highlightColor='#132135' backgroundColor='#fb7404' speed={900}>
                    <SkeletonPlaceholder.Item width={'100%'} height={20} />
                </SkeletonPlaceholder>
            </View>
            <View>
                <View style={styles.containerTituloInputKm}>
                    <Text style={styles.titulosInputsRelatorio}>Km <Icon source={'car-speed-limiter'} color='#fb7404' size={22} />:</Text>
                </View>
                <SkeletonPlaceholder borderRadius={4} highlightColor='#132135' backgroundColor='#fb7404' speed={900}>
                    <SkeletonPlaceholder.Item width={'100%'} height={20} />
                </SkeletonPlaceholder>
            </View>
            <View style={styles.containerHoraChegadaSaida}>
                <View>
                    <View style={styles.containerTituloHorarioChegadaSaida}>
                        <Text style={styles.titulosInputsRelatorio}>Chegada:</Text>
                    </View>
                    <SkeletonPlaceholder borderRadius={4} highlightColor='#132135' backgroundColor='#fb7404' speed={900}>
                        <SkeletonPlaceholder.Item width={'100%'} height={20} />
                    </SkeletonPlaceholder>
                </View>
                <View>
                    <IconButton icon={'alarm'} size={36} iconColor='#48C9B0' style={styles.botaoRelogio} />
                </View>
                <View>
                    <View style={styles.containerTituloHorarioChegadaSaida}>
                        <Text style={styles.titulosInputsRelatorio}>Saída:</Text>
                    </View>
                    <SkeletonPlaceholder borderRadius={4} highlightColor='#132135' backgroundColor='#fb7404' speed={900}>
                        <SkeletonPlaceholder.Item width={'100%'} height={20} />
                    </SkeletonPlaceholder>
                </View>
            </View>
            <View style={styles.containerInputAtividade}>
                <Text style={[styles.titulosInputsRelatorio, { marginBottom: 6 }]}>
                    Atividade:
                </Text>
                <SkeletonPlaceholder borderRadius={4} highlightColor='#132135' backgroundColor='#fb7404' speed={900}>
                    <SkeletonPlaceholder.Item width={'100%'} height={80} />
                </SkeletonPlaceholder>
            </View>
        </View>
    );
}