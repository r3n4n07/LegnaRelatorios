import { View, Text, Image, TouchableOpacity} from "react-native";
import { useNavigation } from "@react-navigation/native";

// Styles
import { styles } from "./styles";

// Imagens
import Logo from '../../../assets/Logo.png';


export default function Home() {

    const navigate = useNavigation();
    return (
        <View style={styles.container}>
            <View style={styles.containerSuperior}>
                <View style={styles.containerLogo}>
                    <Image source={Logo} style={styles.logo} />
                </View>
            </View>
            <TouchableOpacity style={styles.botao} onPress={()=>{navigate.navigate('Relatorio Atividade')}}>
                <Text style={styles.textoBotao}>CRIAR RELATÓRIO</Text>
            </TouchableOpacity>
        </View>
    )
}
