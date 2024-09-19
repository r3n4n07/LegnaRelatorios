import { View, StyleSheet, StatusBar} from "react-native";
// Rotas
import Routes from "./src/routes";


export default function App (){
  return(
    <View style={styles.container}>
      <StatusBar backgroundColor={'#F0B27A'}/>
      <Routes/>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor:'#fff'
  }
});