import * as S from './styles'
import { Menu } from '@/components/Menu'
import { Care } from '@/components/Care'
import { Banner } from '@/components/Banner'

export function Home() {
  return (
    <S.Container>
      <Menu />
      <Banner />

      <div id="cuidados">
        <Care />
      </div>
    </S.Container>
  )
}
