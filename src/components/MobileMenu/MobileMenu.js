/* eslint-disable no-unused-vars */
import { DialogContent, DialogOverlay } from '@reach/dialog';
import React from 'react';
import styled from 'styled-components/macro';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import UnstyledButton from '../UnstyledButton';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
    console.log('🚀 -> MobileMenu -> isOpen:', isOpen);
    // if (!isOpen) {
    //     return null;
    // }

    return (
        <Overlay isOpen={isOpen}>
            <Content>
                <UnstyledButton onClick={onDismiss}>
                    <Icon
                        id='close'
                        color={COLORS.gray[900]}
                        size={24}
                        strokeWidth={2}
                    />
                    <VisuallyHidden>Dismiss menu</VisuallyHidden>
                </UnstyledButton>
                <nav>
                    <a href='/sale'>Sale</a>
                    <a href='/new'>New&nbsp;Releases</a>
                    <a href='/men'>Men</a>
                    <a href='/women'>Women</a>
                    <a href='/kids'>Kids</a>
                    <a href='/collections'>Collections</a>
                </nav>
                <footer>
                    <a href='/terms'>Terms and Conditions</a>
                    <a href='/privacy'>Privacy Policy</a>
                    <a href='/contact'>Contact Us</a>
                </footer>
            </Content>
        </Overlay>
    );
};

const Overlay = styled(DialogOverlay)`
    isolation: isolate;
`;

const Content = styled(DialogContent)``;

export default MobileMenu;
