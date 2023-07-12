import React from 'react';
import styled from 'styled-components/macro';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Icon from '../Icon/Icon';
import Logo from '../Logo';
import MobileMenu from '../MobileMenu';
import SuperHeader from '../SuperHeader';
import UnstyledButton from '../UnstyledButton/UnstyledButton';

const Header = () => {
    const [showMobileMenu, setShowMobileMenu] = React.useState(false);

    // For our mobile hamburger menu, we'll want to use a button
    // with an onClick handler, something like this:
    //
    // <button onClick={() => setShowMobileMenu(true)}>

    return (
        <header>
            <SuperHeader />
            <MainHeader>
                <Side>
                    <Logo />
                </Side>
                <Nav>
                    <NavLink href='/sale'>Sale</NavLink>
                    <NavLink href='/new'>New&nbsp;Releases</NavLink>
                    <NavLink href='/men'>Men</NavLink>
                    <NavLink href='/women'>Women</NavLink>
                    <NavLink href='/kids'>Kids</NavLink>
                    <NavLink href='/collections'>Collections</NavLink>
                </Nav>
                <Side>
                    <IconWrapper>
                        <Icon
                            id='shopping-bag'
                            strokeWidth={2}
                            color={COLORS.gray[900]}
                            size={24}
                        />
                        <Icon
                            id='search'
                            strokeWidth={2}
                            color={COLORS.gray[900]}
                            size={24}
                        />
                        <UnstyledButton onClick={() => setShowMobileMenu(true)}>
                            <Icon
                                id='menu'
                                strokeWidth={2}
                                color={COLORS.gray[900]}
                                size={24}
                            />
                        </UnstyledButton>
                    </IconWrapper>
                </Side>
            </MainHeader>

            <MobileMenu
                isOpen={showMobileMenu}
                onDismiss={() => setShowMobileMenu(false)}
            />
        </header>
    );
};

const MainHeader = styled.div`
    display: flex;
    align-items: baseline;
    padding: 18px 32px;
    height: 72px;
    border-bottom: 1px solid ${COLORS.gray[300]};

    @media ${QUERIES.tabletAndDown} {
        border-top: 4px solid ${COLORS.gray[900]};
    }
`;

const Nav = styled.nav`
    display: flex;
    gap: 48px;
    margin: 0px 48px;

    @media ${QUERIES.tabletAndDown} {
        display: none;
    }
`;

const IconWrapper = styled.div`
    display: none;

    @media ${QUERIES.tabletAndDown} {
        display: flex;
        gap: 32px;
        margin-left: auto;
        width: fit-content;
    }
`;

const Side = styled.div`
    flex: 1;
`;

const NavLink = styled.a`
    font-size: 1.125rem;
    text-transform: uppercase;
    text-decoration: none;
    color: ${COLORS.gray[900]};
    font-weight: ${WEIGHTS.medium};

    &:first-of-type {
        color: ${COLORS.secondary};
    }
`;

export default Header;
