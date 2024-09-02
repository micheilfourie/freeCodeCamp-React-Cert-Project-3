import './App.css';
import { useState, useEffect } from 'react';

const drumBeats = [
  { key: "Q", name: "Heater 1", link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3" },
  { key: "W", name: "Heater 2", link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3" },
  { key: "E", name: "Heater 3", link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3" },
  { key: "A", name: "Heater 4", link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3" },
  { key: "S", name: "Clap", link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3" },
  { key: "D", name: "Open HH", link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3" },
  { key: "Z", name: "Kick n' Hat", link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3" },
  { key: "X", name: "Kick", link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3" },
  { key: "C", name: "Closed HH", link: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3" }
]

function App() {

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
  }, []);

  const [display, setDisplay] = useState('Press a button to play.');

  const handleClick = (e) => {
    setDisplay(e.target.id);
    const audio = e.target.querySelector('.clip');
    setTimeout(() => {
      audio.currentTime = 0;
      audio.play();
    }, 100);
  }

  const handleKeyDown = (e) => {
    const item = drumBeats.find((item) => item.key.toLowerCase() === e.key)
    if (item) {
      setDisplay(item.name);
      const audio = document.getElementById(item.key);
      setTimeout(() => {
        audio.currentTime = 0;
        audio.play();
      }, 100);
    }
  }

  return (
    <div id="drum-machine">
      <span id="display">{display}</span>
      <div className='button-container'>
        {drumBeats.map((item) => (
          <button
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            className='drum-pad'
            id={item.name}
            key={item.key}>
            {item.key}
            <audio
              className="clip"
              id={item.key}
              src={item.link}>
            </audio>
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
