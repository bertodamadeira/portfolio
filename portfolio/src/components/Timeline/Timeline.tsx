import React from 'react'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import { Typography } from '@material-ui/core';

import './Timeline.css';

interface Props {
  title?: string;
  icon: any;
  data: any;
  children?: JSX.Element;
}

let summaryKey = 0;

const CustomTimeline = ({ title, icon, data}: Props) => {

  return (
    <Timeline className={'timeline'}>
      {/* Header */}
      <TimelineItem className={'timeline_firstItem'}>
        <TimelineSeparator>
          <TimelineDot className={'timeline_dot_header'}> {icon} </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant='h6' className={'timeline_header'}>
            {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {data.map((obj: any) => (
        <TimelineItem key={obj.key}>
          <TimelineSeparator className={'separator_padding'}>
            <TimelineDot className={'timeline_dot'} />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography className="timeline_data_title">{obj.title}</Typography>
            <Typography className="timeline_data_duration">{obj.duration}</Typography>
            <ul className="timeline_data_summary">
              {(obj.summary as string).split("\n").map((str: string) => { summaryKey++; return (<li key={summaryKey}>{str}</li>) })}
            </ul>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  )
}

export default CustomTimeline