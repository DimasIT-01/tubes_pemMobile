import { AspectRatio, Box, Center, Flex, Heading, HStack, ScrollView, Spinner, View } from "native-base";
import React, { Component } from "react";
import { Text, FlatList,TextInput, TouchableOpacity, Image,Button } from "react-native";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";

class face extends Component {
    state = {
        provinsi:"",
        kota:"",
    }

    handleProvinsi = (text) => {
        let stringAr=[];
        let label="";
 
        text.split(" ").map((el) =>{
            stringAr.push(el.charAt(0).toLowerCase()+el.slice(1));
        })
 
        stringAr.map((el) =>{
            label=label+el+"-";
        })
        this.setState({provinsi: label})
    }
    handleKota = (text) => {
        this.setState({kota: text.toLowerCase()})
    }
    
    render() {
        const {navigation}=this.props;
        return(
            <>
            <Header title="Beranda" withLogo={false}/>
            <Center>
                <Image resizeMode="contain" source={require("../assets/rain.png")} alt="logo" style={{width: 180, height:180 }} />
                <Heading fontSize="3xl">Prakiraan Cuaca</Heading>
                <TextInput style={{borderRadius: 15, height: 100, margin:12, borderWidth:2, padding:10}} placeholder="Masukkan provinsi anda" onChangeText={this.handleProvinsi} autoCapitalize = "none"/>
                <TextInput style={{borderRadius: 15, height: 100, margin:12, borderWidth:2, padding:10}} placeholder="Masukkan kota anda" onChangeText={this.handleKota} autoCapitalize = "none"/>
                <Button onPress={() => navigation.navigate("Kota", {Kota: this.state.kota, Provinsi:this.state.provinsi})} title="Submit" color="#1b82af"/>
            </Center>
            </>
        )
    }
}

export default face;