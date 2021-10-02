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
    Image,
    Spacer
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import NextLink from "next/link";
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from "@chakra-ui/react"
import TransactionCard from "@/components/TransactionCard";
import { useRouter } from 'next/router'

const flower1 = {
  productID: 0,
  imageUrl:
    "https://www.almanac.com/sites/default/files/image_nodes/tulips-multicolored.jpg",
  imageAlt: "Flower 1",
  title: "A Modern Tulip",
  formattedPrice: "R 1,999.99",
  charity: "Coalition for Rainforest Nations",
  desc: "The Coalition for Rainforest Nations is unique in that it’s an intergovernmental organization of over 50 rainforest nations around the world, from Ecuador to Bangladesh to Fiji. It was formed after Papua New Guinea’s Prime Minister Michael Somare gave a speech in 2005, and since then it’s been partnering directly with governments and communities to protect their rainforests.",
};

const flower2 = {
  productID: 0,
  imageUrl:
    "https://www.thespruce.com/thmb/6eQ9oR98za1HSk4ZnTpi743GOYA=/4508x2536/smart/filters:no_upscale()/beautiful-lily-varieties-to-grow-4136203-3-ecb49980016c4a498a90d6c379307ddd.jpg",
  imageAlt: "Flower 2",
  title: "A Past Lily",
  formattedPrice: "R 2,999.99",
  charity: "Clean Air Task Force",
  desc: "The Clean Air Task Force is a US-based non-governmental organization (NGO) that has been working to reduce air pollution since its founding in 1996. It led a successful campaign to reduce the pollution caused by coal-fired power plants in the US, helped limit the US power sector’s CO2 emissions, and helped establish regulations of diesel, shipping, and methane emissions.",
};

const flower3 = {
  productID: 0,
  imageUrl:
    "https://www.almanac.com/sites/default/files/image_nodes/rose-peach.jpg",
  imageAlt: "Flower 3",
  title: "A Future Rose",
  formattedPrice: "R 5,999.99",
  charity: "Sandbag",
  desc: "Based in London and Brussels, Sandbag is a nonprofit think tank that uses data analysis to help build evidence-based climate policy. It advocates for carbon capture and storage in the EU, pushes for strong carbon pricing, and works to accelerate the coal phase-out in Europe so as to ensure all plants are closed before 2030.",
};

const flower4 = {
  productID: 0,
  imageUrl:
    "https://www.gardentech.com/-/media/Images/GardenTech-NA/US/blog/how-to-grow-sunflowers/sunflower-field-h.jpg",
  imageAlt: "Flower 4",
  title: "A Sunflower",
  formattedPrice: "R 999.99",
  charity: "Climate Emergency Fund",
  desc: "The Climate Emergency Fund is different from the groups listed above. It was founded recently — July 2019 — with the goal of quickly getting money to groups engaged in climate protest. It has already raised and disbursed several hundreds of thousands of dollars in grants to groups it has vetted. The grantees range from the well-established 350.org to the fledgling Extinction Rebellion, an activist movement that uses nonviolent civil disobedience — like filling the streets and blocking intersections — to demand governments do more to stave off mass extinction.",
};

const flower5 = {
  productID: 0,
  imageUrl:
    "https://www.almanac.com/sites/default/files/styles/opengraph/public/image_nodes/shasta-daisies-plant-grow.jpg?itok=1N6wp2N8",
  imageAlt: "Flower 5",
  title: "A Daisy",
  formattedPrice: "R 699.99",
  charity: "Waterkeeper Alliance",
  desc: "Waterkeeper Alliance is a global movement united for clean, healthy, and abundant water for all people and the planet, on a mission to protect our right to clean water in communities around the world. Today, Waterkeeper Alliance is made up of over 300 Waterkeeper Organizations and Affiliates protecting rivers, lakes and coastal waterways on 6 continents. Waterkeeper Alliance's goal is swimmable, drinkable and fishable water everywhere and they accomplish this by holding polluters accountable and connecting local Waterkeeper organizations worldwide. ",
};

const flower6 = {
  productID: 0,
  imageUrl:
    "https://images.unsplash.com/photo-1508788397430-55907b348ba8?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVkd29vZCUyMHRyZWV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
  imageAlt: "Flower 6",
  title: "A Redwood Tree",
  formattedPrice: "R 10,999.99",
  charity: "Coral Reef Alliance",
  desc: "The Coral Reef Alliance (CORAL) is a non-profit, environmental NGO that is on a mission to save the world's coral reefs. We work collaboratively with communities to reduce direct threats to reefs in ways that provide lasting benefits to people and wildlife. In parallel, CORAL is actively expanding the scientific understanding of how corals adapt to climate change and applying this information to give reefs the best chance to thrive for generations to come. This combined expertise uniquely positions us to achieve our mission by rallying the conservation community around scalable and effective solutions for coral reefs. ",
};

const FlowerProduct = ({product}) => {
  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()
    router.push("/gifts")
  }
    return (
      
      <Box _hover={{
        bg: "gray.100",
        cursor: "pointer",
      }} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={handleClick}>
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
            <Stat>
  <StatLabel><b>Donations so far:</b></StatLabel>
  <StatNumber>R654500.00</StatNumber>
</Stat>

                <Stack direction={["row"]} spacing="28px">
                <FlowerProduct product={flower1}/>
                <FlowerProduct product={flower2}/>
                <FlowerProduct product={flower3}/>
                </Stack>
                
                <Box p="6"></Box>

                <Stack direction={["row"]} spacing="28px">
                <FlowerProduct product={flower4}/>
                <FlowerProduct product={flower5}/>
                <FlowerProduct product={flower6}/>
                </Stack>
                
            </Flex>
        </Center>
    );
}
