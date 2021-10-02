import {
    Heading,
    Avatar,
    Box,
    Center,
    Text,
    Stack,
    Button,
    Link,
    Badge,
    useColorModeValue,
    Flex,
    Image
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

import TransactionCard from "@/components/TransactionCard";

const flower1 = {
    imageUrl: "https://www.almanac.com/sites/default/files/image_nodes/tulips-multicolored.jpg",
    imageAlt: "Flower 1",
    title: "A Modern Tulip",
    formattedPrice: "R 1,999.99",
    charity: "Coalition for Rainforest Nations",
    desc: "The Coalition for Rainforest Nations is unique in that it’s an intergovernmental organization of over 50 rainforest nations around the world, from Ecuador to Bangladesh to Fiji. It was formed after Papua New Guinea’s Prime Minister Michael Somare gave a speech in 2005, and since then it’s been partnering directly with governments and communities to protect their rainforests."
}

  const flower2 = {
      imageUrl: "https://www.thespruce.com/thmb/6eQ9oR98za1HSk4ZnTpi743GOYA=/4508x2536/smart/filters:no_upscale()/beautiful-lily-varieties-to-grow-4136203-3-ecb49980016c4a498a90d6c379307ddd.jpg",
      imageAlt: "Flower 2",
      title: "A Past Lily",
      formattedPrice: "R 2,999.99",
      charity: "Clean Air Task Force",
      desc: "The Clean Air Task Force is a US-based non-governmental organization (NGO) that has been working to reduce air pollution since its founding in 1996. It led a successful campaign to reduce the pollution caused by coal-fired power plants in the US, helped limit the US power sector’s CO2 emissions, and helped establish regulations of diesel, shipping, and methane emissions."
    }

    const flower3 = {
        imageUrl: "https://www.almanac.com/sites/default/files/image_nodes/rose-peach.jpg",
        imageAlt: "Flower 3",
        title: "A Future Rose",
        formattedPrice: "R 5,999.99",
        charity: "Sandbag",
        desc: "Based in London and Brussels, Sandbag is a nonprofit think tank that uses data analysis to help build evidence-based climate policy. It advocates for carbon capture and storage in the EU, pushes for strong carbon pricing, and works to accelerate the coal phase-out in Europe so as to ensure all plants are closed before 2030."
        }

const FlowerProduct = ({product}) => {
    
    return (
      <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
        <Image src={product.imageUrl} alt={product.imageAlt} />
  
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2"
            >
            </Box>
          </Box>
  
          <Box
            mt="1"
            fontWeight="semibold"
            as="h4"
            lineHeight="tight"
            isTruncated
          >
            {product.title}
          </Box>
  
          <Box>
            {product.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
            
            </Box>
          </Box>
  
          <Box d="flex" mt="2" alignItems="center">
          <b>{product.charity}</b>
          </Box>
          <Box>
          {product.desc}
          </Box>
        </Box>
      </Box>
    )
  }

export default function Shop() {
    return (
        <Center py={6}>
            <Flex w="100%" flexDirection="column" alignItems="center">
                <Stack direction={["column", "row"]} spacing="28px">
                <FlowerProduct product={flower1}/>
                <FlowerProduct product={flower2}/>
                <FlowerProduct product={flower3}/>
                </Stack>

            </Flex>
        </Center>
    );
}