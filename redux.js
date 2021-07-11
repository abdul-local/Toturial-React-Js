

// step 1

// buat store

// buat reducer 

// buat dua paramter state dan action

// buat initial state 

// buat action 

// buat subsciption

//



const {createStore}= require('redux');

const initialState={
    value:0
}

// reducer // sebagai agent
function counterReducer(state=initialState, action) {
    switch (action.type) {
      case 'counter/incremented':
        return { 
          ...state,
          value: state.value + 1
        
        }
      case 'counter/decremented':
        return { value: state.value - 1 }

      default:
        return state
    }
  }

// store untuk menyimpan sebuah datanya di store
let store=createStore(counterReducer);
console.log(store.getState());

// subscription



// proses jika ada perubahan data maka di update, mirip seperti subscribe
store.subscribe(() => console.log('store change:',store.getState()))

// Dispatch Action
// untuk melakukan perubahan / atau mengirim pesan atau tindakan yang dilakukan

// store.dispatch({ type: 'counter/incremented', newValue:23 });

// {value: 1}
store.dispatch({ type: 'counter/incremented' });
store.dispatch({ type: 'counter/incremented' });
store.dispatch({ type: 'counter/incremented'});
// {value: 2}
// store.dispatch({ type: 'counter/decremented' });





