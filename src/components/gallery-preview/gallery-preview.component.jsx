import useFirestore from '../../hooks/useFirestore'
import { GalleryPreviewContainer, GalleryThumbnail, OpenGalleryButton } from './gallery-preview.styles'

const GalleryPreview = () => {

  const { docs } = useFirestore('images')

  return (
    <GalleryPreviewContainer>
      { docs && docs.map(doc => (
      <GalleryThumbnail src={doc.thumb} key={doc.id} alt={doc.name} />
      ))}
      <OpenGalleryButton to="">GALERIE&nbsp;&gt;</OpenGalleryButton>
    </GalleryPreviewContainer>
  )
}

export default GalleryPreview