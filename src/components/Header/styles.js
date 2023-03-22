import styled from 'styled-components'

export const Container = styled.header`
  grid-area: "header";
  
  border-bottom-width: 0.1rem;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

  display: flex;
  justify-content: space-between;
  
  padding: 2.4rem 12.3rem;
`

export const Profile = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 6.4rem;

  > h2 {
    font-size: 2.4rem;
    line-height: 3.2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
  
  > div {
    display: flex;
    gap: 0.9rem;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      gap: 0.4rem;

      width: 19.8rem;

      font-size: 1.4rem;
      line-height: 1.8rem;

      a {
        color: ${({ theme }) => theme.COLORS.GRAY_300}
      }

      .name {
        font-weight: 500;
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
    }

    img {
      width: 6.4rem;
      height: 6.4rem;
      border-radius: 50%;
    }
  }

`