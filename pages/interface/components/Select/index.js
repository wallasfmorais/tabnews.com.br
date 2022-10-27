import { Select } from '@primer/react';

export function SelectField({ options, ...props }) {
  return (
    <Select {...props}>
      {options &&
        options.map(({ text, ...props }) => {
          return <Select.Option {...props}>{text}</Select.Option>;
        })}
    </Select>
  );
}
