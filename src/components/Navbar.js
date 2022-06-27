import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import facebookIcon from '../images/facebook.jpg'
import foursquareIcon from '../images/foursquare.png'
import twitterIcon from '../images/twitter.png'
import instagramIcon from '../images/instagram.png'
import { ourMenu } from '../data/MenuGrid'
import { Context } from '../Context'

const Nav = styled.nav`
  position: fixed;
  height: 10vh;
  width: 100%;
  top: 0;
  background-image: var(--bg-primary);

  display: flex;
  align-items: center;
`

const NavTitle = styled.h1`
  margin-right: auto;
  padding: 0 4rem;
  font-family: var(--title);
  font-size: 4rem;
  color: white;
  text-shadow: 2px 2px black;
`

const NavLinksUl = styled.ul`
  width: 50%;
  padding: 0 4rem;
  list-style-type: none;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const NavLinksLi = styled.li`
  color: white;
  cursor: pointer;
`

const MenuLinksUl = styled.ul`
  width: 100%;
  list-style-type: none;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const MenuLinksLi = styled.li`
  margin-left: 2rem;
  font-family: 'Francois One', sans-serif;
  color: white;
  cursor: pointer;
`

const SocialMediaDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`

const SocialMediaLinks = styled.a`
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const SocialMediaImages = styled.img`
  height: 2rem;
  width: 2rem;
`

export default function Navbar() {

  const { menuLinks } = useContext(Context)
  
  return (
    <Nav>
      <NavTitle><Link to='/'>Taqueria Tepeque</Link></NavTitle>

      <NavLinksUl>

        <NavLinksLi>
          { 
            menuLinks === '/home' ?
              <Link to='/menu'>Menu</Link> :
              <MenuLinksUl>
                { Object.entries(ourMenu).map(([sectionName], index) => (
                  <MenuLinksLi
                    key={ index }
                    onClick={ (e) => {
                      e.preventDefault()
                      window.location.replace(`/menu/#${ sectionName }`)
                    }}
                  >
                    { sectionName }
                  </MenuLinksLi>
                ))}
              </MenuLinksUl>
          }
        </NavLinksLi>
        <NavLinksLi><Link to='/#contact'>Contact & Location</Link></NavLinksLi>

        <NavLinksLi>
          <SocialMediaDiv>

            <SocialMediaLinks href="https://www.facebook.com/TaqueriaTepequeCapitola/">
              <SocialMediaImages src={facebookIcon} alt='facebook' />
            </SocialMediaLinks>

            <SocialMediaLinks href="https://foursquare.com/v/taqueria-tepeque/4c0069ebad46c9b6d07f8f66">
              <SocialMediaImages src={foursquareIcon} alt='foursquare' />
            </SocialMediaLinks>

            <SocialMediaLinks href="">
              <SocialMediaImages src={twitterIcon} alt='twitter' />
            </SocialMediaLinks>

            <SocialMediaLinks href="https://www.instagram.com/taqueriatepeque3555">
              <SocialMediaImages src={instagramIcon} alt='instagram' />
            </SocialMediaLinks>

          </SocialMediaDiv>
        </NavLinksLi>

      </NavLinksUl>
    </Nav>
  )
}