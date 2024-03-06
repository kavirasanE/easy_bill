import React from "react";

const ManageSubscriptionInfo = ({ data }) => {
  return (
    <div className="row border border-black m-4 rounded-4">
       <div className=" d-flex justify-content-end px-4 py-2 gap-4"> 
        <button className="rounded-2">Add</button>
        <button className="rounded-2">Edit</button>
        <button className="rounded-2">Delete</button>
       </div>
      <div className="col-4">
        <p className=" border-end ">Price: {data.price}</p>
        </div>
        <div className="col-4">
        <p  className=" border-end ">Validity (Months): {data.validityMonths}</p>
        </div>
        <div className="col-4">
        <p>Printer:{data.printer}</p>
        </div>       
        <div>
        <p className="border-top  border-secondary px-4 p-2 ">Description: {data.description}</p>
      </div>
    </div>
  );
};

export default ManageSubscriptionInfo;
