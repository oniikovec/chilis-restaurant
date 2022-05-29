import MenuItem from "../menu-item/menu-item.component"
import useFirestore from '../../hooks/useFirestore'

const NonAlco = () => {

  const { docs } = useFirestore('non-alco')

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
export default NonAlco