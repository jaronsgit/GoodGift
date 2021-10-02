import { useForm } from "react-hook-form";
import "react"
import { addTransactionData } from "../firebase/auth";

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
    const { handleSubmit, register, errors } = useForm();
    const toast = useToast()
    async function onSubmit(data){

        let transactionID = await addTransactionData(0,data.message, data.receivers_name, data.email, data.your_name, "test");
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
  
            
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Center>
        <Stack>
            <FormControl>
                <FormLabel htmlFor="your_name_label">Your Name</FormLabel>
                <Input name="your_name" placeholder="Claire" ref={register({ required: true })}/>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="receivers_name_label">Receiver's Name</FormLabel>
                <Input name="receivers_name" placeholder="Joe" ref={register({ required: true })}/>
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="email_label">Email</FormLabel>
                <Input name="email" placeholder="123@example.com" ref={register({ required: true })} />
            </FormControl>

            <FormControl>
                <FormLabel htmlFor="message_label">Message</FormLabel>
                <Textarea name="message" placeholder='"Have a great day!"' ref={register({ required: true })} />
            </FormControl>
            <Button type='submit' color='white' bg='gray.900' width='100%' h={55} mt={5}>Proceed to Payment</Button>
        </Stack>
        </Center>
      </form>
    );
  }