import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES, WEIGHTS } from '../../constants';

import Breadcrumbs from '../Breadcrumbs';
import Select from '../Select';
import ShoeGrid from '../ShoeGrid';
import ShoeSidebar from '../ShoeSidebar';
import Spacer from '../Spacer';

const ShoeIndex = ({ sortId, setSortId }) => {
    return (
        <Wrapper>
            <MainColumn>
                <Header>
                    <TitleWrapper>
                        <Breadcrumbs>
                            <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
                            <Breadcrumbs.Crumb href='/sale'>
                                Sale
                            </Breadcrumbs.Crumb>
                            <Breadcrumbs.Crumb href='/sale/shoes'>
                                Shoes
                            </Breadcrumbs.Crumb>
                        </Breadcrumbs>
                        <Title>Running</Title>
                    </TitleWrapper>
                    <SortWrapper>
                        <Select
                            label='Sort'
                            value={sortId}
                            onChange={ev => setSortId(ev.target.value)}
                        >
                            <option value='newest'>Newest Releases</option>
                            <option value='price'>Price</option>
                        </Select>
                    </SortWrapper>
                </Header>
                <Spacer size={32} />
                <ShoeGrid />
            </MainColumn>
            <LeftColumn>
                <Breadcrumbs>
                    <Breadcrumbs.Crumb href='/'>Home</Breadcrumbs.Crumb>
                    <Breadcrumbs.Crumb href='/sale'>Sale</Breadcrumbs.Crumb>
                    <Breadcrumbs.Crumb href='/sale/shoes'>
                        Shoes
                    </Breadcrumbs.Crumb>
                </Breadcrumbs>
                <Spacer size={42} />
                <ShoeSidebar />
            </LeftColumn>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    display: flex;
    flex-direction: row-reverse;
    align-items: baseline;
    gap: 32px;
`;

const TitleWrapper = styled.div`
    & nav {
        display: none;
    }

    @media ${QUERIES.tabletAndDown} {
        display: flex;
        flex-direction: column;

        & nav {
            display: flex;
        }
    }
`;

const SortWrapper = styled.div`
    @media ${QUERIES.phoneAndDown} {
        display: none;
    }
`;

const LeftColumn = styled.div`
    flex-basis: 248px;

    @media ${QUERIES.tabletAndDown} {
        display: none;
    }
`;

const MainColumn = styled.div`
    flex: 1;
`;

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    @media ${QUERIES.tabletAndDown} {
        align-items: center;
    }
`;

const Title = styled.h2`
    font-size: 1.5rem;
    font-weight: ${WEIGHTS.medium};
`;

export default ShoeIndex;
