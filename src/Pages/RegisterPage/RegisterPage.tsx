import * as yup from "yup";
import { Input } from "../../Components/Input/input";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { api } from "../../Axios";
import bolinhas from "../../Imgs/bolinhas.png";
import logo from "../../Imgs/burguer.svg";
import bag from "../../Imgs/shopping-bag.svg";
import { RegisterMain } from "./styledRegisterMain";

interface IRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const registerSchema = yup
  .object({
    name: yup.string().required("O nome é obrigatório"),
    email: yup.string().required("O e-mail é obrigatório."),
    password: yup
      .string()
      .min(6, "A senha deve ter no mínimo 6 caracteres.")
      .required("A senha é obrigatória"),
    confirmPassword: yup
      .string()
      .oneOf(
        [yup.ref("password"), null],
        "A confirmação deve ser igual a senha"
      )
      .required("A confirmação de senha é obrigatória"),
  })
  .required();

const RegisterPage = () => {
  const navigate = useNavigate();

  const submitRegister: SubmitHandler<IRegisterData> = async (registerData) => {
    try {
      const sendRegister = await api.post("/users", {
        email: registerData.email,
        password: registerData.password,
        name: registerData.name,
      });
      toast.success("Cadastro realizado com sucesso");
      navigate("/");
    } catch (error) {
      toast.error("O cadastro não pôde ser realizado");
    }
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterData>({
    resolver: yupResolver(registerSchema),
  });

  return (
    <RegisterMain>
      <div className="divLoginImages">
        <img className="imgLogo" src={logo} alt="" />
        <div className="sanduicheEbolinhas">
          <div className="divSanduiche">
            <figure>
              <img className="imgBag" src={bag} alt="" />
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
      <div className="divRegisterSide">
        <div className="divRegisterHeader">
          <h3>Registro</h3>
          <Link to="/">Retornar para o login</Link>
        </div>
        <form onSubmit={handleSubmit(submitRegister)}>
          <Input
            name="name"
            type="text"
            labelText="Nome"
            register={register}
            error={errors.name}
            placeholder="Nome"
          />
          <Input
            name="email"
            type="email"
            labelText="Email"
            register={register}
            error={errors.email}
            placeholder="Email"
          />
          <Input
            name="password"
            type="password"
            labelText="Senha"
            register={register}
            error={errors.password}
            placeholder="Senha"
          />
          <Input
            name="confirmPassword"
            type="password"
            labelText="Confirmar Senha"
            register={register}
            error={errors.confirmPassword}
            placeholder="Confirme sua senha"
          />
          <button type="submit">Enviar</button>
        </form>
      </div>
      <ToastContainer />
    </RegisterMain>
  );
};

export default RegisterPage;
