import React, { useState } from 'react'
import data from '../data.json'
import LineGraph from './LineGraph'

function Home() {

    const [toggle, setToggle] = useState(false)

    return (
        <div style={{ width: "100%", margin: 'auto' }}>
            <div style={{ margin: '50px auto', display: 'flex', width: '180px' }}>
                <button
                    onClick={() => { setToggle(false) }}
                    disabled={toggle === false}
                    style={{ color: toggle ? '' : 'blue', border: 'none', fontSize: 'large', margin: 'auto', borderBottom: toggle ? '0' : '2px solid blue', backgroundColor: 'white' }}>
                    Table
                </button>
                <button
                    onClick={() => { setToggle(true) }}
                    disabled={toggle === true}
                    style={{ color: toggle ? 'blue' : '', border: 'none', fontSize: 'large', margin: 'auto', borderBottom: toggle ? '2px solid blue' : '0', backgroundColor: 'white' }}>
                    Line Chart
                </button>
            </div>
            {
                toggle ?
                    <div style={{ margin: '50px auto', width:'40%' }}>
                        <LineGraph/>
                    </div>
                    :
                    <table style={{ margin: '50px auto' }}>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Year</th>
                                <th>Medals</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                data?.map((el) => {
                                    return <tr key={el.Id}>
                                        <td>{el.Id}</td>
                                        <td>{el.Year}</td>
                                        <td>{el.Medals}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
            }
        </div>
    )
}

export default Home