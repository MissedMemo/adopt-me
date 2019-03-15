const Pet = ({name, animal, breed}) => {
  return React.createElement( 'div', {}, [
    React.createElement( 'h1', {}, name ),
    React.createElement( 'h2', {}, animal ),
    React.createElement( 'h2', {}, breed )
  ])
}

const App = () => {
  return React.createElement( 'div', {}, [
    React.createElement( 'h1', { id: "brand" }, 'Adopt Me!' ),
    React.createElement( Pet, { name: "Luna", animal: "Dog", breed: "Havanese"} ),
    React.createElement( Pet, { name: "Charlie", animal: "Fish", breed: "Tuna"} ),
    React.createElement( Pet, { name: "Sylvester", animal: "Cat", breed: "Mixed"} )
  ])
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById('root')
)