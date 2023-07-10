import { useForm } from "react-hook-form";
import {
  FormControl,
  FormLabel,
  Input,
  Box,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaPlus } from "react-icons/fa";
export const TaskCreator = ({ createNewTask }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const registerOptions = {
    name: {
      required: "Name is required",
      minLength: {
        value: 3,
        message: "Name must have At least 3 characters",
      },
    },
  };
  const onFormSubmit = (data) => {
    createNewTask(data.name, data.description);
    reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit(onFormSubmit)} className="formulario">
        <FormControl >
          <Flex direction="column" mt={5} >
            <FormLabel fontSize="2xl">Task Title</FormLabel>
            <Input
            fontWeight="semibold"
              fontSize="2xl"
              _hover={{
                transform: "scale(1.4)",
                transition: "transform 0.3s ease",
              }}
              type="text"
              placeholder="Enter new Task"
              {...register("name", registerOptions.name)}
              marginBottom={4} 
            />
            <small style={{color:"red"}}>{errors?.name && errors.name.message}</small>
            <FormLabel fontSize="2xl">Task Description</FormLabel>
            <Input
              fontSize="2xl"
              type="text"
              placeholder="Enter Description"
              {...register("description")}
              _hover={{
                transform: "scale(1.4)",
                transition: "transform 0.3s ease",
              }}
            />
          </Flex>
            <Button mt={5} type="submit" leftIcon={<FaPlus />} colorScheme="messenger">
              {" "}
              Add Task
            </Button>
        </FormControl>
      </form>
    </>
  );
};
