import styled from 'styled-components'

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 100%;
  background-color: ${({ theme, remove }) => remove ? theme.COLORS.BACKGROUND_900 : theme.COLORS.PRIMARY};
  color: ${({ theme, remove }) => remove ? theme.COLORS.PRIMARY : theme.COLORS.BACKGROUND_600};

  height: 5.6rem;
  border: none;
  padding: 0 1.6rem;
  border-radius: 1rem;
  font-weight: 500;

  &:disabled {
    opacity: 0.5;
  }
`