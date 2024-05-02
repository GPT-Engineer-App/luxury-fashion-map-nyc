import React from "react";
import { Box, Heading, Text, SimpleGrid, Image, Link, VStack, HStack, Container } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaLink } from "react-icons/fa";

// Mock data for luxury fashion stores
const stores = [
  {
    id: 1,
    name: "Gucci Fifth Avenue",
    address: "725 5th Ave, New York, NY 10022",
    website: "https://www.gucci.com",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHdWNjaSUyMHN0b3JlJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzE0NjY2ODUwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Louis Vuitton Manhattan",
    address: "1 East 57th Street, New York, NY 10022",
    website: "https://www.louisvuitton.com",
    imageUrl: "https://images.unsplash.com/photo-1526931072202-5ba10196c45d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxMb3VpcyUyMFZ1aXR0b24lMjBzdG9yZSUyMGV4dGVyaW9yfGVufDB8fHx8MTcxNDY2Njg1MHww&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Prada Broadway",
    address: "575 Broadway, New York, NY 10012",
    website: "https://www.prada.com",
    imageUrl: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxQcmFkYSUyMHN0b3JlJTIwZXh0ZXJpb3J8ZW58MHx8fHwxNzE0NjY2ODUwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  return (
    <Container maxW="container.xl" py={5}>
      <Heading as="h1" mb={6} textAlign="center">
        Luxury Fashion Stores in NYC
      </Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {stores.map((store) => (
          <Box key={store.id} p={5} shadow="md" borderWidth="1px" borderRadius="lg">
            <VStack spacing={4}>
              <Image borderRadius="md" src={store.imageUrl} alt={`Image of ${store.name}`} objectFit="cover" htmlWidth="100%" htmlHeight="200px" />
              <Heading as="h3" size="lg">
                {store.name}
              </Heading>
              <Text fontSize="md">
                <FaMapMarkerAlt /> {store.address}
              </Text>
              <HStack spacing={2}>
                <FaLink />
                <Link href={store.website} isExternal color="blue.500">
                  Visit Website
                </Link>
              </HStack>
            </VStack>
          </Box>
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Index;
