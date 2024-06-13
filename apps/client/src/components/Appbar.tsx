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

  // console.log("Useremail - ", userEmail);

  if (userLoading) {
    return <></>;
  }

  if (userEmail) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
          margin: "25px",
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            router.push("/");
          }}
        >
          <Typography variant={"h6"}>w0wVista</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10, display: "flex" }}>
            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  router.push("/additems");
                }}
              >
                Add New Product
              </Button>
            </div>

            <div style={{ marginRight: 10 }}>
              <Button
                onClick={() => {
                  router.push("/products");
                }}
              >
                View All Products
              </Button>
            </div>

            <Button
              variant={"contained"}
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
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 4,
          zIndex: 1,
          margin: "25px",
        }}
      >
        <div
          style={{ marginLeft: 10, cursor: "pointer" }}
          onClick={() => {
            router.push("/").then(() => router.reload());
          }}
        >
          <Typography variant={"h6"}>w0wVista</Typography>
        </div>

        <div style={{ display: "flex" }}>
          <div style={{ marginRight: 10 }}>
            <Button
              variant={"contained"}
              onClick={() => {
                router.push("/signup");
              }}
            >
              Signup
            </Button>
          </div>
          <div>
            <Button
              variant={"contained"}
              onClick={() => {
                router.push("/signin");
              }}
            >
              Signin
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

export default Appbar;
