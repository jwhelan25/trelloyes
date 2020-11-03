import React from 'react'
import List from './list'
import STORE from './store'
import './App.css'

function App(props) {

  let allCards = props.allCards
  let lists = props.lists

  function getAllCardsFor(array){
    let retArr = []
    for(let i=0;i<array.length;i++){
     retArr.push(allCards.Array[i])
    }
    return retArr
  }


    let mappedLists = lists.map((item)=> 
    <List key={item.id} header={item.header} cards={getAllCardsFor(item.cardIds)} />
    )

  return (
    <main className='App'>
      <header className="App-header">
      <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
        {mappedLists}
      </div>
    </main>
  );
}



export default App;