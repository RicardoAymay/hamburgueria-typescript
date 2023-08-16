import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Input } from "../../Components/Input/input";
import { ToastContainer } from "react-toastify";
import { iLoginData } from "../../Contexts/UserContext/userInterfaces";
import { useContext } from "react";
import { UserContext } from "../../Contexts/UserContext/UserContext";
import Loading from "../../Components/Loading/Loading";
import { StyledLoginMain } from "./styledLogin";
import bolinhas from "../../Imgs/bolinhas.png";
import logo from "../../Imgs/burguer.svg";
import bag from "../../Imgs/shopping-bag.svg";

const LoginSchema = yup
  .object({
    email: yup.string().required("O e-mail é obrigatório."),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres.")
      .required("A senha é obrigatória"),
  })
  .required();

const LoginPage = () => {
  const { submitLogin, loading } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginData>({
    resolver: yupResolver(LoginSchema),
  });

  if (loading) {
    return <Loading />;
  } else {
    return (
      <StyledLoginMain>
        <div className="divFormLogin">
          <h3>Login</h3>
          <form onSubmit={handleSubmit(submitLogin)}>
            <Input
              name="email"
              placeholder="Digite seu e-mail"
              type="email"
              labelText="Email"
              register={register}
              error={errors.email}
            />
            <Input
              name="password"
              type="password"
              labelText="Senha"
              placeholder="Digite sua senha"
              register={register}
              error={errors.password}
            />
            <button type="submit">Logar</button>
          </form>
          <p className="pCriarConta">
            Crie sua conta para saborear muitas delícias e matar sua fome!
          </p>
          <Link to={"/register"}>Registrar-se</Link>
        </div>
        <div className="divLoginImages">
          <img className="imgLogo" src={logo} alt="Burger Kenzie!" />
          <div className="sanduicheEbolinhas">
            <div className="divSanduiche">
              <figure>
                <img
                  className="imgBag"
                  src={bag}
                  alt="Compre já os melhores sanduíches!"
                />
              </figure>
              <p className="pSanduiche">
                A vida é como um sanduíche, é preciso recheá-la com os melhores
                ingredientes.
              </p>
            </div>
            <figure className="imgBolinhasMoldura">
              <img className="imgBolinhas" src={bolinhas} alt="" />
            </figure>
          </div>
        </div>
        <ToastContainer />
      </StyledLoginMain>
    );
  }
};
export default LoginPage;
