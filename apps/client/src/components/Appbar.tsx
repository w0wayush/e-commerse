import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { useRouter } from "next/router";
import { isUserLoading, userEmailState, userState } from "store";

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
          <Typography variant="h6" className="text-white">
            w0wVista
          </Typography>
        </div>

        <nav className="flex items-center">
          {userEmail ? (
            <>
              <Button
                onClick={() => router.push("/additems")}
                className="text-white hover:text-gray-200 mr-4"
              >
                Add New Product
              </Button>
              <Button
                onClick={() => router.push("/products")}
                className="text-white hover:text-gray-200 mr-4"
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
