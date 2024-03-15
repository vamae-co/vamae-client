import '@/app/not-found.css'
export default function ErrorPage() {
    return (
     <div className="not-found">
        <div className='not-found-message'>
            <h1>404 error!</h1>
            <h2>No such page existing.</h2>
            <h2>Return to <a href='/news'>main</a> page.</h2>
        </div>
     </div>
    )
  }