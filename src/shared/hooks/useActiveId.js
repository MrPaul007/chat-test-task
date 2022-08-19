import { useSelector } from 'react-redux';
import { getActiveId } from 'redux/menu/menu-selectors';

function useActiveId() {
  return useSelector(getActiveId);
}

export default useActiveId;
