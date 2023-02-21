import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import data from './data.json'

const Visualize = () => {
    return (
      <div style={{ backgroundColor: '#272222', paddingTop: 15, paddingBottom: 15 }}>
        <h1 style={{ marginBottom: 25, textAlign: 'center', fontFamily: 'monospace', color: '#1EC1C8' }}>
          Annual number of human visits to space, World, 1961 to 2021
        </h1>
        <ResponsiveContainer width={'100%'} height={500}>
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Year" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line name='Annual Number of Visits' type="monotone" dataKey="annual_visits" stroke="#1EC1C8" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
        <h3 style={{ paddingTop: 35, textAlign: 'left', fontFamily: 'monospace', color: '#1EC1C8', marginLeft: '5%' }}>
          <span style={{ color: '#8CAFB1' }}>1&#41;&nbsp;</span>
          The page I examined represents the annual human visits to space from 1961 to 2021. 
          You can view the data for each country or the entire world.&nbsp;
          <a href='https://ourworldindata.org/grapher/annual-space-visits?country=~OWID_WRL' style={{ color: '#822799' }} target="_blank" rel="noreferrer" >
            Link to the data examined
          </a>
        </h3>
        <h3 style={{ paddingTop: 35, textAlign: 'left', fontFamily: 'monospace', color: '#1EC1C8', marginLeft: '5%', lineHeight: 1.8 }}>
          <span style={{ color: '#8CAFB1' }}>2&#41;&nbsp;</span>
            The information delivered is the total number of humans that went to space from around the world. 
            It is visualized by a bar chart, a map where you can see which countries sent astronauts in a specific year and 
            a table where it shows the absolute and the relative changes given a specific year range. The colors used contrast with each other,
            making the visualization plainly visible. The words are descriptive, notes and details are typed down in a smaller font size which
            makes the title to be more on the foreground.
        </h3>
        <h3 style={{ paddingTop: 35, textAlign: 'left', fontFamily: 'monospace', color: '#1EC1C8', marginLeft: '5%', lineHeight: 1.8 }}>
          <span style={{ color: '#8CAFB1' }}>3&#41;&nbsp;</span>
            Visits to space happen in long periods of time, as space programs are developed over a long time and they follow each other, so
            what is the frequency of people going to space?
        </h3>
        <h3 style={{ paddingTop: 35, paddingBottom: 35, textAlign: 'left', fontFamily: 'monospace', color: '#1EC1C8', marginLeft: '5%', lineHeight: 1.8 }}>
          <span style={{ color: '#8CAFB1' }}>5&#41;&nbsp;</span>
            This chart would be useful when delivering a represtentation on space programs that aimed at sending people to space. I would use it
            if I gave a detailed talk about the space programs where the countries of the world have successfuly sent people to space.
        </h3>
      </div>
    )
  }

export default Visualize