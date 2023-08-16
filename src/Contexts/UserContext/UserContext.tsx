import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../Axios";
import { SubmitHandler } from "react-hook-form/dist/types";

import {
  iLoginData,
  iResponseData,
  iUserValues,
  iUserProviderProps,
  iProductList,
} from "./userInterfaces";

export const UserContext = createContext({} as iUserValues);

export const UserProvider = ({ children }: iUserProviderProps) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [products, setProducts] = useState([] as iProductList[]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const autoLogin = async () => {
      const currentUser = JSON.parse(localStorage.getItem("userData") || "{}");
      if (currentUser.data === undefined) {
        setLoading(false);
        return;
      } else if (currentUser.data.user) {
        try {
          const autoRequest = await api.get("/products", {
            headers: {
              Authorization: `Bearer ${currentUser.data.accessToken}`,
            },
          });
          setUser(true);
          setProducts(autoRequest.data);
          navigate("/homepage");
          setLoading(false);
        } catch (error) {
          console.log(error);
          localStorage.clear();
          setLoading(false);
        }
      }
    };
    autoLogin();
  }, []);

  const submitLogin: SubmitHandler<iLoginData> = async (loginData) => {
    try {
      const apiResponse = await api.post<iResponseData>("/login", loginData);
      setUser(true);
      localStorage.setItem("userData", JSON.stringify(apiResponse));
      const token = apiResponse.data.accessToken;
      const getItens = await api.get("/products", {
        headers: { Authorization: `Bearer ${token}` },
      });

      setProducts(getItens.data);
      toast.success("Login Realizado");
      setTimeout(() => {
        navigate("/homepage");
      }, 500);
    } catch (error) {
      console.log(error);
      toast.error("Não foi possível completar a requisição");
    }
  };

  return (
    <UserContext.Provider value={{ submitLogin, user, products, loading, setProducts }}>
      {children}
    </UserContext.Provider>
  );
};
