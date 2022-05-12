import { FooterContainer } from './footer.styles'


const Footer = () => {

  const getYear = new Date().getFullYear()

  return (
    <>
      <FooterContainer>
        <p class="copyright">© {getYear} <a href="https://oniikovec.com">oniikovec</a></p>
      </FooterContainer>
    </>
  )
}

export default Footer