import MenuItem from "../menu-item/menu-item.component"
import useFirestore from '../../hooks/useFirestore'

const MainDishes = () => {

  const { docs } = useFirestore('main-courses')  

  return (
    <>
      {
        docs && docs.map(doc => (          
          <MenuItem 
            key={doc.id}
            name={doc.name}
            description={doc.description}
            price={doc.price}
          />
         ))
      }
    </>
    
  )
}
export default MainDishes