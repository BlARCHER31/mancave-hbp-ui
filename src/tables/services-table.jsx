import React from 'react'
import './table.css'

const ServicesTable = ({ data }) => {
  return (
    <table className='services-table'>
      <tbody>
        {data.map(data => (
          <tr key={data.key}>
            <td className='services-table-service'>{data.service}</td>
            <td className='services-table-time'>{data.time} min</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default ServicesTable
