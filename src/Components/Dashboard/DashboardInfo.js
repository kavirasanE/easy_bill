import React from 'react'

const DashboardInfo = ({data}) => {

  return (
   <div className='row'>
      <div className='col-8 col-md-3 border border-primary rounded-4 m-4 p-4 fw-bold '>{data.SubscribedUsers} :09</div>
      <div className='col-8  col-md-3 border border-primary rounded-4 m-4 p-4 fw-bold'>{data.NotSubscribed}: 03</div>
      <div className='col-8 col-md-3 border border-primary rounded-4 m-4 p-4 fw-bold'>{data.Approved}:08</div>
      <div className='col-8 col-md-3 border border-primary rounded-4 m-4 p-4 fw-bold'>{data.Pending}:02</div>
      <div className='col-8 col-md-3 border border-primary rounded-4 m-4 p-4 fw-bold'>{data.Expired}:04</div>
    </div>
  )
}

export default DashboardInfo
