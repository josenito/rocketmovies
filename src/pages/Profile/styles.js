import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
   
  > header {
    width: 100%;
    height: 14.4rem;
    padding: 0 12.4rem;
    
    background: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    
    display: flex;
    align-items: center;

    a {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      font-size: 1.6rem;
      line-height: 2.1rem;
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }
  }
`

export const Form = styled.form`
  max-width: 34rem;
  margin: 3rem auto;

  > div:nth-child(4), button {
    margin-top: 2.4rem;
  }

  > div:nth-child(2) {
    margin-top: 6.4rem;
  }

`

export const Avatar = styled.div`
  position: relative;
  margin: -12rem auto 3.2rem;


  width: 18.6rem;
  height: 18.6rem;

  > img {
    width: 18.6rem;
    height: 18.6rem;
    border-radius: 50%;
  }

  > label {
    width: 4.8rem;
    height: 4.8rem;

    background-color: ${({ theme }) => theme.COLORS.PRIMARY};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 0.7rem;
    right: 0.7rem;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 2rem;
      height: 2rem;
    }
  }
`