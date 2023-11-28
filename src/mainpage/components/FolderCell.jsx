import React from 'react'
import { Link } from "react-router-dom"
import folder from '../media/Folder.svg'

function FolderCell(props) {

  const urlpath = props.urlpath
  const projectname = props.projectname
  const description = props.description
  const date = props.date
  console.log(urlpath)
  return (
    <Link to={urlpath}>

      <div className='folder-cell' >
        
        <img className='folder-cell__svg'
        draggable='false'
        src={folder}
        alt='Folder' />

        <div className='folder-cell__description'>
          <h5>{projectname}</h5>

          <div className='description'>
            <h5>Description:</h5>
            <p>{description}</p>
          </div>

          <div className='date'>
            <h5>Date:</h5>
            <p>{date}</p>
          </div>
        </div>

      </div>

    </Link>
  )
}

export default FolderCell