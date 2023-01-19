

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchGreeting, selectAllMsg } from '../redux/reducers/messageSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greetings } = useSelector(selectAllMsg);
  console.log(greetings);

  React.useEffect(()=> {
    dispatch(fetchGreeting());
  }, [])

  return (
    <div>
        {greetings.greeting}
    </div>
  )
}

export default Greeting