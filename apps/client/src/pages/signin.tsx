import React from "react";
import { Signin } from "@repo/ui/signin";
import { useRouter } from "next/router";
import axios from "axios";

export default function SigninPage() {
  const router = useRouter();
  const handleSignin = async () => {
    async (username: string, password: string) => {
      const response = await axios.post("/api/signin", {
        username,
        password,
      });
      let data = response.data;
      localStorage.setItem("token", data.token);
      // window.location = "/"
      //   setUser({ userEmail: email, isLoading: false });
      router.push("/");
    };
  };
  return (
    <div>
      <Signin onClick={handleSignin} />
    </div>
  );
}
