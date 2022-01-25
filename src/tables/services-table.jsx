import React from 'react'
import './table.css'

const ServicesTable = ({ data }) => {
  return (
    <table className='services-table'>
      <tbody>
        {data.map(data => (
          <tr key={data.key}>
            <td>{data.service}</td>
            <td className='service-table-time'>{data.time}Min</td>
          </tr>
        ))}{' '}
      </tbody>
    </table>
  )
}

export default ServicesTable
