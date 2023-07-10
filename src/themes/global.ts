import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    
    * {

        margin: 0;

        padding: 0;

        box-sizing: border-box;

    }



    :focus {

        outline: 0;
    }

    html {
      scroll-behavior: smooth;
    }


    body {
      color: #595959;
  /* background: linear-gradient(
      to bottom,
      transparent,
      rgb(var(--background-end-rgb))
    )
    rgb(var(--background-start-rgb)); */
    background-color: rgba(245, 188, 192, 1);
}

input {
  outline: none;
}

span {
  font-weight: 600;
}

button {
  &:hover {
    opacity: .8;
  }
}

h1,h2,h3,h4,span,p,a {
  font-family: 'Josefin Sans';
  color: #fff
}


h1 {
  font-size: calc(24px + 1.4vw);
  font-weight: 900;
}

h2 {
  font-size: calc(22px + 1vw);
  font-weight: 700;
}


h3 {
  font-size: calc(18px + .7vw);
  font-weight: 500;
}


h4 {
  font-size: calc(14px + .5vw);
  font-weight: 500;
}

p {
  font-size: calc(9px + .5vw);
  font-weight: 300;
}





    body, input, textarea, button {

        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        border: none;


    }

    button {
      cursor: pointer;
      border-radius: 5px;
      padding: calc(2px .5vw) calc(5px + .5vw)

    }

`
