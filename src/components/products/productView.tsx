import { Box, Center, Container, Heading, Image, SimpleGrid } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { IProduct } from "../../data";

interface IProps {
    products: IProduct[];
    header?: string;
}

const ProductView = ({ products, header }: IProps) => {
    return (
        <Container
            maxW="container.lg"
            bg="#FFFFFF"
        >
            {header &&
                <Heading
                    as="h2"
                    size="xl"
                    mb="100"
                    display="inline-block"
                    background="linear-gradient(0deg, rgba(240,202,199,1) 0%, rgba(240,202,199,0) 153%)"
                    padding="15px 30px"
                    borderRadius="45px"
                    boxShadow="-8px 8px 0px -2px #cd9b97"
                >
                    {header}
                </Heading>
            }
            <SimpleGrid columns={[1, 2, 3]} spacing="40px">
                {products.map((product: IProduct) => {
                    return (
                        <Link key={product.id} to={`/product/${product.id}`}>
                            <Box
                                position="relative"
                            >
                                <Center
                                    height="70px"
                                    width="70px"
                                    background="#5ccdb2"
                                    borderRadius="50%"
                                    color="white"
                                    font-weight="bold"
                                    position="absolute"
                                    top="-33px"
                                    right="27px"
                                    boxShadow="-4px 4px 4px -1px rgb(135 133 133 / 49%)"
                                    fontWeight="bold"
                                >
                                    <p>${product.price}</p>
                                </Center>
                                <Image
                                    boxSize="180px"
                                    src={product.image}
                                    alt={product.name}
                                    margin="0 auto"
                                    borderRadius="10px"
                                    padding="10px"
                                />
                                <Heading
                                    as="h3"
                                    size="sm"
                                    fontWeight="bold"
                                    textAlign="center"
                                >
                                    {product.name}
                                </Heading>
                                <p>{product.description}</p>
                            </Box>
                        </Link>
                    )
                })}
            </SimpleGrid>
        </Container>
    )
}

export default ProductView;