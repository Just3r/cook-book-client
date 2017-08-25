const ingridients = (state=[], action) => {
    switch(action.type){
      case 'INGRIDIENTS_SORT':
        let sorted = (state.list || []).sort((a,b)=> {
          if(!action.ascending) return a.name.localeCompare(b.name)
          return b.name.localeCompare(a.name)
        })
        return {...state, list:sorted, ascending: !action.ascending}
      case 'INGRIDIENTS_LOADING':
        console.log('started loading ingridients')
        break;
      case 'INGRIDIENTS_LOADED':
        return {...state,  list: action.data} 
      case 'INGRIDIENTS_LOAD_FAILED':
        return {...state,  error:action.data} 
      case 'SHOW_INGRIDIENT_LOADING':
        console.log('showIngridient request started')
        break;
      case 'SHOW_INGRIDIENT_LOADED':
        return {...state,  selected:action.data.data} 
      case 'SHOW_INGRIDIENT_FAILED':
        return {...state,  error:action.data} 
      case 'CREATE_INGRIDIENT_LOADING':
        console.log('createIngridient request started')
        break;
      case 'CREATE_INGRIDIENT_LOADED':
        return {...state, list:[...state.list,action.data.data]}
      case 'CREATE_INGRIDIENT_FAILED':
        return {...state, error:action.data}
      case 'EDIT_INGRIDIENT_LOADING':
        console.log('editIngridient request started')
        break;
      case 'EDIT_INGRIDIENT_LOADED':
        return {...state,  selected:action.data.data} 
      case 'EDIT_INGRIDIENT_FAILED':
        return {...state,  error:action.data} 
      case 'DELETE_INGRIDIENT_LOADING':
        console.log('deleteIngridient request started')
        break;
      case 'DELETE_INGRIDIENT_LOADED':
        let newList = state.list.filter(i => i._id !== action.id )
        return {...state, list:newList}
      case 'DELETE_INGRIDIENT_FAILED':
        return {...state,  error:action.data} 
    default:
      break;
    };
  return state;
}
  
export default ingridients;