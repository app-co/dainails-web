import React from 'react'
import * as S from './styles'

export function Menu() {
  return (
    <S.Container>
      <h1>DAINAILS</h1>

      <div className="nav">
        <a href="#cuidados">CUIDADOS COM AS UNHAS</a>
        <a href="artes">NAILS ARTES</a>
        <a href="servico">SERVIÇOS</a>
        <a href="contact">FALE CONOSCO</a>
        <a href="price">TABELA DE PREÇOS</a>
      </div>
    </S.Container>
  )
}
