import { useForm } from "react-hook-form";
import "react"
import { addTransactionData } from "../firebase/auth";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
import {useAuth } from "../firebase/auth";
import {
    Button,
    Input,
    useToast,
    Textarea,
    FormControl,
    FormErrorMessage,
    ErrorMessage,
    FormLabel,
    Stack,
    Text,
    Center
  } from "@chakra-ui/react";


export default function send() {
    const auth = useAuth();
    const { handleSubmit, register, errors } = useForm();
    const toast = useToast()
    async function onSubmit(data){

        let transactionID = await addTransactionData(0,data.message, data.receivers_name, data.email, data.your_name, auth.user.email);
        if (transactionID == null){
            toast({
                title: "Payment Error...",
                status: "error",
                duration: 4000,
            });
        }
        else{
            toast({
                title: "Payment Aprroved!",
                status: "success",
                duration: 4000,
            });
        }
    };

    function AlertPop (props) {
        return (
          <Alert status="error">
            {/* <AlertIcon /> */}
            <AlertTitle mr={2} fontSize="xs">{props.title}</AlertTitle>
          </Alert>
        );
       }
  
            
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center>
        <Stack>
            <FormControl>
                <FormLabel htmlFor="your_name_label">Your Name</FormLabel>
                <Input name="your_name" placeholder="Claire" ref={register({ required: "Your name is required." })}/>
                {errors.your_name && <AlertPop title={errors.your_name.message} />}
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="receivers_name_label">Receiver's Name</FormLabel>
                <Input name="receivers_name" placeholder="Joe" ref={register({ required: "The receiver's name is required." })}/>
                {errors.receivers_name && <AlertPop title={errors.receivers_name.message} />}
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="email_label">Receiver Email</FormLabel>
                <Input name="email" placeholder="123@example.com" ref={register({required: "The receiver's name is required.", pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "Please enter a valid email for the receiver."}})} />
                {errors.email && <AlertPop title={errors.email.message} />}
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="message_label">Message</FormLabel>
                <Textarea name="message" placeholder='"Have a great day!"' ref={register({ required: false })} />
            </FormControl>
            <Button type='submit' color='white' bg='gray.900' width='100%' h={55} mt={5}>Proceed to Payment</Button>
        </Stack>
        </Center>
      </form>
    );
  }