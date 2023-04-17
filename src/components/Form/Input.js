//import TextField from '@material-ui/core/TextField';
import styled from "styled-components";
import InputMask from "react-input-mask";

export default function Input({
  mask = "",
  maskChar = "",
  formatChars,
  variant = "outlined",
  value = "",
  onChange = () => 0,
  ...props
}) {
  return mask || maskChar ? (
    <InputMask
      mask={mask}
      maskChar={maskChar}
      value={value}
      onChange={onChange}
      {...(formatChars && { formatChars })}
    >
      {() => <StyledTextField {...props} variant={variant} />}
    </InputMask>
  ) : (
    <StyledTextField
      {...props}
      value={value}
      onChange={onChange}
      variant={variant}
    />
  );
}

const StyledTextField = styled.input`
  padding-left: 20px;
  letter-spacing: 1px;
  opacity: 0.8;
  font-size: 13px;
  height: 40px;
  width: 350px;
  border: 1px solid #ffffff;
  border-radius: 44px;
  margin-top: 10px !important;
  margin-bottom: 10px;
  background-color: #24263c;
  color: white;
`;
