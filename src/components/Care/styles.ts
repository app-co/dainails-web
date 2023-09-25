import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;

  padding: 2rem;

  /* align-items: center; */
  /* justify-content: center; */

  margin: 2rem auto;
  color: rgba(27, 5, 65, 1);

  h1 {
    color: rgba(27, 5, 65, 1);
  }

  .box {
    gap: 4rem;
    display: flex;
    align-items: center;
    /* justify-content: space-around; */

    padding: 0 4rem;
    width: 70%;

    .texts {
      display: flex;
      flex-direction: column;
      height: 250px;

      justify-content: space-between;
      h3 {
        color: rgba(27, 5, 65, 1);
        margin: 5px auto;
        font-weight: 600;
      }

      li {
        margin-left: 3rem;
      }
    }
  }
`
