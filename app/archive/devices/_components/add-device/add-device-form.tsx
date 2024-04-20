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
      deviceName: "",
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
    router.push("/devices");
  };

  return (
    <Form {...addNewDeviceForm}>
      <form
        onSubmit={addNewDeviceForm.handleSubmit(onSubmit)}
        className="space flex flex-col gap-4"
      >
        <div className="flex flex-col md:flex-row gap-4 mb-10 mt-10">
          <div className="flex flex-col w-full justify-start gap-4">
            <FormField
              control={addNewDeviceForm.control}
              name="deviceName"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Device Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter device name" {...field} />
                  </FormControl>
                  <FormMessage />
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
                          <SelectItem value="NX-123">NX-123</SelectItem>
                          <SelectItem value="MP-28">MP-28</SelectItem>
                          <SelectItem value="NZ-3427">NZ-3427</SelectItem>
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
          </div>
          <div className="flex flex-col justify-start w-full gap-4">
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
                          <SelectItem value="France">France</SelectItem>
                          <SelectItem value="Germany">Germany</SelectItem>
                          <SelectItem value="USA">USA</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
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
                          <SelectItem value="Boston">Boston</SelectItem>
                          <SelectItem value="Dallas">Dallas</SelectItem>
                          <SelectItem value="Austin">Austin</SelectItem>
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
                          <SelectItem value="jdoe@mail.com">
                            jdoe@mail.com
                          </SelectItem>
                          <SelectItem value="ttompson@mail.com">
                            ttompson@mail.com
                          </SelectItem>
                          <SelectItem value="temp@mail.com">
                            temp@mail.com
                          </SelectItem>
                          <SelectItem value="temp@mail.com">
                            saturday@mail.com
                          </SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                </FormItem>
              )}
            />
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
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-4">
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button type="submit">Submit</Button>
          </DialogClose>
        </div>
      </form>
    </Form>
  );
};
