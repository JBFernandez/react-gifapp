import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifApp from '../GifApp';


describe('Tests on <GifApp/>', () => { 


    test('should display the component and match with the snapshot ', () => { 

        const wrapper = shallow( <GifApp/> );
        expect( wrapper ).toMatchSnapshot();
     });

     test('should diplay a list of categories', () => { 
         
        const categories = ['LOTR', 'Dragon Ball'];
        const wrapper = shallow( <GifApp defaultCategories={categories} /> );

        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('GifGrid').length ).toBe( categories.length );

      })

});