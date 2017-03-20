import { Dispatcher } from 'flux';
import TabBarStore from '../stores/TabBarStore';

let TabBarDispatcher = new Dispatcher();
TabBarDispatcher.register(action=>{
  switch (action.actionType) {
    case 'SET_ITEM':
      TabBarStore.setItemHandler(action.text);
      break;
  }
})
export default TabBarDispatcher