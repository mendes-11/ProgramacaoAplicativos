import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Switch, } from "react-native";

export default function Usuario(){
    return(
        <View style={styles.container}>
            <Text style={styles.usuario}>Usuarios</Text>

            <Text style={styles.card}>
                Nome:
                {"\n"}
                Idade:
                {"\n"}
                Sexo:
                {"\n"}
                Recebe notificação:
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        marginTop: "20px",
    },
    usuario: {
        fontSize: "70px",
        marginTop: '50px',
    },
    card: {
       border: "solid 2px black",
       borderRadius: "5px",
       width: "350px",
       height: "90px"
      },
})

