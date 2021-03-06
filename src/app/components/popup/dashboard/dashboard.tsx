import React, { FC } from 'react';

import {
    useAsyncTask,
    covidCountryContext,
    covidGlobalContext,
    useUserCountry,
} from 'app/hooks';
import * as utils from 'app/utils/';
import Country from 'app/components/common/Country';
import Global from 'app/components/common/Global';


const Dashboard: FC = () => {
    const response = useAsyncTask('https://api.covid19api.com/summary');
    const userCountry = useUserCountry('https://extreme-ip-lookup.com/json/');
    
    let country = utils.filterCountry(
        response?.Countries,
        userCountry?.countryCode
    );
    
    const countryProvider: Covid.CountryStats = {
        country: country,
        date: covid_date_format(response?.Date),
    };

    const globalProvider: Covid.GlobalStats = {
        global: response?.Global,
        date: covid_date_format(response?.Date),
    };

    return (
        <div className="ashiishme-covid-dashboard">
            <div className="covid-stats">
                <covidCountryContext.Provider value={countryProvider}>
                    <Country />
                </covidCountryContext.Provider>
                <covidGlobalContext.Provider value={globalProvider}>
                    <Global />
                </covidGlobalContext.Provider>
            </div>
        </div>
    );
};

export default Dashboard;

const covid_date_format = (props: Date): Date => {
    return new Date(props);
};
