import React from 'react';
import {shallow} from 'enzyme';
import ReactDOM from 'react-dom';
import App from './App';
import Adapter from 'enzyme-adapter-react-15';

describe('<App/>', () => {
    it.only('Renders without crashing', () => {
        shallow(<App />);
    });
});