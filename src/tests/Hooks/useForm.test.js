import { useForm } from '../../hooks/useForm';
import { renderHook, act} from "@testing-library/react-hooks";


describe('Pruebas en useForm', () => {
    
    const initialForm = {
        name:"Javier",
        email: "javier_bouncing@hotmal.com"
    };
    

    test('debe de regresar el formulaio por defecto', () => { 

        const {result} = renderHook( () => useForm(initialForm));

        const [values, handleImputChange, reset ] = result.current;

        expect(values).toEqual(initialForm);
        expect(typeof handleImputChange).toBe('function');
        expect(typeof reset).toBe('function');

     })

     test('debe de cambiar el valor del formulario', () => { 

        const {result} = renderHook( () => useForm(initialForm));

        const [ , handleInputChange ]= result.current;

       act(() => {

        handleInputChange({
            target:{
                name:'name',
                value:'Maria'
            }
        });

console.log(handleInputChange)
    const [values] = result.current;
    console.log("Vaor",values)

    // expect(form).toEqual({...initialForm, name:"Maria"});

       })

        // expesct(values).toEqual(initialForm)

     })

    //  test('debe de re-estableer el formulario con reset', () => { 

    //     const result = renderHook( () => useForm())

    //     const {values }= result.current;

    //     expect(values).toEqual(initialForm);

    //  })

});
