import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text } from "react-native";
// import { carregaProdutores } from "../../../servicos/carregaDados";
import useProdutores from "./useProdutores";

import Produtor from "./Produtor";

export default function Produtores({ topo: Topo }) {
    const [titulo, lista] = useProdutores(); 

    // const [titulo, setTitulo] = useState('');
    // const [lista, setLista] = useState([]);

    // useEffect(() => {
    //     const retorno = carregaProdutores();
    //     setTitulo(retorno.titulo);
    //     setLista(retorno.lista);
    // }, []);

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={estilos.titulo}>{titulo}</Text>
        </>
    }

    return <FlatList
        data={lista}
        renderItem={({ item }) => <Produtor {...item} />}
        keyExtractor={({ nome }) => nome}
        ListHeaderComponent={TopoLista}
    />
};

const estilos = StyleSheet.create({
    titulo: {
        color: "#464646",
        fontSize: 20,
        fontWeight: "bold",
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16
    }
})