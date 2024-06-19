import React from "react";
import { Signin } from "@repo/ui/signin";
import { useRouter } from "next/router";
import axios from "axios";
import { signIn } from "next-auth/react";

export default function SigninPage() {
  const router = useRouter();
  return (
    <div>
      <Signin
        onClick={async (username, password) => {
          try {
            const response = await axios.post("/api/signin", {
              username,
              password,
            });
            const data = response.data;
            console.log("Signin data - ", data);
            localStorage.setItem("token", data.token);
            router.push("/").then(() => router.reload());
          } catch (error: any) {
            // console.error("Signin error:", error.response.data.message.issues);
            //@ts-ignore
            const err = error.response.data.message.issues;
            alert(`Signin Failed. Either wrong email or password too short}`);
          }
        }}
        nextAuthSignIn={(provider) => signIn(provider)}
      />
    </div>
  );
}
