import styled from 'styled-components'

import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 13.6rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  text-align: center;

  > h1 {
    font-size: 4.8rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY}
  }

  > p {
    font-size: 1.4rem;
    line-height: 1.4rem;
  }

  > h2 {
    font-size: 2.4rem;
    margin: 4.8rem 0;
  }

  > button {
    margin: 2.4rem 0 4.8rem;
  }

  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    font-size: 1.6rem;
    line-height: 2.1rem;

    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat;
  background-size: cover;
  opacity: 0.3;
`