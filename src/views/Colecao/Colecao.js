import React, {useState} from 'react';
import {Text, View, FlatList, TouchableOpacity} from 'react-native';
import estiloColecao from './estiloColecao';
import Lista from '../../components/Lista/Lista';
import { MaterialIcons } from '@expo/vector-icons';

function Colecao ({navigation}) {

    const [colecao, setColecao] = useState ([

{
            id: '1', 
            titulo: 'A peste',
            descricao: 'A Peste, a magnum opus de Albert Camus, é um romance publicado 1947, considerado um clássico da literatura existencialista e absurdista.',
            autor: 'Albert Camus',
            anoPublicacao: '1947',
            foto: require('../../../assets/itens/peste.jpg'),
        },

        {
            id: '2', 
            titulo: 'O mito de Sísifo',
            descricao: 'O mito de Sísifo é um ensaio filosófico escrito por Albert Camus, em 1941. Para ele, o homem vive sua existência em busca de sua essência, do seu sentido, e encontra um mundo desconexo, ininteligível, guiados por entidades sufocantes como as religiões e ideologias políticas.',
            autor: 'Albert Camus',
            anoPublicacao: '1942',
            foto: require('../../../assets/itens/mito.jpg'),
        },

        {
            id: '3', 
            titulo: 'A queda',
            descricao: 'La Chute é um romance filosófico de autoria do escritor francês Albert Camus. Publicado pela primeira vez em 1956, é a última obra completa de ficção do autor.',
            autor: 'Albert Camus',
            anoPublicacao: '1956',
            foto: require('../../../assets/itens/a queda.jpg'),
        },

        {
            id: '4', 
            titulo: 'O estrangeiro',
            descricao: 'é o mais famoso romance do escritor Albert Camus. A obra foi lançada em 1942, tendo sido traduzida em mais de sessenta e oito línguas e recebido uma adaptação cinematográfica realizada por Luchino Visconti em 1967.',
            autor: 'Albert Camus',
            anoPublicacao: '1942',
            foto: require('../../../assets/itens/o estrangeiro.jpg'),
        }
    ]);

        const voltar = () => {
            navigation.navigate('Inicial')
        }

        return (
            <View style={estiloColecao.container}>

                <View style={estiloColecao.header}>
                    <TouchableOpacity onPress={voltar}>
                        <MaterialIcons name='arrow-back' size={24} color="white" />
                    </TouchableOpacity>
                    <Text style={estiloColecao.texto}>Coleção</Text>
                    <MaterialIcons name="add" size={24} color="white" /> 
                </View>

                <FlatList 
                showsHorizontalScrollIndicator ={false}
                keyExtractor = {(item) => item.id }
                data={colecao} 
                renderItem={({item}) => <Lista data={item}/>}
                />
            </View>
        )
}

export default Colecao;
