import { forwardRef, InputHTMLAttributes } from 'react';
import { FieldErrors } from 'react-hook-form';
import { Label } from '../../atoms/Label/Label';
import { Wrapper } from './FormField.style';
import Input from '../../atoms/Input/Input';
import { Inputs } from '../../organisms/SearchForm/SearchForm';

export interface FormFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    Partial<DefaultProps> {
  id: string;
  name: string;
  placeholder: string;
  type: string;
}

interface DefaultProps {
  isError?: FieldErrors<Inputs>;
  label?: string;
}

type FormFieldElement = HTMLInputElement & FormFieldProps;

const FormField = forwardRef<FormFieldElement, FormFieldProps>(
  ({ id, name, placeholder, label, value, type, isError, ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          isError={isError}
          {...props}
        />
      </Wrapper>
    );
  }
);

FormField.displayName = 'FormField';
export default FormField;
