import { useState } from 'react';
import { Card } from 'react-bootstrap';
import './app.css'
function App() {

  const [count, setCount] = useState(0)
  if(count > 99){
    setCount(0)
  }
  
  
  function name() {
    if(window.confirm("Siz rostan ham ochirmoqchimisiz") == true){
      setCount(0)
    }
  }




  return (

    <>
      <Card className='fcard'>
        <Card className='card1'>
          <h1>{count}/99</h1>
        </Card>
      </Card>
      <Card className='bcard'>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button className='a' onClick={() => name()}>Clear</button>
      </Card>
    </>
  );
}

export default App;
