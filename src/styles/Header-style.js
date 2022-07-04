import styled, { css } from "styled-components";

// theme을 변경하는 btn의 스타일링
const ThemeSwitchBtn = styled.button`
  ${({ theme }) => {
    // props로 전달받은 theme 속성을 사용한다.
    // App의 theme state가 변경되면 컴포넌트가 재 렌더링되며 다른 색상 값들을 갖게 된다.
    return css`
      background-color: ${theme.colors.primary};
      color: ${theme.colors.secondary};
      font-size: ${theme.fonts.size.base};
      border-radius: 2px;
    `;
  }}
`;

const CustomHeader = styled.div`
  ${({ theme }) => {
    return css`
      padding: 1rem;
      display: flex;
      justify-content: center;
      background-color: ${theme.colors.secondary};
    `;
  }}
`;

const styledComponents = { ThemeSwitchBtn, CustomHeader };

export default styledComponents;
