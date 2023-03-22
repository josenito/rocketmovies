import { Link } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import { Container } from './styles'

import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { Section } from '../../components/Section'
import { MovieItem } from '../../components/MovieItem'
import { Button } from '../../components/Button'

export const New = () => {

  return (
    <Container>
      <Header />

      <div className="wrapper">
        <Link to="/">
          <FiArrowLeft />
          Voltar
        </Link>

        <main>
          <h1>Novo Filme</h1>

          <div className="inputs">
            <Input
              placeholder="Título"
              type="text"
            />
            <Input
              placeholder="Sua nota (de 0 a 5)"
              type="text"
            />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <MovieItem value="React " />
            <MovieItem isNew placeholder="Novo marcador" />
          </Section>

          <div className="buttons">
            <Button title="Excluir filme" remove />
            <Button title="Salvar alterações" />
          </div>
        </main>
      </div>
    </Container>
  )
}