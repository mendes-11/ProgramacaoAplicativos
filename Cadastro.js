import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Switch,
} from "react-native";
import { useState, useContext } from "react";
import { UtilsContext } from "./Contex";
import axios from 'axios';

export default function Cadastro(props) {
  const { utils, setUtils } = useContext(UtilsContext);

  const [inicio, setInicio] = useState(false);

  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [sexo, setSexo] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [senha2, setSenha2] = useState("");
  const [id, setId] = useState(1);

  function cadastrar() {
    if (senha == senha2) {
      const inicioValue = inicio ? "sim" : "não";

      if (utils && utils.users) {
        setUtils({
          ...utils,
          users: [
            ...utils.users,
            {
              nome: nome,
              idade: idade,
              sexo: sexo,
              email: email,
              senha: senha,
              inicioValue: inicioValue,
              id: id,
            },
          ],
        });
      } else {
        setUtils({
          users: [
            {
              nome: nome,
              idade: idade,
              sexo: sexo,
              email: email,
              senha: senha,
              inicioValue: inicioValue,
              id: id,
            },
          ],
        });
        
      }

      setId(id + 1);
      props.navigation.navigate("Login");
    }
  }



  const dados = async (name, age) => {

      try {
        const response = await axios.post("http://localhost:8080/user", {name, age});
  
        console.log('Resposta da API:', response);
      } catch (error) {
        console.error('Erro no post:', error);
      }
    }

  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={{
          uri: "data:image/png;base64,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",
        }}
      />

      <Text style={styles.margem}>Nome:</Text>
      <TextInput
        onChangeText={(e) => setNome(e)}
        value={nome}
        style={styles.textArea}
      />

      <Text style={styles.margem}>Idade:</Text>
      <TextInput
        onChangeText={(e) => setIdade(e)}
        value={idade}
        style={styles.textArea}
      />

      <Text style={styles.margem}>Sexo:</Text>
      <TextInput
        onChangeText={(e) => setSexo(e)}
        value={sexo}
        style={styles.textArea}
      />

      <Text style={styles.margem}>Email:</Text>
      <TextInput
        onChangeText={(e) => setEmail(e)}
        value={email}
        style={styles.textArea}
      />

      <Text style={styles.margem}>Senha:</Text>
      <TextInput
        onChangeText={(e) => setSenha(e)}
        value={senha}
        style={styles.textArea}
      />

      <Text style={styles.margem2}>Confirmar senha:</Text>
      <TextInput
        onChangeText={(e) => setSenha2(e)}
        value={senha2}
        style={styles.textArea}
      />

      <Text style={styles.margem4}>Deseja receber notificações?</Text>

      <Switch
        style={styles.margem3}
        onValueChange={() => setInicio(!inicio)}
        value={inicio}
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={"#f4f3f4"}
        activeThumbColor={"#1ff28d"}
      />

      <TouchableOpacity
        style={{
          innerHeight: "10px",
          padding: "10px",
          backgroundColor: "white",
          borderRadius: "5px",
          marginTop: "10px",
        }}
        onPress={() => dados(nome, idade)}
      >
        <Text>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => props.navigation.navigate("Login")}>
        <View
          style={{
            innerHeight: "40px",
          }}
        >
          <Text style={{ color: "black" }}>Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: "20px",
  },
  imagem: {
    height: "100px",
    width: "100px",
    margin: "20px",
  },
  textArea: {
    backgroundColor: "white",
    color: "black",
    width: "250px",
    maxLength: "90",
    numberOfLines: "1",
    borderRadius: "5px",
  },
  textArea2: {
    backgroundColor: "white",
    color: "black",
    width: "50px",
    maxLength: "90",
    numberOfLines: "1",
  },
  margem: {
    marginTop: "20px",
    marginRight: "200px",
    fontSize: "15px",
  },
  margem2: {
    marginTop: "20px",
    marginRight: "130px",
    fontSize: "15px",
  },
  margem3: {
    marginRight: "200px",
  },
  margem4: {
    marginRight: "65px",
    marginTop: "10px",
  },
});
