import styled from 'styled-components'

export const Container = styled.section`

  > h2 {
    margin-bottom: 2.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-size: 2rem;
    font-weight: 400;
  }

  > div {
    display: flex;
    gap: 2.4rem;
    
    min-height: 8.8rem;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    padding: 1.6rem;
    border-radius: 0.8rem;
    overflow-y: auto;

  }

`