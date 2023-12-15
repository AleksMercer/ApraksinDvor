import React, { useState }from 'react'

function LoadScreen() {
    // Loading screen
    const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => setIsLoading(false), 750)

  return (
    <>
      { isLoading && 
        <div className='loadscreen'>
          <div className='loading-effect'>
            <svg width="250" height="250" viewBox="0 0 258 254" xmlns="http://www.w3.org/2000/svg">
              <g fill='current'>
                <path d="M148.067 253.823L121.513 165.264L64.3346 238.356L28.035 206.996L92.3704 139.749L0.147461 127.25L8.99302 80.1035L99.2609 101.632L64.8378 15.8252L109.776 0.110085L136.33 88.6693L193.508 15.5776L229.808 46.9369L165.472 114.184L257.695 126.683L248.85 173.83L158.582 152.301L193.005 238.108L148.067 253.823Z"/>
              </g>
            </svg>
          </div>
        </div> 
      }  
    </>
  )
}

export default LoadScreen