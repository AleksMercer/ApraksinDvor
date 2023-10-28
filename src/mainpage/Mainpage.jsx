import React from 'react'
import { Link } from "react-router-dom";
import folder from './media/Folder.svg'

function Mainpage() {



  return (
    <div className='mainpage'>

      <header className='mainpage__header'>
        <span>University Projects Showcase</span>
      </header>

      <span className='line-bottom'></span>

      <main className='mainpage__main'>

        <div className='folder-cell' >
          
          <img className='folder-cell__svg'
          draggable='false'
          src={folder}
          alt='Folder' />
    
          <div className='folder-cell__description'>
    
            <h5>Project name</h5>
    
            <div className='description'>
              <h5>Description:</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi vel, nobis illum nesciunt omnis doloribus. Eveniet quisquam, quas eum deleniti blanditiis vel et hic itaque consectetur odio quasi molestias!</p>
            </div>
    
            <div className='date'>
              <h5>Date:</h5>
              <p>12.12.2000 - 12.15.2000</p>
            </div>
    
          </div>
        </div>
        <div className='folder-cell' >
          
          <img className='folder-cell__svg'
          draggable='false'
          src={folder}
          alt='Folder' />
    
          <div className='folder-cell__description'>
    
            <h5>Project name</h5>
    
            <div className='description'>
              <h5>Description:</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi vel, nobis illum nesciunt omnis doloribus. Eveniet quisquam, quas eum deleniti blanditiis vel et hic itaque consectetur odio quasi molestias!</p>
            </div>
    
            <div className='date'>
              <h5>Date:</h5>
              <p>12.12.2000 - 12.15.2000</p>
            </div>
    
          </div>
        </div>
        <div className='folder-cell' >
          
          <img className='folder-cell__svg'
          draggable='false'
          src={folder}
          alt='Folder' />
    
          <div className='folder-cell__description'>
    
            <h5>Project name</h5>
    
            <div className='description'>
              <h5>Description:</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi vel, nobis illum nesciunt omnis doloribus. Eveniet quisquam, quas eum deleniti blanditiis vel et hic itaque consectetur odio quasi molestias!</p>
            </div>
    
            <div className='date'>
              <h5>Date:</h5>
              <p>12.12.2000 - 12.15.2000</p>
            </div>
    
          </div>
        </div>
        <div className='folder-cell' >
          
          <img className='folder-cell__svg'
          draggable='false'
          src={folder}
          alt='Folder' />
    
          <div className='folder-cell__description'>
    
            <h5>Project name</h5>
    
            <div className='description'>
              <h5>Description:</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi vel, nobis illum nesciunt omnis doloribus. Eveniet quisquam, quas eum deleniti blanditiis vel et hic itaque consectetur odio quasi molestias!</p>
            </div>
    
            <div className='date'>
              <h5>Date:</h5>
              <p>12.12.2000 - 12.15.2000</p>
            </div>
    
          </div>
        </div>
        <div className='folder-cell' >
          
          <img className='folder-cell__svg'
          draggable='false'
          src={folder}
          alt='Folder' />
    
          <div className='folder-cell__description'>
    
            <h5>Project name</h5>
    
            <div className='description'>
              <h5>Description:</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi vel, nobis illum nesciunt omnis doloribus. Eveniet quisquam, quas eum deleniti blanditiis vel et hic itaque consectetur odio quasi molestias!</p>
            </div>
    
            <div className='date'>
              <h5>Date:</h5>
              <p>12.12.2000 - 12.15.2000</p>
            </div>
    
          </div>
        </div>
        <div className='folder-cell' >
          
          <img className='folder-cell__svg'
          draggable='false'
          src={folder}
          alt='Folder' />
    
          <div className='folder-cell__description'>
    
            <h5>Project name</h5>
    
            <div className='description'>
              <h5>Description:</h5>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eligendi vel, nobis illum nesciunt omnis doloribus. Eveniet quisquam, quas eum deleniti blanditiis vel et hic itaque consectetur odio quasi molestias!</p>
            </div>
    
            <div className='date'>
              <h5>Date:</h5>
              <p>12.12.2000 - 12.15.2000</p>
            </div>
    
          </div>
        </div>

      </main>

    </div>
  )
}

export default Mainpage

/* <Link to="/ProjectFirst" className='button'>Переход к проекту 1</Link> */