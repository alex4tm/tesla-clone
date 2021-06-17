import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
  return (
    <FooterLinks>
      <li><a href="#">Tesla © 2021</a></li>
      <li><a href="#">Privacy & Legal</a></li>
      <li><a href="#">Contact</a></li>
      <li><a href="#">Careers</a></li>
      <li><a href="#">Get Newsletter</a></li>
      <li><a href="#">News</a></li>
      <li><a href="#">Forums</a></li>
      <li><a href="#">Locations</a></li>
    </FooterLinks>
  )
}

export default Footer;


const FooterLinks = styled.div`
  display: flex;
  font-size: 14px;
  justify-content: center;
  align-items: center;
  color: #5c5d61;
  opacity: 0.9;
  letter-spacing: 0.05rem;
  margin-bottom: 10px;
    @media (max-width: 768px) {
    flex-direction: column;
  }
`
