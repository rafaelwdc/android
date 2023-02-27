import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { carregaTopo } from "../../../servicos/carregaDados";


import logo from "./logo.png";

class Topo extends React.Component {
    state = {
        topo: {
            boasVindas: '',
            legenda: '',
        }
    }

    atualizaTopo() {
        const retorno = carregaTopo();
        this.setState({ topo: retorno });
    }

    componentDidMount() {
        this.atualizaTopo();
    }

    render() {
        return <View style={estilos.topo}>
            <Image source={logo} style={estilos.imagem } />
            <Text style={estilos.boasVindas}>{ this.state.topo.boasVindas }</Text>
            <Text style={estilos.legenda}>{ this.state.topo.legenda }</Text>
        </View>
    }
};

const estilos = StyleSheet.create({
    topo: {
        backgroundColor: "#F6F6F6",
        padding: 16
    },
    imagem: {
        height: 28,
        width: 70
    },
    boasVindas: {
        color: "#464646",
        fontSize: 26,
        marginTop: 24,
        lineHeight: 42,
        fontWeight: "bold"
    },
    legenda: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    }
});

export default Topo;