import React, { useState, useEffect } from 'react';
import { Section, SectionHeader, 
    SectionImagery, MockUpContainer,
    ColorBtn, Container } from '../Styled';
import IPhoneMockup from './IPhoneMockup';

import ruby from '../../media/profile-ruby.png';
import babyBlue from '../../media/profile-baby-blue.png';
import violet from '../../media/profile-violet.png';
import gold from '../../media/profile-gold.png';
import bubbleGum from '../../media/profile-bubblegum.png';
import green from '../../media/profile-green.png';
import blanc from '../../media/profile-blanc.png';
import charcoal from '../../media/profile-charcoal.png';
import classicGrey from '../../media/profile-classicgrey.png';
import midGrey from '../../media/profile-midgrey.png';

export default function Features() {
    
    const themePreview = [
        {id: 0, hex: "#C6010E", image: ruby},
        {id: 1, hex: "#00A7C2", image: babyBlue},
        {id: 2, hex: "#9B1DDB", image: violet},
        {id: 3, hex: "#E9B917", image: gold},
        {id: 4, hex: "#FF92B2", image: bubbleGum},
        {id: 5, hex: "#17E925", image: green},
        {id: 6, hex: "#FFFFFF", image: blanc},
        {id: 7, hex: "#252525", image: charcoal},
        {id: 8, hex: "#EDEDED", image: classicGrey},
        {id: 9, hex: "#797979", image: midGrey}
    ];

    const [ currentSlide, setCurrentSlide ] = useState({});

    const onButtonClick = (value) => {
        setCurrentSlide(value);
        console.log(value);
    }

    useEffect(() => {setCurrentSlide(ruby)}, []);
    return(
        <Section id="features">
            <Container>
                <SectionHeader>
                    <h1>Colorizable</h1>
                </SectionHeader>
                <SectionImagery>
                    {/* <img src={currentSlide} alt="current slide" /> */}
                    <div className="carousel">
                        <MockUpContainer>
                            <IPhoneMockup imgSrc={currentSlide} />
                        </MockUpContainer>
                        <div className="color-selection">
                        {themePreview.map((color) => (
                            <ColorBtn
                            style={{ backgroundColor: color.hex}}
                            onClick={() => onButtonClick(color.image)}
                            />
                        ))}
                        </div>
                    </div>
                </SectionImagery>
                <p>Customize your Linky page by choosing from our 9 color themes.</p>
            </Container>
        </Section>
    )
}