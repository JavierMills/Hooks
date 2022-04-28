import React from 'react'
import { HooksApp } from '../HooksApp';
import {shallow} from 'enzyme';



describe('Pruebas en el componente Hooks <Hooks />', () => {
    
    test('Dede Mostrarse Correctamente ', () => { 
        
        const wrapper = shallow(<HooksApp />);

        expect(wrapper).toMatchSnapshot();

     })


});
