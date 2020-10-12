import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faTimesCircle } from '@fortawesome/free-solid-svg-icons'

import { Dashboard } from './components/popup';
import { Settings } from './components/popup';
import { Container, MenuButton, DashboardHead, SectionTitle } from 'styles';

const App: FC = () => {
    const [settingsOpened, setSettingsOpened] = useState(false);

    const changeTheme = (theme: string): void => {
        console.log(">>> change theme called from App")
    };

    return (
        <Container className="ashiishme_covid_container">
            <DashboardHead>
                <div className="section-title">
                    <SectionTitle>COVID-19 STATS</SectionTitle>
                </div>
                <MenuButton onClick={() => settingsOpened ? setSettingsOpened(false) : setSettingsOpened(true)}>
                    {settingsOpened ?
                        <FontAwesomeIcon icon={faTimesCircle} /> :
                        <FontAwesomeIcon icon={faCog} />
                    }
                </MenuButton>
            </DashboardHead>
            {settingsOpened ? <Settings changeTheme={changeTheme} /> : <Dashboard />}
        </Container>
    );
};

export default App;
