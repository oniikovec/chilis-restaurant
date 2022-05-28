import { MenuItemContainer, MenuItemHeadingContainer, MenuItemDescription } from './menu-item.styles'

const MenuItem = ({ name, description, price }) => {

  return (
    <MenuItemContainer>
      <MenuItemHeadingContainer>
        <span>{name}</span>
        <span>{price},-</span>
      </MenuItemHeadingContainer>
      <MenuItemDescription>
        {description}
      </MenuItemDescription>
    </MenuItemContainer>
  )
}
export default MenuItem