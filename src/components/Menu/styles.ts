import { cor } from '@/themes/cor'
import styled from 'styled-components'

type T = {
  opacity: number
}

interface I {
  isOpenBar: boolean
}

export const Container = styled.header<T>`
  padding: 1rem 4rem;
  position: fixed;
  width: 100vw;
  background-color: rgba;

  background-color: ${(h) => `rgb(245, 188, 192, ${h.opacity})`};
  backdrop-filter: blur(6px);

  display: flex;
  justify-content: space-between;
  transition: background-color 0.3s ease;

  h1 {
    color: rgba(27, 5, 65, 1);
    /* text-shadow: 2px 2px 4px #fff; */
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
      /* color: #fff; */
      font-weight: 800;

      width: 9rem;
      text-align: center;

      &:hover {
        text-decoration: underline;
        font-weight: 900;
      }
    }
  }
  @media (max-width: 450px) {
    justify-content: space-between;
    padding: 20px;
    .nav {
      display: none;
    }
  }
`

export const bar = styled.main`
  position: fixed;
  background-color: rgb(245, 188, 192, 0.9);
  backdrop-filter: blur(16px);

  padding: 2rem;
  border-radius: 8px;

  height: 80vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  align-items: center;

  left: 0;

  transition: 1s;

  div {
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }

  a {
    text-decoration: none;
    font-size: calc(0.5rem + 0.8vw);
    font-weight: 500;
    color: rgba(27, 5, 65, 1);
    /* color: #fff; */
    font-weight: 800;

    width: 9rem;
    text-align: center;

    &:hover {
      text-decoration: underline;
      font-weight: 900;
    }
  }
`
