import { Box, Flex, Image, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import Star from "../star.png";

interface IProps {
    numStars: number;
    text: string;
    reviewer: string;
}

const Testimonials = ({ numStars, text, reviewer }: IProps) => {

    const displayStar = () => {
        return [...Array(numStars)].map(() => <Image height="50px" widht="auto" src={Star} alt="star" />)
    }

    return (
        <UnorderedList>
            <ListItem listStyleType="none">
                <Box>
                    <Flex mb="3">
                        {displayStar()}
                    </Flex>
                    <Text
                        fontSize="large"
                        fontStyle="italic"
                        fontWeight="bold"
                    >
                        "{text}"
                    </Text>
                    <Text textAlign="right">- {reviewer}</Text>
                </Box>
            </ListItem>
        </UnorderedList>
    )
}

export default Testimonials;