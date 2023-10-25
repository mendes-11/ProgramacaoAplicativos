import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Switch, } from "react-native";
import { useState, useContext } from "react";
import { UtilsContext } from "./Contex";


export default function Usuario(){

    const {utils, setContext} = useContext(UtilsContext)


    return(
        <View style={styles.container}>
            <Text style={styles.usuario}>Usuarios</Text>

            <Text style={styles.card}>
                Nome: {utils.nome}
                {"\n"}
                Idade: {utils.idade}
                {"\n"}
                Sexo: {utils.sexo}
                {"\n"}
                Recebe notificação: {utils.inicio}
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

