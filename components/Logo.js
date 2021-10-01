/** @jsxRuntime classic */
/** @jsx jsx */
import { useColorMode, Box } from '@chakra-ui/react';
import { jsx } from '@emotion/react';

const Logo = (props) => {
    const { colorMode } = useColorMode();

    return (
        <Box
            as="svg"
            mt={1}
            viewBox="0 0 5000 5000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            
        </Box>
    );
};

export default Logo;
