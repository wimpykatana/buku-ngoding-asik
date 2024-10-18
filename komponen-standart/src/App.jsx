import Instructions from './Instructions';
import './App.css'

const displayEmojiName = e => alert(e.target.id)
const emojis = [
  {
    emoji: '😀',
    name: 'Muka Senyum'
  },
  {
    emoji: '🎉',
    name: 'Terompet Pesta'
  },
  {
    emoji: '💃',
    name: 'Wanita Berdansa'
  }
]

function App() {
  const greeting = 'greeting';
  const displayAction = false;

  return (
    <div className='container'>
      <h1 id={greeting}>Hello, World !!!</h1>
      {displayAction && <p>Saya ngoding JSX</p>}
      <Instructions />
      <ul>
      {
        emojis.map(emoji => (
          <li key={emoji.name}>
            <button 
              id={emoji.name} 
              onClick={displayEmojiName}>
              <span 
                role='img'
                aria-label={emoji.name}
                id={emoji.name}
                className='emoji'
              >
                {emoji.emoji}
              </span>
            </button>
          </li>
        ))
      }
      </ul>
    </div>
  )
}

export default App
