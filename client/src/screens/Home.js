import React from 'react';
import { About, Hero, Features, CallToAction } from '../components/home';

export default function Home() {
    return [
        <Hero />,
        <About />,
        <Features />,
        <CallToAction />
    ]
}