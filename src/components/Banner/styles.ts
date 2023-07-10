import styled from 'styled-components'
import banner from '../../../public/images/banner.png'

export const Container = styled.div`
  height: 100vh;
  background-image: url(${banner});
  background-repeat: no-repeat;
  background-size: 100vw 100vh;

  button {
    padding: 10px 20px;
    background-color: rgba(245, 83, 128, 1);

    display: flex;
    align-items: center;
    justify-content: center;
    width: 15rem;
    height: 4rem;

    border-radius: 40px;
    margin-left: 5rem;
    margin-top: 10rem;

    color: #fff;
    font-weight: 700;
  }
`
