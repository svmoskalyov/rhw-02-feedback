import { StyledButton } from './Button.styled';

export const Button = ({ icon: Icon = null, type = 'button', click, children }) => {
  return (
    <StyledButton type={type} onClick={click}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};
