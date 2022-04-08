import {  Link, Box, Center, Heading, HStack, ScrollView, Divider } from "native-base";
import React from "react";
import { Text, Image, } from "react-native";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";

const iconSize = 36;

const about = () => {
  return (
    <>
      <Header title="About" withLogo={false} />
      <ScrollView>
        <Box p={5} background="#E6E7E8" m={5} rounded="2xl">
          <Center>
            <Image resizeMode="contain" source={require("../assets/rain.png")} alt="logo" style={{width: 180, height:180 }} />
            <Heading fontSize="3xl">Weather</Heading>
            <Text mt={5} fontSize="lg">Aplikasi Prakiraan Cuaca dan Info Terkini Gempa</Text>
            <Text mt={5} fontSize="lg">Kelompok 1</Text>
            <Text mt={5} fontSize="lg">Dimas Bagus Saputro</Text>
            <Text mt={5} fontSize="lg">M. Rizal Dwi A.</Text>
            <Text mt={5} fontSize="lg">Anas Ittaqullah</Text>
            <Text mt={5} fontSize="lg">Ilham Mukti P</Text>
            <Text mt={5} fontSize="lg">Dava Firmansyah</Text>
            <Divider my={5}/>
            <HStack space={8}>
              <Link href="https://facebook.com">
                <Ionicons name="logo-facebook" size={iconSize}/>
              </Link>
              <Link href="https://youtube.com">
                <Ionicons name="logo-youtube" size={iconSize}/>
              </Link>
              <Link href="https://instagram.com">
                <Ionicons name="logo-instagram" size={iconSize}/>
              </Link>
              <Link href="https://twitter.com">
                <Ionicons name="logo-twitter" size={iconSize}/>
              </Link>
            </HStack>
          </Center>
        </Box>
      </ScrollView>
    </>
  );
};

export default about;
