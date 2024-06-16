import { Typography } from "@mui/material";
import Image from "next/image";
import Button from "@mui/material/Button";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { isUserLoading, userEmailState, userState } from "store";
import Logo from "../assets/logo3.png";

function Appbar({}) {
  const router = useRouter();
  const userLoading = useRecoilValue(isUserLoading);
  const userEmail = useRecoilValue(userEmailState);
  const setUser = useSetRecoilState(userState);

  if (userLoading) {
    return <></>;
  }

  return (
    <div className="bg-gray-800 shadow">
      <div className="container mx-auto py-6 px-4 flex justify-between items-center">
        <div className="cursor-pointer" onClick={() => router.push("/")}>
          <Image className="w-36" src={Logo} alt="Logo image" />

          {/* <Typography variant="h6" className="text-white">
            w0wVista
          </Typography> */}
        </div>

        <nav className="flex items-center gap-5">
          {userEmail ? (
            <>
              <Button
                onClick={() => router.push("/additems")}
                style={{ color: "white" }}
              >
                Add New Product
              </Button>
              <Button
                onClick={() => router.push("/products")}
                className="text-white hover:text-gray-200 mr-4"
                style={{ color: "white" }}
              >
                View All Products
              </Button>
              <Button
                variant="contained"
                onClick={() => {
                  localStorage.setItem("token", "");
                  setUser({
                    isLoading: false,
                    userEmail: null,
                  });
                  router.push("/");
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                onClick={() => router.push("/signup")}
                className="text-white hover:text-gray-200 mr-4"
              >
                Signup
              </Button>
              <Button
                variant="contained"
                onClick={() => router.push("/signin")}
                className="text-white hover:text-gray-200"
              >
                Signin
              </Button>
            </>
          )}
        </nav>
      </div>
    </div>
  );
}

export default Appbar;
