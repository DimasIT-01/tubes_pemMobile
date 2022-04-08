import {ArrowBackIcon,Box,HStack,Image,Pressable,SearchIcon,Text} from "native-base";
  import React from "react";
  import { useNavigation } from "@react-navigation/core";
  
  const Header = ({ title, withLogo, withBackBtn }) => {
    const navigation = useNavigation();
  
    return (
      <Box bg="#b2e5ec" paddingX={15} paddingY={2}>
        <HStack alignItems="center" justifyContent="space-between">
          <HStack alignItems="center">
            {withLogo && (
              <Image
                source={require("../assets/rain.png")}
                size="xs"
                alt="icon"
                marginRight="2.5"
                resizeMode="contain"
              />
            )}
            {withBackBtn && (
              <Pressable onPress={() => navigation.goBack()}>
                <ArrowBackIcon  size="md" marginRight="3" />
              </Pressable>
            )}
            <Text fontWeight="semibold" fontSize="2xl">
              {title}
            </Text>
          </HStack>
        </HStack>
      </Box>
    );
  };
  
  export default Header;
  