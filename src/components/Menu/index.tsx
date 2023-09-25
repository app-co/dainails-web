import React from 'react'
import * as S from './styles'
import { List, XCircle } from '@phosphor-icons/react'

export function Menu() {
  const [openBar, isOpenBar] = React.useState(false)
  const header = document.querySelector('.header')
  const [opacit, setOpacity] = React.useState(0)

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY
    const headerOpacity = Math.min(scrollY / 300, 1) // Ajuste o valor para controlar quando a opacidade muda
    setOpacity(headerOpacity)
  })
  return (
    <S.Container opacity={opacit}>
      <List size={45} color={'rgba(27, 5, 65, 1)'} weight="duotone" />
      <h1>DAINAILS</h1>

      <div className="nav">
        <a href="#cuidados">CUIDADOS COM AS UNHAS</a>
        <a href="artes">NAILS ARTES</a>
        <a href="servico">SERVIÇOS</a>
        <a href="contact">FALE CONOSCO</a>
        <a href="price">TABELA DE PREÇOS</a>
      </div>

      <S.bar>
        <div onClick={isOpenBar}>
          <XCircle size={35} color={'rgba(27, 5, 65, 1)'} />
        </div>
        <a href="#cuidados">CUIDADOS COM AS UNHAS</a>
        <a href="artes">NAILS ARTES</a>
        <a href="servico">SERVIÇOS</a>
        <a href="contact">FALE CONOSCO</a>
        <a href="price">TABELA DE PREÇOS</a>
      </S.bar>
    </S.Container>
  )
}
