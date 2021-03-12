import React, { forwardRef } from 'react';

import { Container, Label, Input } from './styles';

interface InputProps {
  label?: string;
  name?: string;
  type?: string;
  required?: boolean;
}

const Component = forwardRef<HTMLInputElement, InputProps>(({
  label,
  name,
  type,
  required,
  ...props
}, ref) => {
  return (
    <Container>
      <Label>{label}</Label>
      <Input
        {...props}
        name={name}
        ref={ref}
        type={type}
        required={required}
      />
    </Container>
  );
});

Component.defaultProps = {
  type: 'text',
  required: false,
};

export default Component;