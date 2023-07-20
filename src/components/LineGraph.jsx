
import React from 'react'
import arr from '../data.json';
import { CartesianGrid, Label, Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

function LineGraph() {

    const dataMax = Math.max(...arr.map((el) => el.Year))
    const dataMin = Math.min(...arr.map((el) => el.Year))

    console.log(arr.length)

    return (
        <ResponsiveContainer width={'100%'} aspect={5 / 3}>
            <LineChart data={arr} >
                <CartesianGrid vertical={false}/>
                <XAxis dataKey={'Year'} domain={[dataMin - 4, dataMax + 4]} type="number">
                    <Label value="Years" offset={-5} position="insideBottom" />
                </XAxis>
                <YAxis >
                    <Label value='Medals' angle='-90' offset={20} position='center' />
                </YAxis>
                <Line dataKey={'Medals'} />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineGraph