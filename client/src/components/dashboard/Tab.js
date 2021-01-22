import React from 'react';
import { TabPill, TabContent, Container, RoundBtn } from '../Styled';

export default function Tab({ name, content }) {

    const NoContentView = () => {
        return (
            <>
                <h3>No {name} have been added yet</h3>
                <RoundBtn><i class="fas fa-plus"></i></RoundBtn>
            </>
        )
    }

    return(
        <Container>
            <TabPill>{name}</TabPill>
            <TabContent>
                {content ? {content} : 
                <NoContentView/>}
            </TabContent>
        </Container>

    )
}