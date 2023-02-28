import React, { useEffect } from 'react'
import { useCounterStore } from  './store/counterStore'
import { shallow } from 'zustand/shallow'

function App() {

    const { title, count, posts } = useCounterStore((state) => ({
      count: state.count,
      title: state.title,
      posts: state.posts,
    }), shallow)
  // const count = useCounterStore((state) => state.count)
  // const title = useCounterStore((state) => state.title)

    const { increment, decrement, getPosts, clearStore, multiply } = useCounterStore()

    useEffect(() => {
      getPosts()
    }, [])
    
  
  return (
    <div>
      <h1 className='title'>State management test with Zustang + TypeScript</h1>
      <h2>{title}: {count}</h2>

      <button
        onClick={() => {
          increment(10)
        }}
      >
        Increment by 10
      </button>
      <button
        onClick={() => {
          decrement(5)
        }}
      >
        Decrement by 5
      </button>

      <button
        onClick={() => multiply(2)}
      >
        Multiply by 2
      </button>


      <hr />
        <div>
          <button
            onClick={() => clearStore()}
            className="warning-btn"
          >
            Clear Store
          </button>
          <span className='warning'> *NOTE: it clears the page completely and requires to reload it again.</span>
        </div>
      <hr />
        <h2>Sample posts:</h2>
      <div className='posts-container'>
        {posts.map((item, key) => {
          return (
            <ul>
              <li key={item.id}>
                <h3>{item.title.toUpperCase()}</h3>
                <p>{item.body}</p>
              </li>
            </ul>
          )
        })}
      </div>

    </div>
  )
}

export default App