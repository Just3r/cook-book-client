import Base from '../api/base'

export const LOAD_DISHES = 'LOAD_DISHES'
export const CREATE_DISH = 'CREATE_DISH'
export const SHOW_DISH = 'SHOW_DISH'
export const EDIT_DISH = 'EDIT_DISH'
export const DELETE_DISH = 'DELETE_DISH'
export const LOAD_INGRIDIENTS = 'LOAD_INGRIDIENTS'
export const CREATE_INGRIDIENT = 'CREATE_INGRIDIENT'
export const SHOW_INGRIDIENT = 'SHOW_INGRIDIENT'
export const EDIT_INGRIDIENT = 'EDIT_INGRIDIENT'
export const DELETE_INGRIDIENT = 'DELETE_INGRIDIENT'


export const loadDishes = () => ({
    type: 'PROMISE',
    actions: ['DISHES_LOADING', 'DISHES_LOADED', 'DISHES_LOAD_FAILED'],
    promise: Base.load({}, 'dishes')
  })
  
  export const createDish = (params) => ({
    type: 'PROMISE',
    actions: ['CREATE_DISH_LOADING', 'CREATE_DISH_LOADED', 'CREATE_DISH_FAILED'],
    promise: Base.create(params, 'dishes'),
    url: '/dishes'
  })

  export const showDish = (id) => ({
    type: 'PROMISE',
    actions: ['SHOW_DISH_LOADING', 'SHOW_DISH_LOADED', 'SHOW_DISH_FAILED'],
    promise: Base.show({id:id}, 'dishes')
  })
  
  export const editDish = (params) => ({
    type: 'PROMISE',
    actions: ['EDIT_DISH_LOADING', 'EDIT_DISH_LOADED', 'EDIT_DISH_FAILED'],
    promise: Base.edit(params, 'dishes'),
    url: '/dishes'
  })

  export const deleteDish = (id) => ({
    type: 'PROMISE',
    actions: ['DELETE_DISH_LOADING', 'DELETE_DISH_LOADED', 'DELETE_DISH_FAILED'],
    promise: Base.delete(id, 'dishes'),
    id
  })

  export const sortDishes = (ascending) => ({
    type: 'DISHES_SORT',
    ascending
  })
  
  export const loadIngridients = () => ({
      type: 'PROMISE',
      actions: ['INGRIDIENTS_LOADING', 'INGRIDIENTS_LOADED', 'INGRIDIENTS_LOAD_FAILED'],
      promise: Base.load({}, 'ingridients')
  })

  export const showIngridient = (id) => ({
    type: 'PROMISE',
    actions: ['SHOW_INGRIDIENT_LOADING', 'SHOW_INGRIDIENT_LOADED', 'SHOW_INGRIDIENT_FAILED'],
    promise: Base.show({id:id}, 'ingridients')
  })

  export const editIngridient = (params) =>  ({
    type: 'PROMISE',
    actions: ['EDIT_INGRIDIENT_LOADING', 'EDIT_INGRIDIENT_LOADED', 'EDIT_INGRIDIENT_FAILED'],
    promise: Base.edit(params, 'ingridients'),
    url: `/ingridients`
  })

  export const createIngridient = (params) => ({
    type: 'PROMISE',
    actions: ['CREATE_INGRIDIENT_LOADING', 'CREATE_INGRIDIENT_LOADED', 'CREATE_INGRIDIENT_FAILED'],
    promise: Base.create(params, 'ingridients'),
    url: '/ingridients'
  })

  export const deleteIngridient = (id, url) => ({
    type: 'PROMISE',
    actions: ['DELETE_INGRIDIENT_LOADING', 'DELETE_INGRIDIENT_LOADED', 'DELETE_INGRIDIENT_FAILED'],
    promise: Base.delete(id, 'ingridients'),
    id
  })

  export const sortIngridients = (ascending) => ({
    type: 'INGRIDIENTS_SORT',
    ascending
  })
  