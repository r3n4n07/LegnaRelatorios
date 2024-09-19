import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// Screens
import Home from "../screens/home";
import RelatorioAtividade from "../screens/relatorioAtividade";

export default function Routes() {

    const {Navigator, Screen} = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Navigator>
                <Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Screen name="Relatorio Atividade" component={RelatorioAtividade} options={{ headerShown: false }} />
            </Navigator>
        </NavigationContainer>
    )
}