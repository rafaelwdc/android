import React from "react";
import { FlatList, Image, StyleSheet, View } from "react-native";
import Texto from "../../../componentes/Texto";

export default function Item({ item: { nome, imagem } }) {

    return <View style={estilos.item}>
        <Image source={ imagem } style={estilos.imagem} />
        <Texto style={estilos.nome}>{ nome }</Texto>
    </View>
};

const estilos = StyleSheet.create({
    item: {
        alignItems: "center",
        borderBottomColor: "#ECECEC",
        borderBottomWidth: 1,
        flexDirection: "row",
        marginHorizontal: 16,
        paddingVertical: 16,
    },
    imagem: {
        width: 46,
        height: 46
    },
    nome: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        color: "#464646"
    }
});






























    // return <>
    //     <Texto style={estilos.titulo}>{titulo}</Texto>
    //     <FlatList
    //         data={lista}
    //         renderItem={renderItem}
    //         keyExtractor={({ nome }) => nome}
    //     />
    
    {/*{lista.map(({ nome, imagem }) => {
                return <View key={nome} style={estilos.item}>
                    <Image source={imagem} style={estilos.imagem} />
                    <Texto style={estilos.nome}> {nome} </Texto>
                </View>
            })} 
        </>*/}
    
