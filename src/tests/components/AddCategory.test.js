import {shallow} from 'enzyme';
import { AddCategory } from '../../components/AddCategory';
import React from 'react';
import '@testing-library/jest-dom';


describe('Tests in the <AddCategory /> component', () => { 

    const setCategories = jest.fn();
    let wrapper = shallow( <AddCategory setCategories={setCategories}/> );

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow( <AddCategory setCategories={setCategories}/> );
    } )
    
    test('should display correctly', () => { 

        expect(wrapper).toMatchSnapshot();
     })

     test('should change the text box', () => { 

        const input = wrapper.find('input');
        const value = 'Hello World'

        input.simulate('change', { target: {
            value: value
        } 
    });

        expect(wrapper.find('p').text().trim()).toBe(value);

      })

      test('should not post information on submit', () => { 
          wrapper.find('form').simulate('submit', { preventDefault: () => {} })

          expect( setCategories ).not.toHaveBeenCalled();
       })

       test('should call setCategories and clear the text box', () => {
           const value = 'AOT'; 
           wrapper.find('input').simulate('change', { target: {
               value: value
           } })
           expect( wrapper.find('p').text().trim() ).toBe( value );

           wrapper.find('form').simulate('submit', { preventDefault: () => {}, })
        

           expect( setCategories ).toHaveBeenCalled();
           expect( setCategories ).toHaveBeenCalledWith( expect.any(Function) );
           expect( wrapper.find('input').prop('value') ).toBe('');

           

        })//test clear box
    
 })