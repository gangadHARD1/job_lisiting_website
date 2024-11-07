

const App = () => {
  const name="anunay"
  const x =4 
  const y=5 
  const sl=["abc", "def","ghi"]

  return (
    <>
    <div className= 'text-5xl'>App</div>
    <p style={{color: 'red' ,fontSize:"22px"}}>Hello {name}</p>
    <p>the sume of {x} +{y} is {x+y} </p>
    <ul>
      {sl.map((name,index) => (<li key={index}>{name}</li>))}
    </ul>
    </>
  ) ;
}

export default App;