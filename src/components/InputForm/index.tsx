import { InputHTMLAttributes } from 'react';

type InputFormProps = InputHTMLAttributes<HTMLInputElement>;

export const InputForm = (props: InputFormProps) => {
  return (
    <input {...props} className="bg-zinc-900 py-3 px-4 rounded text-sm placeholder:text-zinc-500 focus:outline-none" />
  );
};
