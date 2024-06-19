import React from "react";
import { Signup } from "@repo/ui/signup";
import axios from "axios";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";

export default function SignupPage() {
  const router = useRouter();

  return (
    <div>
      <Signup
        onClick={async (username, password) => {
          try {
            const response = await axios.post("/api/signup", {
              username,
              password,
            });
            let data = response.data;
            localStorage.setItem("token", data.token);
            router.push("/signin");
          } catch (erro: any) {
            // console.error("Signup error:", error.response.data.message.issues);
            //@ts-ignore
            // const err = error.response.data.message.issues;
            alert(`Signup Failed. Either wrong email or password too short}`);
          }
        }}
        nextAuthSignIn={(provider) => signIn(provider)}
      />
    </div>
  );
}
