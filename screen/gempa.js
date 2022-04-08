import { AspectRatio, Box, Center, Heading, HStack, ScrollView, Spinner,Circle, Divider } from "native-base";
import React, {Component} from "react";
import { RefreshControl,Text, Image,Button, TextInput } from "react-native";
import { Header } from "../components";
import Ionicons from "@expo/vector-icons/Ionicons";


class quake extends Component {
    state = {
        dat:[],
        isLoading: true,
        isRefresh: false,
    }
    handlekota = (text) => {
        this.setState({kota: text})
    }
    
    getInfo(){
        fetch("https://cuaca-gempa-rest-api.vercel.app/quake")
        .then((response) => response.json())
        .then((json) => { this.setState({ dat: json.data })})
        .catch((error) => console.error(error))
         .finally(() =>
           this.setState({
             isLoading: false,
           })
         )    
    }
    
    onRefresh = () => {
        this.setState({ isRefresh: true}, () => {
            this.getInfo(),
            this.setState({isRefresh:false}); 
        })
      }

    componentDidMount(){
        this.getInfo();
    }
    
    render(){
        const{isRefresh,dat}=this.state;
        return(
            <>
            <Header title="Info Gempa" withLogo={false}/>
            <ScrollView refreshControl={<RefreshControl onRefresh={this.onRefresh} refreshing={isRefresh}/>}>
            <Box>
                <AspectRatio w="100%" >
                    <Image source={{ uri: dat.shakemap}} alt="map gempa"/>
                </AspectRatio>
              </Box>  
              <Box px={5} py={2}>
                   <HStack>
                        <Ionicons name="location" color="black" size={18}/>
                        <Text ml={2}> {dat.wilayah}</Text>
                    </HStack>
                    <HStack>
                        <Ionicons name="calendar" color="black" size={18}/>
                        <Text ml={2}> {dat.tanggal}  |  {dat.jam}</Text>
                    </HStack> 
                    <HStack>
                        <Ionicons name="alert" color="black" size={18}/>
                        <Text ml={2}> {dat.potensi}</Text>
                    </HStack>
                    
                 </Box>
                 
                 </ScrollView>
           </>
        )
    }
}

export default quake;