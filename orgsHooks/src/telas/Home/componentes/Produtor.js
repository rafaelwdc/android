import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Estrelas from "./Estrelas";

export default function Produtor({ nome, imagem, distancia, estrelas }) {
    return <View style={estilos.cartao}>
        <Image style={estilos.imagem} source={imagem} accessibilityLabel={nome} />
        <View style={estilos.informacoes}>
            <View>
                <Text style={estilos.nome}>{nome}</Text>
                <Estrelas quantidade={estrelas} />
            </View>
            <Text style={estilos.distancia}>{distancia}</Text>
        </View>
    </View>
};

const estilos = StyleSheet.create({
    cartao: {
        alignItems: "center",
        backgroundColor: "#F6F6F6",
        borderRadius: 6,
        flexDirection: "row",
        marginVertical: 8,
        marginHorizontal: 16,

        // -- Sombra no Android:
        elevation: 4,

        // -- Sombra no iOS:
        shadowColor: "#000000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.24,
        shadowRadius: 2.62
    },
    imagem: {
        borderRadius: 6,
        height: 48,
        marginLeft: 16,
        marginVertical: 16,
        width: 48
    },
    informacoes: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 8,
        marginVertical: 16,
        marginRight: 16
    },
    nome: {
        fontSize: 14,
        lineHeight: 22,
        fontWeight: "bold"
    },
    distancia: {
        fontSize: 12,
        lineHeight: 19
    }
})