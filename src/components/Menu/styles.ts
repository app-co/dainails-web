import styled from 'styled-components'

export const Container = styled.div`
  padding: 1rem 4rem;

  display: flex;
  justify-content: space-between;

  h1 {
    color: rgba(27, 5, 65, 1);
  }

  .nav {
    align-items: center;
    justify-content: space-between;
    width: calc(10rem + 40vw);

    display: flex;

    a {
      text-decoration: none;
      font-size: calc(0.5rem + 0.5vw);
      font-weight: 500;
      color: rgba(27, 5, 65, 1);
      width: 9rem;
      text-align: center;

      &:hover {
        text-decoration: underline;
        font-weight: 900;
      }
    }
  }
`
