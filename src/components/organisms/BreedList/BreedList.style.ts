import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  & > div > div {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    gap: 30px;
  }

  @media (min-width: 57em) {
    & > div > div {
      display: grid;
      grid-template-columns: 3fr 3fr;
      grid-gap: 50px;
    }
  }
`;
