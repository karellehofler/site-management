import React from 'react';
import HeroImg from '../../media/linky-hero-img.png';
import { HeroHeader, Container, Button,
    SectionHeader, SectionImagery } from '../Styled';
import { useLocation } from 'react-router-dom';
export default function Hero() {

    return (
        <HeroHeader>
            <Container>
                <SectionHeader>
                    <h1>CONNECTING</h1>
                    <h3>with your audience in</h3>
                    <h1>ONE LINK</h1>
                </SectionHeader>
                <SectionImagery>
                    <img src={HeroImg} alt="linky-hero-img" />
                </SectionImagery>
                <Button onClick={() => window.location.href = "signup" }>Get Started</Button>
            </Container>
        </HeroHeader>
    )
}