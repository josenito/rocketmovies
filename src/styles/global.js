import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :root {
    font-size: 62.5%;
  }
  
  body {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  ::-webkit-scrollbar {
    width: 0.8rem;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 0.8rem;
  }
  
  ::-webkit-scrollbar-thumb,
  ::-webkit-scrollbar-corner,
  ::-webkit-resizer {
    background: ${({ theme }) => theme.COLORS.PRIMARY};
  }
  
  ::-webkit-scrollbar-thumb:hover,
  ::-webkit-scrollbar-corner:hover,
  ::-webkit-resizer:hover {
    background: ${({ theme }) => theme.COLORS.PRIMARY_HOVER_SCROLLBAR};
  }


  body, input, button, textarea, h1 {
    font-family: 'Inter', serif;
    font-size: 1.6rem;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }
`