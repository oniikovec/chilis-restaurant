import useFirestore from '../../hooks/useFirestore';
import { GalleryContainer, GalleryHeader, GalleryImagesContainer, GalleryThumbnail } from './gallery.styles'
import 'photoswipe/dist/photoswipe.css'
import { Gallery as PhotoswipeGallery } from 'react-photoswipe-gallery'
import { Item } from 'react-photoswipe-gallery'

const Gallery = () => {

  const { docs } = useFirestore('images')

  return (
    <>
      <GalleryContainer>
        <GalleryHeader>
          <h1>Mexická kuchyně, lokální suroviny.</h1>
        </GalleryHeader>
        <GalleryImagesContainer>
          <PhotoswipeGallery withCaption>
          {
            docs && docs.map(doc => (
              <Item
                original={doc.url}
                thumbnail={doc.thumb}
                caption={doc.caption}
                key={doc.url}
                alt={doc.name}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <GalleryThumbnail ref={ref} onClick={open} src={doc.thumb} alt={`${doc.name}-thumbnail`} />
                )}
              </Item>
            ))
          }
          {
            docs && docs.map(doc => (
              <Item
                original={doc.url}
                thumbnail={doc.thumb}
                caption={doc.caption}
                key={doc.url}
                alt={doc.name}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <GalleryThumbnail ref={ref} onClick={open} src={doc.thumb} alt={`${doc.name}-thumbnail`} />
                )}
              </Item>
            ))
          }
          {
            docs && docs.map(doc => (
              <Item
                original={doc.url}
                thumbnail={doc.thumb}
                caption={doc.caption}
                key={doc.url}
                alt={doc.name}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <GalleryThumbnail ref={ref} onClick={open} src={doc.thumb} alt={`${doc.name}-thumbnail`} />
                )}
              </Item>
            ))
          }
          </PhotoswipeGallery>
        </GalleryImagesContainer>
      </GalleryContainer>
    </>
  )
}

export default Gallery