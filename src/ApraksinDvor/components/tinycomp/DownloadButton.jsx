import React from 'react'

function DownloadButton(props) {

  const picture = props.picture

  return (
    <a className='download-button' href={picture} download>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.9141 1L12.9141 12.586L17.4141 8.086L18.8281 9.5L11.9141 16.414L5.00013 9.5L6.41413 8.086L10.9141 12.586L10.9141 1L12.9141 1Z" fill="white"/>
        <rect x="2" y="20" width="20" height="2" fill="white"/>
        <rect x="2" y="17" width="2" height="3" fill="white"/>
        <rect x="20" y="17" width="2" height="3" fill="white"/>
      </svg>
      Скачать
    </a>
  )
}

export default DownloadButton

/*  <Button picture={} /> */