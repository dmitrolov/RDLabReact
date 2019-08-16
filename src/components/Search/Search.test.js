import React from 'react';
import { Search } from "./Search";
import { render, mount } from 'enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";

Enzyme.configure({ adapter: new Adapter() });



describe('Search', () => {
    const imageMock = {
        alt_description: 'Alt Desc',
        id: 123,
        urls:{
            small: 'somePng.jpg',
        },
        tags: ['a','b','c']
    };
    it('should render correctly', () => {
        const wrapper = render(<Router>
            <Link to={"/active/"} key={imageMock.id + new Date().getTime() + imageMock.small}>
                <img

                    src={imageMock.small}
                    className={'photo-container__item'}
                    onClick={() => {
                        this.props.addActiveImage(imageMock)
                    }}
                />
            </Link>
        </Router>);
        expect(wrapper).toMatchSnapshot();
    });
});