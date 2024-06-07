import axios from "axios";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "store";

export function InitUser() {
  const setUser = useSetRecoilState(userState);
  const init = async () => {
    try {
      const response = await axios.get(`/api/admin/me`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });

      if (response.data.user) {
        setUser({
          isLoading: false,
          userEmail: response.data.user.username,
        });
      } else {
        setUser({
          isLoading: false,
          userEmail: null,
        });
      }
    } catch (e) {
      setUser({
        isLoading: false,
        userEmail: null,
      });
    }
  };

  useEffect(() => {
    init();
  }, []);

  return <></>;
}
