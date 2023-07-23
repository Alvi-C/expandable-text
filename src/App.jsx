import StoryList from "./pages/StoryList.jsx"



function App() {


  return (
    <>
      <div className='my-10'>
        <h1 className='text-xl font-bold text-center '>
          Expandabe Text
        </h1>
      </div>
      <div>
        <StoryList/>
        <p className='text-xs text-center text-gray-400 mt-10 mb-8'>
          created by Jahedul Huda Chowdhury (Alvi)
        </p>
      </div>
    </>
  )
}

export default App
