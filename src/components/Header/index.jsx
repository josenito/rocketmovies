import { Link } from 'react-router-dom'
import { FiSearch } from 'react-icons/fi'

import { Container, Profile } from './styles'

import { Input } from '../Input'

export const Header = () => {

  return (
    <Container>
      <Profile>
        <h2>RocketMovies</h2>

        <Input
          icon={FiSearch}
          placeholder="Pesquisar pelo título"
        />

        <div>
          <div>
            <Link to="/profile" className="name">Josenito Lima Athayde</Link>
            <Link to="/">
              Sair
            </Link>
          </div>

          <Link to="/profile">
            <img
              src="https://github.com/josenito.png"
              alt="Foto do usuário logado"
            />
          </Link>
        </div>
      </Profile>
    </Container>
  )
}