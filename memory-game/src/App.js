import React, { useState, useEffect } from 'react';
import uniqid from 'uniqid';
import Tile from './components/Tile.js';
import Heading from './components/Heading.js';
import rose from './tiles/rose.jpeg';
import apple from './tiles/apple.jpeg';
import gourd from './tiles/gourd.jpeg';
import caper from './tiles/caper.jpeg';
import umbel from './tiles/umbel.jpeg';
import poppy from './tiles/poppy.jpeg';
import myrtle from './tiles/myrtle.jpeg';
import cactus from './tiles/cactus.jpeg';
import passion from './tiles/passion.jpeg';
import composite from './tiles/composite.jpeg';
import nasturtium from './tiles/nasturtium.jpeg';
import sideSaddle from './tiles/sideSaddle.jpeg';

export default function App() {
  const [flowers, setFlowers] = useState(initializeFlowers());
  const [score, setScore] = useState(0);
  const [topScore, setTopScore] = useState(0);
  const [isGameOver, setIsGameOver]= useState(false);

  useEffect( () => {
    if (score > topScore) {
      let clone = score;
      setTopScore(clone);
    }
  }, [score]);

  useEffect(() => {
    let flag = true;
    flowers.forEach(flower => {
      if (!flower.clicked){
        flag = false;
      }
    })
    if (flag !== isGameOver){
      setIsGameOver(true);
    }
  }, [flowers]);

  const incrementScore = () => {
    setScore(score + 1);
  };

  const decrementScore = () => {
    setScore(score - 1);
  };

  const handleClick = (e) => {
    // e.preventDefault();
    const index = e.target.getAttribute('index');
    const isClicked = parseInt(e.target.getAttribute('data'));
    if (!isClicked){ // 1 if clicked : 0 if not clicked 
      console.log('clicked an un-clicked one')
      incrementScore(); // SetScore
      setFlowers(() => { // Update flowers arr
        let clone = [...flowers];
        console.log('clone: ', clone);
        console.log('index: ', index);
        clone[index].clicked = true;
        return shuffle(clone);
      });
      return;
    }
    decrementScore();
    setFlowers(shuffle([...flowers]));
    console.log('clicked a previously clicked one')
  };

  return (
    <div id='main'>
      <Heading score={score} topScore={topScore}></Heading>
      <div id='grid'>
        {
          flowers.map((flower, index) => {
            return (
              <Tile 
                name={flower.name} 
                source={flower.source} 
                alt={flower.alt} 
                clicked={flower.clicked ? 1 : 0}
                handleClick={handleClick}
                index={index}
                key={flower.key}>
              </Tile>
            );
          })
        }
      </div>
    </div>
  );
}

function shuffle(array) { // Fischer-Yates -> https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j] with destructuring
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function initializeFlowers() {
  let arr = [
    {name: 'Rose Family', source: rose, clicked: false, alt: 'Scientific illustration of the rose plant family.', key: uniqid()},
    {name: 'Apple Family', source: apple, clicked: false, alt: 'Scientific illustration of the apple plant family.', key: uniqid()},
    {name: 'Gourd Family', source: gourd, clicked: false, alt: 'Scientific illustration of the gourd plant family.', key: uniqid()},
    {name: 'Caper Family', source: caper, clicked: false, alt: 'Scientific illustration of the caper plant family.', key: uniqid()},
    {name: 'Umbel Family', source: umbel, clicked: false, alt: 'Scientific illustration of the umbel plant family.', key: uniqid()},
    {name: 'Poppy Family', source: poppy, clicked: false, alt: 'Scientific illustration of the poppy plant family.', key: uniqid()},
    {name: 'Myrtle Family', source: myrtle, clicked: false, alt: 'Scientific illustration of the myrtle plant family.', key: uniqid()},
    {name: 'Cactus Family', source: cactus, clicked: false, alt: 'Scientific illustration of the cactus plant family.', key: uniqid()},
    {name: 'Passion Family', source: passion, clicked: false, alt: 'Scientific illustration of the passion plant family.', key: uniqid()},
    {name: 'Composite Family', source: composite, clicked: false, alt: 'Scientific illustration of the composite plant family.', key: uniqid()},
    {name: 'Nasturtium Family', source: nasturtium, clicked: false, alt: 'Scientific illustration of the nasturtium plant family.', key: uniqid()},
    {name: 'Side-Saddle Family', source: sideSaddle, clicked: false, alt: 'Scientific illustration of the side-saddle plant family.', key: uniqid()}];
    return shuffle(arr);
}