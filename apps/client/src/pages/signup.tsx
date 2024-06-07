import React from "react";
import { Signup } from "@repo/ui/signup";
import axios from "axios";
import { useRouter } from "next/router";

export default function SignupPage() {
  const router = useRouter();

  const handleSignup = async (username: string, password: string) => {
    const response = await axios.post("/api/signup", {
      username,
      password,
    });
    let data = response.data;
    localStorage.setItem("token", data.token);
    router.push("/signin");
  };

  return (
    <div>
      <Signup onClick={handleSignup} />
    </div>
  );
}
