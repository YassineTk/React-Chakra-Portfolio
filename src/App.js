import React from "react";
import "./App.css";
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Button,
  useColorMode,
  Spacer,
  Tag,
  TagLabel

} from "@chakra-ui/react";

function App() {
  const { colorMode, toggleColorMode } = useColorMode("Dark");

  return (
    <div class="app">
    <div class="mode">
          <Button className="app__mode" onClick={toggleColorMode}>
            {colorMode === "light" ? "🌙" : "⚡"} 
          </Button>
          
          </div>
          <div class="app__actor">
          <Flex>
  <Avatar src="yassine.jpg" />
  <Box ml="3">
    <Text fontWeight="bold">
            Yassine TAKEDDINE
      <Badge className="badge"  ml="1" colorScheme="green">
              MA
      </Badge>
    </Text>
    <Text fontSize="sm">            Full Stack JavaScript Developer | Astronomie enthusiast
</Text>
  </Box>
</Flex>
</div>
      

          <div className="skills">
          <div>
          <h2> SkillSet </h2> </div>
          <div>
        <Tag marginTop="6" marginLeft="4" size="lg" colorScheme="blue" borderRadius="full">
   <Avatar
    src="https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png"
    size="xs"
    name="Segun Adebayo"
    ml={-1}
    mr={2}
  />
  <TagLabel>React</TagLabel>
  </Tag>
       <Tag marginTop="6" marginLeft="4" size="lg" colorScheme="blue" borderRadius="full">
   <Avatar
    src="https://www.edlibre.com/wp-content/uploads/nodejs-34c5f8cc37f0756108c490a903d80176.png"
    size="xs"
    name="Segun Adebayo"
    ml={-1}
    mr={2}
  />
  <TagLabel>Node</TagLabel>
  </Tag>
       
         <Tag marginTop="6" marginLeft="4" size="lg" colorScheme="blue" borderRadius="full">
   <Avatar
    src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/377/landscape/typescriptlang.png"
    size="xs"
    name="Segun Adebayo"
    ml={-1}
    mr={2}
  />
  <TagLabel>TypeScript</TagLabel>
  </Tag>

         <Tag marginTop="6" marginLeft="4" size="lg" colorScheme="blue" borderRadius="full">
   <Avatar
    src="https://wildgoosechase.net/wp-content/uploads/2019/02/graphql-logo-on-black.png"
    size="xs"
    name="Segun Adebayo"
    ml={-1}
    mr={2}
  />
  <TagLabel>GraphQL</TagLabel>
  </Tag>

         <Tag marginTop="6" marginLeft="4" size="lg" colorScheme="blue" borderRadius="full">
   <Avatar
    src="https://pbs.twimg.com/profile_images/1012243829477392387/m3cEA33V_400x400.jpg"
    size="xs"
    name="Segun Adebayo"
    ml={-1}
    mr={2}
  />
  <TagLabel>Firebase</TagLabel>
  </Tag>
  <Tag marginTop="6" marginLeft="4" size="lg" colorScheme="blue" borderRadius="full">
   <Avatar
    src="https://miro.medium.com/max/5236/1*jNGdZPcjAINHhBERw_gwPA.jpeg"
    size="xs"
    name="Segun Adebayo"
    ml={-1}
    mr={2}
  />
  <TagLabel>Figma</TagLabel>
  </Tag>

  </div>
            
        </div>
     
    </div>
  );
}

export default App;
