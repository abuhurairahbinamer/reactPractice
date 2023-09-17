import React from 'react'

const Index = (props) => {
  console.log(props.step1)
  console.log(props.step2)
    return (
      <>
    <div>Index</div>
    {props.step1 ? <div>hellow step1</div> : <div>buy step1</div>}
    {props.step2 ? <div>hellow step2</div> : <div>buy step2</div>}
    </>
  )
}

export default Index