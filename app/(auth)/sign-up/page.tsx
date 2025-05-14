import AuthForm from "@/components/AuthForm";
import { AUTHPAGETYPE } from "@/lib/utils";
import React from "react";

const SignUp = () => {
  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type={AUTHPAGETYPE.signUp} />
    </section>
  );
};

export default SignUp;
