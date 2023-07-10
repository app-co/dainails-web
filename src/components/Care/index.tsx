import * as S from './styles'
import unha from '../../../public/images/unha-escamada-1.png'

export function Care() {
  return (
    <S.Container>
      <h1>CUIDADOS COM AS UNHAS</h1>

      <div className="box">
        <div className="texts">
          <ul>
            <h3>Unhas a descamar:</h3>
            <li>Má alimentação(povre em calcio)</li>
            <li>Contato com produtos químicos</li>
          </ul>

          <ul>
            <h3>Solução:</h3>
            <li>Bases fortalecedoras</li>
            <li>Higratar bem as unhas</li>
          </ul>
        </div>

        <div>
          <img src={unha} alt="unhas descamadas" />
        </div>
      </div>
    </S.Container>
  )
}
