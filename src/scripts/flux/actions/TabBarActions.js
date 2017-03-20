import TabBarDispatcher from '../dispatcher/TabBarDispatcher';

export default {
  setItem(text){
    TabBarDispatcher.dispatch({
      actionType: 'SET_ITEM',
      text: text
    });
  }
}
