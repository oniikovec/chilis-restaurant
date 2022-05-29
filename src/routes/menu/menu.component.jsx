import { MenuContainer, MenuSection, Desserts } from './menu.styles'
import MainDishes from '../../components/menu-collections/main-dishes.component'
import ForChildren from '../../components/menu-collections/for-children.component'
import SideDishes from '../../components/menu-collections/side-dishes.component'
import NonAlco from '../../components/menu-collections/non-alco.component'
import Alco from '../../components/menu-collections/alco.component'

const Menu = () => {

  return (
    <MenuContainer>
      <h1>MENU</h1>
        <MenuSection>
          <h2>HLAVNÍ CHODY</h2>
              <MainDishes />
            <h3>PRO DĚTI</h3>
              <ForChildren />
            <h3>PŘÍLOHY</h3>
              <SideDishes />
        </MenuSection>
        <MenuSection>
          <h2>DEZERTY</h2>
            <Desserts>DLE AKTUÁLNÍ NABÍDKY</Desserts>
        </MenuSection>
        <MenuSection>
          <h2>NÁPOJE</h2>
            <h3>NEALKO</h3>
              <NonAlco />
            <h3>ALKO</h3>
              <Alco />
        </MenuSection>
    </MenuContainer>
  )
}
export default Menu