import React, { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons'

import { Dashboard } from './components/popup';
import { Settings } from './components/popup';
import { Container, MenuButton } from 'styles';

const App: FC = () => {
    const [ settingsOpened, setSettingsOpened ] = useState(false);

    return (
        <Container className="ashiishme_covid_container">
            <MenuButton onClick={() => settingsOpened ? setSettingsOpened(false) : setSettingsOpened(true)}>
                <FontAwesomeIcon icon={faCog} />
            </MenuButton>
            {settingsOpened ? <Settings /> : <Dashboard />}
        </Container>
    );
};

export default App;
