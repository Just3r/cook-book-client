import listToTree from 'list-to-tree-lite';
const options = { idKey: '_id', parentKey: 'dishParent',childrenKey: 'children'};

const dishes = (state={}, action) => {
    switch(action.type){
        case 'DISHES_SORT':
          let sorted = (state.list || []).sort((a,b)=> {
            if(!action.ascending) return a.name.localeCompare(b.name)
            return b.name.localeCompare(a.name)
          })
          return {...state, list:sorted, ascending: !action.ascending}
        case 'DISHES_LOADING':
          console.log('started loading dishes')
          break;
        case 'DISHES_LOADED':
          let list = listToTree(action.data, options)
          return {...state,  list} 
        case 'DISHES_LOAD_FAILED':
          return {...state,  error:action.data} 
        case 'CREATE_DISH_LOADING':
          console.log('createDish request started')
          break;
        case 'CREATE_DISH_LOADED':
          return {...state, list:[...state.list,action.data.data]}
        case 'CREATE_DISH_FAILED':
          return {...state, error:action.data}
        case 'SHOW_DISH_LOADING':
          console.log('showDish request started')
          break;
        case 'SHOW_DISH_LOADED':
          return {...state,  selected:action.data.data} 
        case 'SHOW_DISH_FAILED':
          return {...state,  error:action.data} 
        case 'EDIT_DISH_LOADING':
          console.log('editDish request started')
          break;
        case 'EDIT_DISH_LOADED':
          return {...state,  selected:action.data.data} 
        case 'EDIT_DISH_FAILED':
          return {...state,  error:action.data} 
        case 'DELETE_DISH_LOADING':
          console.log('deleteDish request started')
          break;
        case 'DELETE_DISH_LOADED':
          let filtered = state.list.filter(i => i._id !== action.id )
          let newlist = listToTree(filtered, options)
          return {...state, list:newlist}
        case 'DELETE_DISH_FAILED':
          return {...state,  error:action.data} 
      default:
        break;
      };
    return state;
  }


  export default dishes;
  