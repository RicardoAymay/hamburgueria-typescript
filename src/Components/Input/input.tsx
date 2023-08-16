export type IInputData = {
    name: string,
    labelText: string,
    register: any,
    error: any,
    type:string
    placeholder?: string
}

export const Input = ({ name, labelText, register, error , ...rest}:IInputData) => {

    return (
  
      <label htmlFor={name}>
        {labelText}
        <input  id={name}  {...rest} {...register(name)}/>
        {error && <span>{error?.message}</span>}
      </label>
  
    );
  }