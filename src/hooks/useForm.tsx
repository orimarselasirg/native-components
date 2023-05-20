import {useState} from 'react';

// export const useForm = (state: Form) => {
//   const initialState: Form = {
//     name: '',
//     email: '',
//     phone: '',
//   };
//   const [form, setForm] = useState<Form>(initialState);
//   const onChange = (value: string, field: string) => {
//     setForm({
//       ...form,
//       [field]: value,
//     });
//   };

//   return {
//     ...form,
//     onChange,
//   };

// };

export const useForm = <T extends Object>(formState: T) => {
  const [state, setState] = useState(formState);

  const onchange = <K extends Object>(value:K | boolean, field: keyof T) =>{
    setState({
      ...state,
        [field]: value,
    });
  };

  return {
    ...state,
    formState: state,
    onchange,
  };
};
