import { Link } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import { BsCart3 } from 'react-icons/bs';
import routes from './routes';
import { selectCart } from './components/cart/cartSlice';

function App() {

  const cart = useAppSelector(selectCart);

  return (
    <Box>
      <Box
        bg="#FFFFFF"
        pt="5"
        pb="5"
      >
        <Container maxW="container.xl">
          <Flex justify="space-between">
            <Box>
              <Link to={`/`}>
                <Heading as="h2" size="sm">Simple Online Store</Heading>
              </Link>
            </Box>
            <Link to={`/cart`}>
              <Box>
                <BsCart3
                  style={{
                    display: 'inline-block',
                    fontSize: 25
                  }} /> <span>{cart.length}</span>
              </Box>
            </Link>
          </Flex>
        </Container>
      </Box>
      <Box>
        {routes}
      </Box>
    </Box>
  );
}

export default App;
