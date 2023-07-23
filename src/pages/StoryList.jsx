import Expandable from '../components/Expandable.jsx'
import story from '../data/story.js'

const StoryList = () => {
    return (
      <>
        <div className='my-10'>
          <h1 className='text-3xl font-bold text-center '>
            <span className='pr-2'>The</span>
            <span className='before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-pink-500 relative inline-block'>
              <span className='relative text-white font-medium italic pr-1'>
                Story{' '}
              </span>
            </span>{' '}
            Book
            <span>
              {' '}
              <i className='fa-solid fa-heart fa-beat text-pink-500' />
            </span>
          </h1>
        </div>
        <div className='gap-10 flex flex-wrap justify-center'>
            {
                story.map((story) => {
                    return <Expandable key={story.id} {...story} />
                })
            }
        </div>
      </>
    )
}

export default StoryList
