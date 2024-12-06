function Header () {
  return (
    <>
      <h1>Simple React Application</h1>
    </>
  )
}

function Content (props) {
  return (
    <>
      <p style={{color: props.color}}>{props.text}</p>
    </>
  )
}

function Footer () {
  return (
    <>
      <h1>Created by me, of course.</h1>
    </>
  )
}

function App() {

  return (
    <>
      <Header />
      <Content color="blue" text="This is one of my first React Applications!"/>
      <Content color="red" text="Wish me luck..."/>
      <Content color="green" text="I think I've got it!"/>
      <Footer />
    </>
  )
}

export default App