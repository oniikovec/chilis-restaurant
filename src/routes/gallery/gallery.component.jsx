import { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { GalleryContainer, GalleryImagesContainer, GalleryThumbnail } from './gallery.styles'
import ImgsViewer from "react-images-viewer";

const Gallery = () => {

  const { docs } = useFirestore('images')

  const [isOpen, setIsOpen] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  const imgMap = docs.forEach(doc => {
    imgs.push({...doc.data(), src: doc.url})
  })

  return (
    <>
      <GalleryContainer>
        <h1>WELCOME TO GALLERY VAGENE</h1>
        <GalleryImagesContainer>
          {
            docs && docs.map(doc => (
              <GalleryThumbnail src={doc.thumb} alt={doc.name} key={doc.url} />
            ))
          }
          <ImgsViewer
            { docs.forEach(doc => {
              imgs.push({...doc.data(), src: doc.url})
            }) }
            imgs={[]}
            currImg={currentImage}
            isOpen={isOpen}
            onClickPrev={() => setCurrentImage(currIndex => currIndex - 1)}
            onClickNext={() => setCurrentImage(currIndex => currIndex + 1)}
            onClose={() => setIsOpen(false)}
            backdropCloseable
          />
        </GalleryImagesContainer>
      </GalleryContainer>
    </>
  )
}

export default Gallery