import styled from 'styled-components';

export const DashboardHead = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid ${(props) => props.theme.colors.dark_alpha_01};
`;

export const SectionTitle = styled.h1`
    font-size: 24px;
    font-weight: 900;
`;

export const UpdatedStats = styled.div`
    margin-top: 9px;
    & span {
        font-size: 10px;
        font-weight: bold;
        background: #f3f3f3;
        padding: 0.1rem 0.2rem;
        border-radius: 3px;
    }
`;

export const StatsHead = styled.div`
    h3 {
        font-weight: bold;
        margin: 0.5rem 0 1rem 0;
    }
`;

export const StatsDetails = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    & div {
        width: 33%;
        margin-right: 0.5rem;
        background: ${(props) => props.theme.colors.dark_alpha_01};
        padding: 0.5rem;
        border-radius: 5px;

        & .stats-label {
            font-size: ${(props) => props.theme.font.sizes.small};
            margin-bottom: 0.8rem;
        }

        & .stats-count {
            font-weight: bold;
        }
    }
`;
