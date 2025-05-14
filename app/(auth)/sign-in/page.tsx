import AuthForm from "@/components/AuthForm";
import { AUTHPAGETYPE } from "@/lib/utils";
import React from "react";

const SignIn = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AUTHPAGETYPE.signIn} />
    </section>
  );
};

export default SignIn;
