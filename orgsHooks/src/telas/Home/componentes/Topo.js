import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { carregaTopo } from "../../../servicos/carregaDados";


import logo from "./logo.png";

class Topo extends React.Component {
    atualizaTopo() {
        const retorno = carregaTopo();
        console.log(retorno);
    };

    componentDidMount() {
        this.atualizaTopo();
    };

    render() {
        return <View style={estilos.topo}>
            <Image source={logo} style={estilos.imagem} />
            <Text style={estilos.boasVindas}>Olá, Rafael!</Text>
            <Text style={estilos.legenda}>Encontre os melhores produtores</Text>
        </View>
    }
};

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    imagem: {
        width: 70,
        height: 28
    },
    boasVindas: {
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold"
    },
    legenda: {
        fontSize: 16,
        lineHeight: 26
    }
});

export default Topo;