import { Typography } from '@material-ui/core';
import React from 'react'
import { data } from "../../utils/data"

import "./Portfolio.css"

let summaryKey = 0;

const Portfolio = () => {
  return (
    <div className='portfolio_container'>
      <div className='portfolio_summary_container'>
        <Typography className='portfolio_title'>Resumo profissional</Typography>
        <ul className='portfolio_summary'>
          {(data.info.professionalSummary as string).split("\n").map((str: string) => { summaryKey++; return (<li key={summaryKey}>{str}</li>) })}
        </ul>
      </div>
      <div className='portfolio_technologies'>
        <div className='portfolio_technologies_column'>
          <TechnologieInfo title={"Linguagens e Ferramentas"} list={data.languagesAndTools} />
          <TechnologieInfo title={"Sistemas Operativos"} list={data.operatingSystems} />
        </div>
        <div className='portfolio_technologies_column'>
          <TechnologieInfo title={"Bases de Dados"} list={data.databases} />
          <TechnologieInfo title={"Tecnologias Microsoft"} list={data.microsoftTools} />
        </div>
      </div>
    </div>
  )
}

export default Portfolio

export const TechnologieInfo = ({ title, list }: any) => {
  let technologyKey = 0;
  return (
    <div className='porfolio_technologies_info'>
      <Typography className='portfolio_title'>{title}</Typography>
      <ul>
        {(list).map((str: string) => { technologyKey++; return (<li key={technologyKey}>{str}</li>) })}
      </ul>
    </div>
  )
}