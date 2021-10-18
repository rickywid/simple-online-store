import { Link } from 'react-router-dom';
import { useAppSelector } from './app/hooks';
import { Image, Box, Container, Flex } from '@chakra-ui/react';
import { BsCart3 } from 'react-icons/bs';
// import Logo from './sandwich.png';
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
                <Image
                  // src={Logo}
                  display="inline-block"
                  pr={4}
                  height="35px"
                />
                Simple online store
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
