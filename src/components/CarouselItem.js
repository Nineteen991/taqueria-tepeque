import React from 'react'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const Item = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SlideImg = styled.img`
    height: 100%;
    width: 100%;
    
    animation: ${ fadeIn } 2s;
    -moz-animation: ${ fadeIn } 2s;
    -webkit-animation: ${ fadeIn } 2s;
    -o-animation: ${ fadeIn } 2s;
`

export default function CarouselItem(props) {

    return (
        <Item className='itemDiv' >
            <SlideImg src={ props.img } alt=''  />
        </Item>
    )
}