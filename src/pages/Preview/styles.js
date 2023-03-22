import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;

  > a {
    display: flex;
    align-items: center;
    gap: 0.8rem;

    padding-top: 4rem;
    padding-left: 12.3rem;
        
    font-size: 1.6rem;
    line-height: 2.1rem;

    color: ${({ theme }) => theme.COLORS.PRIMARY}
  }

  .wrapper {
    padding-top: 2.4rem;
    padding-left: 12.3rem;
    padding-right: 12.3rem;
    
    main {
      display: flex;
      flex-direction: column;

      padding-right: 1.6rem;
      max-height: 58.1rem;
      overflow-y: scroll;

      > p {
        margin-top: 4rem;
        text-align: justify;
      }
    }
  }

  .title {
    display: flex;
    align-items: center;
    gap: 1.9rem;

    h1 {
      font-weight: 500;
      font-size: 3.6rem;
      line-height: 4.7rem;
    }

    svg {
      color: ${({ theme }) => theme.COLORS.PRIMARY}
    }

    .stars {
      display: flex;
      gap: 1rem;
    }
  }

  .dataCreate {
    display: flex;
    align-items: center;
    gap: 0.8rem; 

    margin-top: 2.4rem;

    .avatar {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      img {
        width: 2.4rem;
        height: 2.4rem;
        border: 1px solid #3E3B47;
        border-radius: 50%;
      }

      span {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem; 
      }
    }

    .clock {
      display: flex;
      align-items: center;
      gap: 0.8rem;

      svg {
        color: ${({ theme }) => theme.COLORS.PRIMARY}
      }

      span {
        font-weight: 400;
        font-size: 1.6rem;
        line-height: 1.9rem; 
      }
    }
  }

  .tags {
    display: flex;
    gap: 0.8rem;

    margin-top: 4rem;

    span {
      padding: 0.8rem 1.6rem;
      background: ${({ theme }) => theme.COLORS.BACKGROUND_500};

      font-size: 12px;
      line-height: 14px;
    }
  }



`