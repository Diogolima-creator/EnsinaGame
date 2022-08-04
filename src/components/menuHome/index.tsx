import * as C from './styles'
import { useNavigate } from 'react-router-dom'

export const MenuHome = () => {

  const navigate = useNavigate()
  
  return(
    <C.Container>
        <C.Title>
              Bem-vindo ao ensinaGame!
        </C.Title>

        <C.Menu>
          <li><button onClick={() => navigate('/difficulty')}>Iniciar</button></li>
          <li><button>Mercado</button></li>
          <li><button>Opções</button></li>
        </C.Menu>

        <C.Footer>
          Desenvolvido por Diogo Lima.
        </C.Footer>
    </C.Container>
  )
}