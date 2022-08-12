import { Typography } from '@material-ui/core'
import React from 'react'
import CustomTimeline from '../../components/Timeline/Timeline'
import StudyIcon from '@material-ui/icons/School'
import WorkIcon from '@material-ui/icons/Work'
import { data } from '../../utils/data'

import "./Experience.css"


const experience = () => {
  return (
    <div className='experience_container'>
      <div className='experience_timelines_container'>
        <div className='studies_container'>
          <Typography className='experience_title'>Estudos</Typography>
          <CustomTimeline icon={<StudyIcon />} data={data.studies} />
        </div>
        <div className='work_container'>
          <Typography className='experience_title'>Trabalho</Typography>
          <CustomTimeline icon={<WorkIcon />} data={data.work} />
        </div>
      </div>

    </div>
  )
}

export default experience