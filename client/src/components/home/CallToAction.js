import React from 'react';
import { Section, SectionHeader, SectionImagery,
MockUpContainer, Button, Container} from '../Styled';
import IPhoneMockup from './IPhoneMockup';

export default function CallToAction() {

    return(
        <Section id="call-to-action">
            <Container>
                <SectionHeader>
                    <h1>CONNECT</h1>
                    <h3>with your audience</h3>
                    <h1>TODAY</h1>
                </SectionHeader>
                <SectionImagery>
                    <MockUpContainer>
                        <IPhoneMockup />
                    </MockUpContainer>
                </SectionImagery>
                <Button onClick={() => window.location.href = "signup" }>Start now</Button>
            </Container>
        </Section>
    )
}