import useFirestore from '../../hooks/useFirestore'
import { GalleryPreviewContainer, GalleryHeaderContainer, GalleryHeader, GalleryImageContainer, GalleryImage, OpenGalleryButton } from './gallery-preview.styles'

const GalleryPreview = () => {

  const { docs } = useFirestore('images')

  return (
    <GalleryPreviewContainer>
      <GalleryHeaderContainer>
        <GalleryHeader to="/" >GALERIE</GalleryHeader>
      </GalleryHeaderContainer>
      <GalleryImageContainer>
          { docs && docs.map(doc => (
          <GalleryImage src={doc.url} key={doc.id} alt={doc.name} />
          ))}
        <OpenGalleryButton to="">&gt;</OpenGalleryButton>
      </GalleryImageContainer>
    </GalleryPreviewContainer>
  )
}

export default GalleryPreview