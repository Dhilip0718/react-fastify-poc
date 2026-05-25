import { useState } from 'react';
import type { Usercontext } from '@repo/schemas';

function App() {

  const [count, setCount] = useState<number>(0);
  const [userContext, setUserContext] = useState<Usercontext> (
    {
      id: 'u1',
      name: 'Dhilip',
      department: 'IT',
      office: 'Amsterdam',
    }
  )

  return (
    <main>
      <h1>Context Awareness Dashboard</h1>
      <p>The current count is {count}</p>
      <button onClick={() => setCount(count +1) }>Incremented value by 1 </button>

      <p>The current user is {userContext.name}</p>
      <p>The current user's department is {userContext.department}</p>
      <p>The current user's office is {userContext.office}</p>
      <button onClick={() => setUserContext((userContext) => ({...userContext, department: 'HR'}))}>Change department to HR</button>
    </main>
  )
}

export default App;