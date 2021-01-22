import React from 'react';
import { Tabs } from '../Styled';
import Tab from './Tab';

export default function TabNav() {

    return (
        <Tabs>
            <Tab name="links" />
            <Tab name="social media" />
            <Tab name="contact" />
            <Tab name="theme" />            
        </Tabs>
    )
}