import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  justify-content: center;
`;

export const Item = styled.li`
  margin-right: ${p => p.theme.space[5] - 2}px;
`;

// export const Button = styled.button`
//   margin: ${p => p.theme.space[0]};
//   padding: ${p => p.theme.space[0]};
//   width: 80px;
//   height: 30px;
//   font-size: ${p => p.theme.fontSizes.m};
//   /* text-transform: capitalize; */
//   background-color: ${p => p.theme.colors.white};
//   outline: 1px solid #aaa;
//   border-radius: ${p => p.theme.radii.normal};
//   box-shadow: 0 1px 4px #000;
//   border: ${p => p.theme.borders.none};
//   cursor: pointer;

//   &:hover {
//     outline: 1px solid blueviolet;
//     box-shadow: 0 2px 6px blueviolet;
//   }

//   &:active {
//     outline: 1px solid #aaa;
//     box-shadow: 0 1px 4px aqua;
//   }
// `;
