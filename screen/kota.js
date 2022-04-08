import { AspectRatio, Box, Center, Heading, HStack, ScrollView, Spinner,Circle, Divider } from "native-base";
import React, { useState, useEffect, } from "react";
import { Text, Image,RefreshControl } from "react-native";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";

const kota = ({route}) => {
    const [isLoading, setLoading] =  useState(true);
    const [cuaca, setcuaca] = useState([]);

    useEffect(() => {
        fetch(`https://cuaca-gempa-rest-api.vercel.app/weather/${route.params.Provinsi}/${route.params.Kota}`)
        .then((response) => response.json())
        .then((json) => setcuaca(json.data))
        .catch((error) => console.error(error))
        .finally(() => setLoading(false));
    }, []);


    return (
        <>
        
        {isLoading ? (
            <Center flex={1}>
                <Spinner size="lg" color="#eddf47" />
            </Center>
        ) : (
            <>
            <ScrollView>
            <Box px="20px" mb={5}  >
                <Box bg="#044884" rounded="lg" overflow="hidden">
                    <AspectRatio w="100%" ratio={16/9}>
                        {parseInt((cuaca.params[6].times[1].code)<3 ) ? <Image source={require('../assets/sunn.png')} resizeMode="contain" style={{width: 180, height:180 }} alt="thumbnail artikel1"/> : 
                        ((parseInt(cuaca.params[6].times[1].code)<61) ? (<Image source={require('../assets/cloud.png')} resizeMode='contain' style={{width: 180, height:180 }} alt="thumbnail artikel1"/>): 
                        (<Image resizeMode='contain' style={{width: 180, height:180 }} source={require('../assets/rain.png')} alt="thumbnail artikel1"/>))}
                    </AspectRatio>
                </Box>
                <Box p={5} bg="white">
                     <HStack mb={2}>
                        <HStack mr={2} alignItems="center">
                            <Ionicons name="timer-outline" size={18}/>
                            <Text ml={1}> Pagi </Text>
                        </HStack>
                        <HStack mr={2} alignItems="center">
                             <Ionicons name="cloud-outline" size={18}/>
                             <Text ml={1}> {cuaca.params[6].times[1].name}</Text>
                        </HStack>
                        <HStack mr={2} alignItems="center">
                            <Ionicons name="thermometer-outline" size={18}/>
                            <Text ml={1}> {cuaca.params[5].times[1].celcius}</Text>
                        </HStack>
                     </HStack>
                </Box>
            </Box>
            <Box px="20px" mb={5}  >
                <Box bg="#044884" rounded="lg" overflow="hidden">
                    <AspectRatio w="100%" ratio={16/9}>
                        {(parseInt(cuaca.params[6].times[2].code)<3) ? <Image source={require('../assets/sunn.png')} resizeMode="contain" alt="thumbnail artikel2"/> : 
                        ((parseInt(cuaca.params[6].times[2].code)<61) ? (<Image source={require('../assets/cloud.png')} resizeMode="contain" alt="thumbnail artikel2"/>): 
                        (<Image resizeMode="contain" source={require('../assets/rain.png')} alt="thumbnail artikel2"/>))}
                    </AspectRatio>
                </Box>
                <Box p={5} bg="white">
                     <HStack mb={2}>
                        <HStack mr={2} alignItems="center">
                            <Ionicons name="timer-outline" size={18}/>
                            <Text ml={1}> Siang</Text>
                        </HStack>
                        <HStack mr={2} alignItems="center">
                             <Ionicons name="cloud-outline" size={18}/>
                             <Text ml={1}> {cuaca.params[6].times[2].name}</Text>
                        </HStack>
                        <HStack mr={2} alignItems="center">
                            <Ionicons name="thermometer-outline" size={18}/>
                            <Text ml={1}> {cuaca.params[5].times[2].celcius}</Text>
                        </HStack>
                     </HStack>
                </Box>
            </Box>
            <Box px="20px" mb={5}  >
                <Box bg="#044884" rounded="lg" overflow="hidden">
                    <AspectRatio w="100%" ratio={16/9}>
                        {(parseInt(cuaca.params[6].times[4].code)<3) ? <Image source={require('../assets/sunn.png')} resizeMode="contain" alt="thumbnail artikel3"/> : 
                        ((parseInt(cuaca.params[6].times[4].code)<61) ? (<Image source={require('../assets/cloud.png')} resizeMode="contain" alt="thumbnail artikel3"/>): 
                        (<Image resizeMode="contain" source={require('../assets/rain.png')} alt="thumbnail artikel3"/>))}
                    </AspectRatio>
                </Box>
                <Box p={5} bg="white">
                     <HStack mb={2}>
                        <HStack mr={2} alignItems="center">
                            <Ionicons name="timer-outline" size={18}/>
                            <Text ml={1}> Malam</Text>
                        </HStack>
                        <HStack mr={2} alignItems="center">
                             <Ionicons name="cloud-outline" size={18}/>
                             <Text ml={1}> {cuaca.params[6].times[4].name}</Text>
                        </HStack>
                        <HStack mr={2} alignItems="center">
                            <Ionicons name="thermometer-outline" size={18}/>
                            <Text ml={1}> {cuaca.params[5].times[4].celcius}</Text>
                        </HStack>
                     </HStack>
                </Box>
            </Box>
            </ScrollView>
             </>
        )}
        </>
    )
}

export default kota;