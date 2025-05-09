import React from "react";
import { FormControl, FormField, FormLabel, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";
import { z } from "zod";
import { formSchema, NameType } from "@/lib/utils";

type props = {
  control: Control<z.infer<typeof formSchema>>;
  name: NameType;
  label: string;
  placeholder: string;
};

const CustomFormField = ({ control, name, label, placeholder }: props) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                {...field}
                id={name}
                type={
                  name.toLowerCase().includes("password") ? "password" : "text"
                }
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default CustomFormField;
