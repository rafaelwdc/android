import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import estrela from "../../../assets/estrela.png";
import estrelaCinza from "../../../assets/estrelaCinza.png";


export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false
}) {
    const estilos = estilosFuncao(grande);
    return <View style={estilos.estrelas}>
        <Image source={estrela} style={estilos.estrela} />
        <Image source={estrela} style={estilos.estrela} />
    </View>
};

const estilosFuncao = (grande) => StyleSheet.create({
    estrelas: {
        flexDirection: "row"
    },
    estrela: {
        height: grande ? 36 : 12,
        width: grande ? 36 : 12,
        marginRight: 2
    }
})