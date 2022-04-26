 
 
 export const reducer = (state=[], action) => {

    switch (action.type) {
      case'add':

      return [...state, action.payload];
        
      case 'delete':
        //filter regresa un nuevo arreglo
      return state.filter(todo => todo.id !== action.payload );
      
      case 'toggle':
        return state.map(todo => 
          ( todo.id === action.payload ) ? {...todo, done: !todo.done} : todo
          )

      // case 'toggle1':
      //   return state.map(todo => {
      //     //validamos que los id sean iguales para poder editar sus valore
      //     if(todo.id === action.payload){
      //       return {
      //         ...todo,
      //         done: !todo.done,
      //       }
      //     }else{
      //       //se tiene que regresar algo para no mutar el array
      //       return todo;
      //     }
      //   })
      
      default:
          return state;  

    }
  }
