import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState, useContext } from "react";
import { UtilsContext } from "./Contex";

export default function Usuario(props) {
  const { utils, setUtils } = useContext(UtilsContext);

  function deletarUsuario(userId) {
    const updatedUsers = utils.users.filter((user) => user.id != userId);
    setUtils({ ...utils, users: updatedUsers });
  }

  return (
    <View style={styles.container}>
      <Text style={styles.usuario}>Usuários</Text>
      {utils.users.map((user, index) => (
        <Container
          key={index}
          nome={user.nome}
          idade={user.idade}
          sexo={user.sexo}
          inicio={user.inicioValue}
          deletar={deletarUsuario}
          id={user.id}
        />
      ))}
    </View>
  );
}

// Componentização
function Container(props) {
  return (
    <View style={styles.card}>
      <Text>
        Nome: {props.nome}
        {"\n"}
        Idade: {props.idade}
        {"\n"}
        Sexo: {props.sexo}
        {"\n"}
        Recebe notificação: {props.inicio}
        {"\n"}
      </Text>
      <TouchableOpacity
        style={{
          height: 40,
          padding: 10,
          backgroundColor: "#FF0000",
          borderRadius: 5,
          marginTop: 10,
          marginLeft: 280,
        }}
        onPress={() => props.deletar(props.id)}>
        <Text style={{ color: "#FFFFFF" }}>Deletar</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          height: 40,
          padding: 10,
          backgroundColor: "#FF0000",
          borderRadius: 5,
          marginTop: 10,
          marginLeft: 280,
        }}
        onPress={() => props.deletar(props.id)}>
        <Text style={{ color: "#FFFFFF" }}>Deletar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    marginTop: "20px",
  },
  usuario: {
    fontSize: "70px",
    marginTop: "50px",
  },
  card: {
    border: "solid 2px black",
    borderRadius: "5px",
    width: "350px",
    height: "130px",
    marginTop: "10px",
  },
});
