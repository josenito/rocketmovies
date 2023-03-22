import { Container } from './styles'

export const Button = ({ title, loading, icon: Icon = false, remove, ...rest }) => {

  return (
    <Container
      type="button"
      disabled={loading}
      remove={remove}
      {...rest}
    >
      {(!loading && Icon) && (<Icon />)}
      {loading ? "Carregando..." : title}
    </Container>
  )
}