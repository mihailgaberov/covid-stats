import styled from 'styled-components';

export const SettingsContainer = styled.div`
    padding: 1em 0;
    border-bottom: 1px solid ${(props) => props.theme.colors.dark_alpha_01};
`;

export const SettingsHead = styled.div`
    h3 {
        font-weight: bold;
        margin: 0.5rem 0 1rem 0;
    }
`;

export const SettingsSection = styled.div`
  background: ${(props) => props.theme.colors.dark_alpha_01};
  padding: 1em;
  margin: 1em 0;
  border-radius: 5px;
`;

export const SectionSubTitle = styled.div`
  display: flex;

  span {
      margin-left: .7em;
      font-weight: bold;
      font-size: .9em;
  }
`;

export const SectionContent = styled.div`
  display: flex;
  padding: 1em 0;
`;

export const ColorSquare = styled.div`
  background-color: ${(props) => props.color};
  width: 2em;
  height: 2em;
  margin-right: .3em;
  border-radius: 5px;
  border: 1px solid white;
`;