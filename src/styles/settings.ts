import styled from 'styled-components';

export const SettingsContainer = styled.div`
    padding: 1em 0 1.4em 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.dark_alpha_01};
`;

export const SettingsHead = styled.div`
    h3 {
        font-weight: bold;
        margin: 0.5rem 0 1rem 0;
    }
`;