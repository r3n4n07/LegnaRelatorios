import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

// Screens
import Home from "../screens/home";
import RelatorioAtividade from "../screens/relatorioAtividade";


export default function Routes() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                <Stack.Screen name="Relatorio Atividade" component={RelatorioAtividade} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}