"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { addDeviceSchema } from "@/schemas";
import { DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const AddDeviceForm = ({
  onDataAction,
}: {
  onDataAction: (data: z.infer<typeof addDeviceSchema>) => Promise<{
    message: string;
    device?: z.infer<typeof addDeviceSchema>;
    issues?: string[] | undefined;
  }>;
}) => {
  const addNewDeviceForm = useForm<z.infer<typeof addDeviceSchema>>({
    resolver: zodResolver(addDeviceSchema),
    defaultValues: {
      streetAddress: "",
      city: "",
      country: "",
      model: "",
      owner: "",
      SIM: "",
    },
  });

  const router = useRouter();

  const onSubmit = async (data: z.infer<typeof addDeviceSchema>) => {
    await onDataAction(data);
    router.refresh();
  };

  return (
    <Form {...addNewDeviceForm}>
      <form
        onSubmit={addNewDeviceForm.handleSubmit(onSubmit)}
        className="space flex flex-col gap-4"
      >
        <FormField
          control={addNewDeviceForm.control}
          name="streetAddress"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Street address</FormLabel>
              <FormControl>
                <Input placeholder="Enter street address" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={addNewDeviceForm.control}
          name="city"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>City</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="cityA">City A</SelectItem>
                      <SelectItem value="cityB">City B</SelectItem>
                      <SelectItem value="cityC">City C</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={addNewDeviceForm.control}
          name="country"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Country</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select country" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="countryA">Country A</SelectItem>
                      <SelectItem value="countryB">Country B</SelectItem>
                      <SelectItem value="countryC">Country C</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={addNewDeviceForm.control}
          name="model"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Model</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="modelA">Model A</SelectItem>
                      <SelectItem value="modelB">Model B</SelectItem>
                      <SelectItem value="modelC">Model C</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={addNewDeviceForm.control}
          name="owner"
          render={({ field }) => (
            <FormItem className="w-full">
              <FormLabel>Owner</FormLabel>
              <FormControl>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select owner" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="ownerA">Owner A</SelectItem>
                      <SelectItem value="ownerB">Owner B</SelectItem>
                      <SelectItem value="ownerC">Owner C</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={addNewDeviceForm.control}
          name="SIM"
          render={({ field }) => (
            <FormItem>
              <FormLabel>SIM</FormLabel>
              <FormControl>
                <Input placeholder="Enter SIM number" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose asChild>
          <Button type="submit">Submit</Button>
        </DialogClose>
      </form>
    </Form>
  );
};
