import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../modules';
import { decrease, increase, increaseBy } from '../../modules/counter';

export function useCounter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };
  const onDecrease = () => {
    dispatch(decrease());
  };
  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return { count, onIncrease, onDecrease, onIncreaseBy };
}
