/** @jsxRuntime classic */
/** @jsx jsx */
import {jsx} from '@emotion/react';
import {
    Box,
    Button,
    Flex,
    FormControl,
    FormErrorMessage,
    FormLabel,
    Input,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalOverlay,
    Stack,
    useColorMode,
    useDisclosure,
    useToast
} from '@chakra-ui/react';

import {useForm} from 'react-hook-form';

import {useRouter} from 'next/router';

import Logo from '../components/Logo';
import {useAuth} from '../firebase/auth';

const AuthContent = ({register, errors, type, ...rest}) => (
    <Stack {...rest}>
        <Box as="a" href="/" aria-label="Back to homepage">
            <Logo pb={8} w="200px" mx="auto" />
        </Box>
        <FormControl isInvalid={errors.email && errors.email.message}>
            <FormLabel>Email Address</FormLabel>
            <Input
                autoFocus
                aria-label="Email Address"
                name="email"
                ref={register({
                    required: 'Please enter your email.'
                })}
                placeholder="name@domain.com"
            />
            <FormErrorMessage>{errors.email && errors.email.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={errors.pass && errors.pass.message}>
            <FormLabel>Password</FormLabel>
            <Input
                aria-label="Password"
                name="pass"
                type="password"
                ref={register({
                    required: 'Please enter a password.'
                })}
            />
            <FormErrorMessage>{errors.pass && errors.pass.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit" mt={4} variantColor="teal" variant="solid">
            {type}
        </Button>
    </Stack>
);

