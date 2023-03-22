import styled from 'styled-components'

export const Container = styled.div`
    height: 100vh;

    .wrapper {
      padding: 4rem 12.3rem;
      
      
      > a {
        display: flex;
        align-items: center;
        gap: 0.8rem;

        font-size: 1.6rem;
        line-height: 2.1rem;
        color: ${({ theme }) => theme.COLORS.PRIMARY}
      }

      > main {
        display: flex;
        flex-direction: column;

        padding-right: 1.6rem;
        gap: 2rem;

        max-height: 70rem;
        overflow-y: auto;
        
        h1 {
          font-weight: 500;
          font-size: 3.6rem;
          line-height: 4.7rem;

          margin-top: 2.4rem;
        } 
      }
      

      .inputs{
        display: flex;
        gap: 4rem;
      }

      .buttons {
        display: flex;
        gap: 4rem;
      }
    }

` 