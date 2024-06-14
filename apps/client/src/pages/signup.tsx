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
          const response = await axios.post("/api/signup", {
            username,
            password,
          });
          let data = response.data;
          localStorage.setItem("token", data.token);
          router.push("/signin");
        }}
        nextAuthSignIn={(provider) => signIn(provider)}
      />
    </div>
  );
}
