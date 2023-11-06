import { View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Switch, } from "react-native";
import { useState, useContext } from "react";
import { UtilsContext } from "./Contex";


export default function Usuario(props){

    const {utils, setContext} = useContext(UtilsContext)


    return(
        <View style={styles.container}>
            <Text style={styles.usuario}>Usuarios</Text>

            
            {container(utils)}
            <TouchableOpacity
                style={{
                    innerHeight:"10px",
                    padding: '10px',
                    backgroundColor:"#FF0000",
                    borderRadius: '5px',
                    marginTop: '10px',
                    marginLeft: '280px'
                    }}
                    onPress={() => props.navigation.navigate("Cadastro")}
            >
                <Text>Deletar</Text>
            </TouchableOpacity>



        </View>

    );
}

//Componentização
function container(props){
    return(
        <Text style={styles.card}>
            Nome: {props.nome}
            {"\n"}
            Idade: {props.idade}
            {"\n"}
            Sexo: {props.sexo}
            {"\n"}
            Recebe notificação: {props.inicio}
            {"\n"}



            
        </Text>
    )
}

function deletar(){
    utils.nome = "mendes"

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
       height: "130px",
       marginTop: "10px"
      },
})
