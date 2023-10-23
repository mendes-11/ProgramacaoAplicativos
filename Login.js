import { View, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback} from "react-native";


export function Login(props){
    return(
        <View style={styles.container}>

            <Text style={styles.login}>Login</Text>

            <Text style={styles.margem}>Email:</Text>

            <TextInput style={styles.textArea}/>

            <Text style={styles.margem}>Senha:</Text>
            <TextInput style={styles.textArea}/>

            <TouchableOpacity
                style={{
                innerHeight:"10px",
                padding: '10px',
                backgroundColor:"white",
                borderRadius: '5px',
                marginTop: '10px'
                }}
                onPress={() => props.navigation.navigate("Usuario")}
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

