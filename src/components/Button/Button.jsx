import { MdThumbUp, MdThumbsUpDown, MdThumbDown } from 'react-icons/md';
import { StyledButton } from './Button.styled';

export const Button = ({ name, click, children }) => {
  let icon = '';
  switch (name) {
    case 'good':
      icon = <MdThumbUp />;
      break;
    case 'neutral':
      icon = <MdThumbsUpDown />;
      break;
    case 'bad':
      icon = <MdThumbDown />;
      break;
    default:
      icon = null;
  }

  return (
    <StyledButton type="button" name={name} onClick={click}>
      {icon}
      {children}
    </StyledButton>
  );
};
