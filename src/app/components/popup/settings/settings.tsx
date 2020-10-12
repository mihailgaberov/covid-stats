import React, { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette, faFont } from '@fortawesome/free-solid-svg-icons'

import {
    SettingsContainer,
    SettingsHead,
    SettingsSection,
    SectionSubTitle,
    SectionContent,
    ColorSquare
} from 'styles';
import { storeToLocalStorage } from '../../utilities/localStorageService';


const Settings: FC = ({changeTheme}) => {
    const setColorTheme = (val: string): void => {
        storeToLocalStorage('color', val);
        changeTheme();
    };

    return (
        <SettingsContainer>
            <SettingsHead>
                <h3>
                    <span>Settings</span>
                </h3>
            </SettingsHead>
            <SettingsSection>
                <SectionSubTitle>
                    <FontAwesomeIcon icon={faPalette} />
                    <span>Colors</span>
                </SectionSubTitle>
                <SectionContent>
                    <ColorSquare color="red" onClick={() => setColorTheme('red')} />
                    <ColorSquare color="purple" />
                    <ColorSquare color="green" />
                    <ColorSquare color="orange" />
                    <ColorSquare color="yellow" />
                    <ColorSquare color="tomato" />
                </SectionContent>
            </SettingsSection>
            <SettingsSection>
                <SectionSubTitle>
                    <FontAwesomeIcon icon={faFont} />
                    <span>Typography</span>
                </SectionSubTitle>
            </SettingsSection>
        </SettingsContainer>
    );
};

export default Settings;
