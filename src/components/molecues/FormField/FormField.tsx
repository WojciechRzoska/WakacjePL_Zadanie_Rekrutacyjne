import { forwardRef, InputHTMLAttributes, Ref } from 'react';
import { Label } from '../../atoms/Label/Label';
import { Input } from '../../atoms/Input/Input';
import { Wrapper } from './FormField.style';

interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  placeholder: string;
  label: string;
  type: string;
}

type FormFieldElement = HTMLInputElement & FormFieldProps;

const FormField = forwardRef<FormFieldElement, FormFieldProps>(
  ({ id, name, placeholder, label, value, type, ...props }, ref) => {
    return (
      <Wrapper>
        <Label htmlFor={id}>{label}</Label>
        <Input
          name={name}
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
      </Wrapper>
    );
  }
);

FormField.displayName = 'FormField';
export default FormField;
