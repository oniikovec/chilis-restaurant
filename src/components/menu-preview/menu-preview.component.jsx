import { MenuPreviewContainer, MenuLink } from './menu-preview.styles'

const MenuPreview = () => {

  return (
    <MenuPreviewContainer>
      <h1>MENU</h1>
      <p>Naše menu oslavuje hlavně lokální farmáře a pěstitele. Všechny ingredience pečlivě vybíráme a servírujeme Vám je vždy čerstvé. Hovězí maso pochází výhradně z jihoamerických plemen.</p>
      <p>V kuchyni jsme si velice oblíbili metodu pomalého pečení v našem novém konvektomatu. Přijďte ochutnat a určitě si naše dobroty oblíbíte také.</p>
      <p>Celé menu si můžete prohlédnout <MenuLink to='/menu'>ZDE</MenuLink>.</p>
    </MenuPreviewContainer>
  )
}

export default MenuPreview