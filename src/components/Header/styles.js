import styled from 'styled-components';

export const Container = styled.header`
    background: #97ce4c;
    display: flex;
    justify-content: center;
    height: 7rem;
    align-items: center;
    margin-bottom: 10px;
    border-bottom: 1px solid #44281d;
`;

export const Content = styled.div`
    display: flex;
    width: 100%;
    max-width: 1216px;
    align-items: center;
    justify-content: space-between;

    .page-details {
        h1 {
            color: #fff;
            font-size: 32px;
            font-weight: 600;
        }
        h2 {
            color: #fff;
            font-weight: 400;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }
`;
