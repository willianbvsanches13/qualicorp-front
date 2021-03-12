import React, { forwardRef } from 'react';

import { Container, Label, Input, ContentRadio } from './styles';

interface ValueProps {
  name: string;
  value: string;
}

interface InputProps {
  label?: string;
  name?: string;
  required?: boolean;
  value: Array<ValueProps>;
}

const Component = forwardRef<HTMLInputElement, InputProps>(({
  label,
  name,
  required,
  value,
  ...props
}, ref) => {
  return (
    <Container>
      <Label>{label}</Label>
      {value.map((item) => (
        <ContentRadio key={item.value} >
          <Input
            {...props}
            name={name}
            ref={ref}
            required={required}
            value={item.value}
            type="radio"
          />
          <span>{item.name}</span>
        </ContentRadio>
      ))}
    </Container>
  );
});

Component.defaultProps = {
  required: false,
  label: 'label',
  value: [{ name: 'Radio1', value: 'radio1' }],
};

export default Component;