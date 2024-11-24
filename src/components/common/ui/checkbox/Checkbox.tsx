import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  size?: 20 | 24;
  label: string;
  checked?: boolean;
  disabled?: boolean;
}

const Checkbox = ({
  size = 20,
  label,
  checked,
  disabled,
}: React.ButtonHTMLAttributes<HTMLButtonElement> & CheckboxProps) => {
  return <Wrapper>{label}</Wrapper>;
};

const Wrapper = styled.div``;

Checkbox.displayName = 'Checkbox';

export default Checkbox;
