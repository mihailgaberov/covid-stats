import React, { FC } from 'react';
import { SettingsContainer, SettingsHead } from 'styles';

const Settings: FC = () => {
    return (
        <SettingsContainer>
            <SettingsHead>
                <h3>
                    <span>Settings</span>
                </h3>
            </SettingsHead>
            <div>Colors</div>
            <div>Typography</div>
        </SettingsContainer>
    );
};

export default Settings;
