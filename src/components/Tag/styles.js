import styled from 'styled-components'

export const Container = styled.span`
  align-items: center;
  padding: 0.5rem 1.6rem;
  gap: 0.8rem;

  height: 2.4rem;
  font-size: 1.2rem;
  line-height: 1.4rem;

  border-radius: 0.8rem;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};
  color: ${({ theme }) => theme.COLORS.GRAY_400};

`