import { MenuContainer } from './menu.styles'
import MainDishes from '../../components/menu-main-dishes/main-dishes.component'

const Menu = () => {

  return (
    <MenuContainer>
      <h1>MENU</h1>
        <h2>HLAVNÍ CHODY</h2>
            <MainDishes />
          <h3>PRO DĚTI</h3>
          <h3>PŘÍLOHY</h3>
        <h2>DEZERTY</h2>
        <h2>NÁPOJE</h2>
      
    </MenuContainer>
  )
}
export default Menu