import { Dispatch } from "redux"
import { USER_STATE } from "./user.type"

// 需要传值修改redux状态的，就在redux-thunk的返回函数中，再添加一个函数，该函数用于传入修改信息，此时在外部调用：dispatch(updateUser({username:'xxx', password:'xxx'}))
export const updateUser = (payload: USER_STATE) => (dispatch: Dispatch) => {
  dispatch({type: 'user', payload})
}


