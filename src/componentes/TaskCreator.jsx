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
          <Flex direction="column" >
            <FormLabel>Task Title</FormLabel>
            <Input
              _hover={{
                transform: "scale(1.4)",
                transition: "transform 0.3s ease",
              }}
              type="text"
              placeholder="Enter new Task"
              {...register("name", registerOptions.name)}
              marginBottom={4} 
            />
            <small>{errors?.name && errors.name.message}</small>
            <FormLabel>Task Description</FormLabel>
            <Input
              type="text"
              placeholder="Enter Description"
              {...register("description")}
              _hover={{
                transform: "scale(1.4)",
                transition: "transform 0.3s ease",
              }}
            />
            <Button type="submit" leftIcon={<FaPlus />}>
              {" "}
              Add Task
            </Button>
          </Flex>
        </FormControl>
      </form>
    </>
  );
};
