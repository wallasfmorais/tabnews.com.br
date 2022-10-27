import { TextInput, TextInputProps, IconButton, ButtonGroup } from '@primer/react';
import { FiSearch } from 'react-icons/fi';

/**
 * @param {TextInputProps} param0
 * @returns TextInputProps
 */
export function TextField({ children, ...props }) {
  return <TextInput {...props} />;
}

export function SearchField({ children, ...props }) {
  return (
    <ButtonGroup
      css={{
        width: 'fill-available',
        maxWidth: '75%',
      }}>
      <TextInput
        css={{
          width: 'fill-available',
        }}
        {...props}
      />
      <IconButton
        aria-label="Search"
        icon={FiSearch}
        css={{
          borderRadius: [0, , , 0],
        }}
      />
    </ButtonGroup>
  );
}
