import FolderCell from './components/FolderCell';

function Mainpage() {
  
  // #region : Object with projects info

  const DesignSystem = {
    urlpath: 'ApraksinDvor',
    projectname: '"Apraksin dvor" design system',
    description: 'The "Apraksin Dvor" rebranding design system contains core elements including typography, components, principles, etc. to establish a new vision.',
    date: '01.11.2023 - ...'
  };
  
  // #endregion

  return (
    <div className='mainpage'>

      <header className='mainpage__header'>
        <span>U<span className='mobile-off'>niversity</span> P<span className='mobile-off'>rojects</span> S<span className='mobile-off'>howcase</span></span>
      </header>

      <span className='line-bottom'></span>

      <main className='mainpage__main'>
       
        <FolderCell urlpath={DesignSystem.urlpath} projectname={DesignSystem.projectname} description={DesignSystem.description}  date={DesignSystem.date} />

      </main>

    </div>
  )
}

export default Mainpage
