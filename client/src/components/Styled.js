import React from 'react';
import styled from 'styled-components';

//Navbar
export const Navbar = styled.nav`
    height: 75px;
`;

export const NavbarContainer = styled.div`
    color: var(--primary);
`;

export const MenuBtn = styled.button`
    background: none;
    border: none;
    font-size: 1.5em;
    color: var(--primary);
    &:focus {
        border: none;
    }
`;

export const Branding = styled.div`
    width: 50%;
`;

export const ToggleMenu = styled.div`
    width: 30%;
`;

//Home Page
export const HeroHeader = styled.header`
    height: 95vh;
`;

export const SectionHeader = styled.div`
    padding: 10px;
    text-align: center;
    line-height: 15px;
`;

export const SectionImagery = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
`;
export const Section = styled.section`
    height: 95vh;
`;

export const MockUpContainer = styled.div`
    width: 50%;
    height: auto;
`;

export const ColorBtn = styled.button`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    margin-right: 10px;
`;

export const Button = styled.button`
    max-width: 125px;
    height: 35px;
    padding: 10px;
    background-color: var(--primary);
    border: none;
    box-shadow: 1px 1px 1px #494949;
    &:hover {
        background-color: var(--secondary);
    }
    &:clicked {

    }
    &:focus {
        border: none;
    }
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 25px;
`;

export const Label = styled.label`
    color: var(--primary);
`;

export const InputContainer = styled.div`
    width: 100%;
    margin: 0px 20px;
`;

//Dashboard
export const Tabs = styled.ul``;

export const TabPill = styled.button``;

export const TabContent = styled.div``;

export const RoundBtn = styled.button`
    height: 50px;
    width: 50px;
    border: 1px solid var(--primary-text);
    color: var(--subtext);
`;