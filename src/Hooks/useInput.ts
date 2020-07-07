import { useState } from "react";

export default (defaultValue: string) => {
  const [value, setValue] = useState<string>(defaultValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = e;
    setValue(value);
  };

  return { value, onChange, setValue };
};
