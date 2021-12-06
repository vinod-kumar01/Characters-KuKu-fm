import React from 'react';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Characters from './Characters';
import CharacterDetails from './CharacterDetails';

const Webpages = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Characters />} />
                <Route path="/details/:chURL" element={<CharacterDetails />} />
            </Routes>
        </Router>
    );
};

export default Webpages;