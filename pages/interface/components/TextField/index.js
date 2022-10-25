import { TextInput, TextInputProps } from '@primer/react';

/**
 * @param {TextInputProps} param0
 * @returns TextInputProps
 */
export function TextField({ children, ...props }) {
  return <TextInput {...props} />;
}
