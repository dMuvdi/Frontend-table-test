import React from 'react';
import './project_table.css';

const ProjectTable = () => {
  return (
      <div className='container'>
        <div className='project_text'>
            <p>Los proyectos de juan</p>
        </div>
        <div className='project_table_container'>
            <table className='projects_table' border=''>
                <thead className='project_titles'>
                    <tr className='text_head'>
                        <th>Project Title</th>
                        <th>Author</th>
                        <th>Submittion Date</th>
                        <th>State</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody className="project_table-body">
                    <tr className='text_body'>
                        <td>Investigación sobre las matas de bogotá</td>
                        <td>Mario Mendez</td>
                        <td>2022-14-08</td>
                        <td>Closed</td>
                        <td>
                        <div>
                            <button 
                            className='publish_button'
                            >
                            Publish
                            </button>
                        </div>
                        </td>
                        <td>
                        <div>
                            <button 
                            className='discard_button'
                            >
                            Discard
                            </button>
                        </div>
                        </td>
                    </tr>
                    <tr className='text_body'>
                        <td>Investigación sobre las matas de cartacho</td>
                        <td>Mario Mendez</td>
                        <td>2022-14-08</td>
                        <td>Closed</td>
                        <td>
                        <div>
                            <button 
                            className='publish_button'
                            >
                            Publish
                            </button>
                        </div>
                        </td>
                        <td>
                        <div>
                            <button 
                            className='discard_button'
                            >
                            Discard
                            </button>
                        </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
  )
}

export default ProjectTable
