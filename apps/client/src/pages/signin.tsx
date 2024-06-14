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
            localStorage.setItem("token", data.token);
            router.push("/").then(() => router.reload());
          } catch (error) {
            console.error("Signin error:", error);
            alert("Signin failed. Please try again.");
          }
        }}
        nextAuthSignIn={(provider) => signIn(provider)}
      />
    </div>
  );
}
