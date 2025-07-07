import GroceryGame from '/src/assets/blogs/grocery-game.html?raw'

const projects = [
  {
    id: 1,
    title: 'C++ Tower Defense Game',
    description: 'Build a tower defense game with pathfinding and waves.',
    image: new URL('/images/defense-game.jpg', import.meta.url).href,
    date: 'Posted on June 15, 2025 – 10:00 AM',
    content: GroceryGame
  },
  {
    id: 2,
    title: '2D Platformer with SDL',
    description: 'Mario-style 2D platformer with SDL and C++.',
    image: new URL('/images/singing-game.jpeg', import.meta.url).href,
    date: 'Posted on June 16, 2025 – 3:30 PM',
  },
  {
    id: 3,
    title: 'Simple Racing Game',
    description: 'Top-down racer with physics and controls.',
    image: new URL('/images/racing-game.jpeg', import.meta.url).href,
    date: 'Posted on June 17, 2025 – 8:00 AM',
  },
  {
    id: 4,
    title: 'Basic FPS Engine',
    description: 'FPS engine with OpenGL and C++ fundamentals.',
    image: new URL('/images/fps-engine-game.jpeg', import.meta.url).href,
    date: 'Posted on June 18, 2025 – 5:00 PM',
  },
  {
    id: 5,
    title: 'C++ Puzzle Game',
    description: 'Addictive puzzle game with scoring and levels.',
    image: new URL('/images/puzzle-game.jpg', import.meta.url).href,
    date: 'Posted on June 19, 2025 – 2:45 PM',
  },
]

export default projects