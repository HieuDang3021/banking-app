"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { FormSchema, AUTHPAGETYPE } from "@/lib/utils";
import CustomFormField from "./CustomFormField";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { signIn, signUp, signUpWithEmail } from "@/lib/actions/user.action";

const AuthForm = ({ type }: { type: AUTHPAGETYPE }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const formSchema = FormSchema(type);

  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      // confirmPassword: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // Do something with the form values.
    setIsLoading(true);

    try {
      //sign up to Appwire and create plaid token

      if (type === AUTHPAGETYPE.signUp) {
        const newUser = await signUpWithEmail(values);
        setUser(newUser);
      } else if (type === AUTHPAGETYPE.signIn) {
        // const response = await signIn({
        //   email: values.email,
        //   password: values.password,
        // });
        // if (response) router.push("/");
      }
    } catch (error) {
      console.error("Error duiring form submission: ", error);
    } finally {
      setIsLoading(false);
    }

    const timeout = 5000; // Set timeout duration in milliseconds
    console.log(values);

    setTimeout(() => {
      // Add your logic here
      setIsLoading(false);
    }, timeout);
  };

  return (
    <section className="auth-form">
      <header className="flex flex-col gap-5 md:gap-8">
        <Link href="/" className="cursor-pointer flex items-center gap-1">
          <Image src="/icons/logo.svg" width={34} height={34} alt="logo" />
          <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
            Horizon
          </h1>
        </Link>
        <div className="flex flex-col gap-1 md:gap-3">
          <h1 className="text-24 lg:text-36 font-semibold text-gray-900">
            {user
              ? "Link Account"
              : type === AUTHPAGETYPE.signIn
              ? "Sign In"
              : "Sign Up"}
            <p className="text-16 font-normal text-gray-600">
              {user
                ? "Link your account to get started"
                : "Please enter your details"}
            </p>
          </h1>
        </div>
      </header>
      {user ? (
        <div className="flex flex-col gap-4">{/* PlaidLink */}</div>
      ) : (
        <>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              {type === AUTHPAGETYPE.signUp && (
                <>
                  <div className="flex gap-4">
                    <CustomFormField
                      control={form.control}
                      name="firstName"
                      label="First Name"
                      placeholder="ex: John"
                    />
                    <CustomFormField
                      control={form.control}
                      name="lastName"
                      label="Last Name"
                      placeholder="ex: Doe"
                    />
                  </div>
                  <CustomFormField
                    control={form.control}
                    name="address"
                    label="Address"
                    placeholder="Enter your address"
                  />
                  <div className="flex gap-4">
                    <CustomFormField
                      control={form.control}
                      name="state"
                      label="State"
                      placeholder="ex: VIC"
                    />
                    <CustomFormField
                      control={form.control}
                      name="postalCode"
                      label="Postal Code"
                      placeholder="ex: 1234"
                    />
                  </div>
                  <CustomFormField
                    control={form.control}
                    name="dateOfBirth"
                    label="Date of Birth"
                    placeholder="ex: yyyy-mm-dd"
                  />
                </>
              )}
              <CustomFormField
                control={form.control}
                name="email"
                label="Email"
                placeholder="Enter your email"
              />
              <CustomFormField
                control={form.control}
                name="password"
                label="Password"
                placeholder="Enter your password"
              />
              {type === AUTHPAGETYPE.signUp && (
                <CustomFormField
                  control={form.control}
                  name="confirmPassword"
                  label="Confirm Password"
                  placeholder="Re-enter your password"
                />
              )}
              <div className="flex flex-col gap-4">
                <Button type="submit" className="form-btn" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 size={20} className="animate-spin" />{" "}
                      <span>Loading...</span>
                    </>
                  ) : type === AUTHPAGETYPE.signIn ? (
                    "Sign In"
                  ) : (
                    "Sign Up"
                  )}
                </Button>
              </div>
            </form>
          </Form>
          <footer className="flex justify-center gap-1">
            <p className="text-14 font-normal text-gray-600">
              {type === AUTHPAGETYPE.signIn
                ? "Don't have an account?"
                : "Already have an account?"}
            </p>
            <Link
              href={type === AUTHPAGETYPE.signIn ? "/sign-up" : "/sign-in"}
              className="form-link"
            >
              {type === AUTHPAGETYPE.signIn ? "Sign Up" : "Sign In"}
            </Link>
          </footer>
        </>
      )}
    </section>
  );
};

export default AuthForm;
