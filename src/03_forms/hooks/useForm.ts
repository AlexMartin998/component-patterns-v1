import { ChangeEvent, useState } from 'react';

export const useForm = <T>(initState: T) => {
  const [formData, setFormData] = useState<T>(initState);

  const handleInputChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  const resetForm = () => setFormData({ ...initState });

  // TODO: ver lo q paso Dorian
  const isValidEmail = (email: string) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  return { ...formData, handleInputChange, resetForm, isValidEmail };
};
