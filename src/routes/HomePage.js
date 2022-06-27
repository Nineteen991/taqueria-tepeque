import React, { useContext, useEffect } from 'react'
import styled from 'styled-components'

import Carousel from '../components/Carousel'
import { Context } from '../Context'

const HomePageDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleDiv = styled.div`
    height: 90vh;
    margin-bottom: 1.6%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TitleH1 = styled.h1`
    color: white;
    font-family: var(--title);
    font-size: 20rem;
    text-shadow: 5px 5px black;
    letter-spacing: 1rem;
    margin-top: -4rem;
`

const TitleH3 = styled.h3`
    color: white;
    font-family: 'Francois One', sans-serif;
    font-size: 5rem;
    letter-spacing: 1rem;
`

const ContactAndCarousel = styled.div`
    width: 100%;
    display: flex;
`

const Contact = styled.div`
    width: 50%;
    display: flex;
    background-image: linear-gradient(45deg, var(--pink), var(--purple));
    clip-path: polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%);

    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ContactH5 = styled(TitleH3)`
    padding: 1rem 0;
    font-size: 2rem;
    letter-spacing: 0;
`

export default function HomePage() {

    const {menuLinks, setMenuLinks} = useContext(Context)

    useEffect(() => {
        if (menuLinks !== '/home') {
            setMenuLinks('/home')
        }
    }, [])

    return (
        <HomePageDiv>
            <TitleDiv>
                <TitleH1>Taqueria Tepeque</TitleH1>
                <TitleH3>AUTHENTIC</TitleH3>
                <TitleH3>MEXICAN CUISINE</TitleH3>
            </TitleDiv>
            <ContactAndCarousel>
                <Contact id='contact'>
                    <TitleH3>CONTACT US</TitleH3>
                    <ContactH5>Taqueria Tepeque is located inside Brown Ranch Market Place</ContactH5>
                    <ContactH5>3555 Clares St.  Suite LL</ContactH5>
                    <ContactH5>Capitola , CA  95010</ContactH5>
                    <ContactH5>Tel: 831-462-2758</ContactH5>
                </Contact>
                <Carousel />
            </ContactAndCarousel>
        </HomePageDiv>
    )
}