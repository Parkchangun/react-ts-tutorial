import { AsyncActionCreatorBuilder, PayloadAction } from 'typesafe-actions';
import { call, put } from 'redux-saga/effects';

//P: Parameter, T: Promise Result Type
type promiseCreatorFunction<Parameters, ReturnType> =
  | ((payload: Parameters) => Promise<ReturnType>)
  | (() => Promise<ReturnType>);

function isPayloadAction(action: any): action is PayloadAction<string, any> {
  return action.payload !== undefined;
}

export default function createAsyncSaga<T1, P1, T2, P2, T3, P3>(
  asyncActionCreator: AsyncActionCreatorBuilder<
    [T1, [P1, undefined]],
    [T2, [P2, undefined]],
    [T3, [P3, undefined]]
  >,
  promiseCreator: promiseCreatorFunction<P1, P2>,
) {
  return function* saga(action: ReturnType<typeof asyncActionCreator.request>) {
    try {
      const result: P2 = isPayloadAction(action)
        ? yield call(promiseCreator, action.payload)
        : yield call(promiseCreator);
      yield put(asyncActionCreator.success(result));
    } catch (e: any) {
      yield put(asyncActionCreator.failure(e));
    }
  };
}
