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
import { storeToLocalStorage } from '../../../../services/localStorage.service';


const Settings: FC<any> = ({changeTheme}) => {
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
                    <ColorSquare color="purple" onClick={() => setColorTheme('purple')} />
                    <ColorSquare color="green" onClick={() => setColorTheme('green')} />
                    <ColorSquare color="orange" onClick={() => setColorTheme('orange')} />
                    <ColorSquare color="yellow" onClick={() => setColorTheme('yellow')} />
                    <ColorSquare color="tomato" onClick={() => setColorTheme('tomato')} />
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
