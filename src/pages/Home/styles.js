import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    padding: 5rem 12.3rem;

    h1 {
      font-size: 3.2rem;
      line-height: 4.2rem;
    }

    button {
      width: 20.7rem;
      height: 4.8rem;
    }
  }

  > main {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    max-height: 71.7rem;
    margin: 0 12.3rem 5.8rem 12.3rem;

    padding-right: 1.6rem;
    overflow-y: auto;
  }

  .movie {
    display: flex;
    flex-direction: column;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
    border-radius: 1.6rem;
    padding: 3.2rem;

    h2 {
      font-size: 2.4rem;
      line-height: 3.2rem;
      font-weight: 700;
    }

    .stars {
      color: ${({ theme }) => theme.COLORS.PRIMARY};
    }

    p {
      margin-top: 1.5rem;
      margin-bottom: 2.5rem;
      font-size: 1.6rem;
      line-height: 1.9rem;
      text-align: justify;
    }
    
    span {
      margin-right: 0.8rem;
    }
  }
`


