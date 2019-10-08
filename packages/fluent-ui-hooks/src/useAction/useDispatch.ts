import { Dispatch, dispatch } from './subscribers'

function useDispatch(param: Dispatch): typeof dispatch {
  return dispatch.bind(undefined, param)
}

export default useDispatch
