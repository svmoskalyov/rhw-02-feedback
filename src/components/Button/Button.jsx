import { StyledButton } from './Button.styled';

export const Button = ({ icon: Icon = null, type = 'button', children }) => {
  return (
    <StyledButton type={type}>
      {Icon && <Icon />}
      {children}
    </StyledButton>
  );
};
