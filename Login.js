import { View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback} from "react-native";
import { useState, useContext } from "react";
import { UtilsContext } from "./Contex";

export function Login(props){

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const {utils, setContext} = useContext(UtilsContext)


    function goToUsuario(){

        if(email == utils.email && senha == utils.senha)
        {
            props.navigation.navigate("Usuario")
        }    
    }

    return(
        <View style={styles.container}>

            <Text style={styles.login} >Login</Text>

            <Text style={styles.margem}>Email:</Text>
            <TextInput
                onChangeText= {e => setEmail(e)}
                value = {email}
                style={styles.textArea}/>

            <Text style={styles.margem}>Senha:</Text>
            <TextInput
                onChangeText= {e => setSenha(e)}
                value = {senha}
                style={styles.textArea}/>

            <TouchableOpacity
                style={{
                innerHeight:"10px",
                padding: '10px',
                backgroundColor:"white",
                borderRadius: '5px',
                marginTop: '10px'
                }}
                onPress={() => goToUsuario()}
            >
            <Text>Login</Text>
            </TouchableOpacity>

            <TouchableOpacity
             onPress={() => props.navigation.navigate("Cadastro")}
            >
                <View style={{
                innerHeight:"40px",
                }}>
                <Text style={{color:"black"}}>Cadastrar</Text>
                </View>
            </TouchableOpacity>
                    
        </View>
        
    );

}
    const styles = StyleSheet.create({
        textArea: { 
            backgroundColor: 'white',
            color: 'black',
            width: '250px',   
            borderRadius: '5px',
            maxLength: "90",
            numberOfLines: '1',
 
                     
        },
        margem: {
            marginTop: "20px",
            marginRight: '200px',
            fontSize: '20px',
        },
        container: {
            display: 'flex',
            alignItems: 'center',
            marginTop: "20px",

        },
        login: {
            fontSize: "70px",
            marginTop: '50px',
        }

    });

