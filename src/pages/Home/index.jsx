import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import { RxStar, RxStarFilled } from 'react-icons/rx'

import { Container } from './styles'

import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { Tag } from '../../components/Tag'

export const Home = () => {

  return (
    <Container>
      <Header />
      <div>
        <h1>Meus filmes</h1>
        <Link to="/new">
          <Button icon={FiPlus} title="Adicionar filme" />
        </Link>
      </div>

      <main>
        <div className="movie">
          <h2>Interestellar</h2>

          <div className="stars">
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStar size={12} />
          </div>

          <p>
            Pragas nas colheitas fizeram a civilização
          </p>

          <div className="tags">
            <Tag title="Ficção Cientifica" />
            <Tag title="Drama" />
            <Tag title="Familia" />
          </div>
        </div>
        <div className="movie">
          <h2>Interestellar</h2>

          <div className="stars">
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStar size={12} />
          </div>

          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em
            futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família.
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma
            inteligência desconhecida que está enviando mensagens codificadas através de
          </p>

          <div className="tags">
            <Tag title="Ficção Cientifica" />
            <Tag title="Drama" />
            <Tag title="Familia" />
          </div>
        </div>
        <div className="movie">
          <h2>Interestellar</h2>

          <div className="stars">
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStar size={12} />
          </div>

          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em
            futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família.
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma
            inteligência desconhecida que está enviando mensagens codificadas através de
          </p>

          <div className="tags">
            <Tag title="Ficção Cientifica" />
            <Tag title="Drama" />
            <Tag title="Familia" />
          </div>
        </div>
        <div className="movie">
          <h2>Interestellar</h2>

          <div className="stars">
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStar size={12} />
          </div>

          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em
            futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família.
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma
            inteligência desconhecida que está enviando mensagens codificadas através de
          </p>

          <div className="tags">
            <Tag title="Ficção Cientifica" />
            <Tag title="Drama" />
            <Tag title="Familia" />
          </div>
        </div>
        <div className="movie">
          <h2>Interestellar</h2>

          <div className="stars">
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStarFilled size={12} />
            <RxStar size={12} />
          </div>

          <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em
            futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família.
            Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um
            fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma
            inteligência desconhecida que está enviando mensagens codificadas através de
          </p>

          <div className="tags">
            <Tag title="Ficção Cientifica" />
            <Tag title="Drama" />
            <Tag title="Familia" />
          </div>
        </div>
      </main>
    </Container >
  )
}