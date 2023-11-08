import { NavLink } from 'react-router-dom';


const ReadDataInsurance = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="mt-2 row">
            <div className="col-md-6 text-left mb-2">
              <NavLink to="/AddInsuranceForm" type="button" className="text-white btn btn-primary btn-sm font-weight-bold">
                <i className="fas fa-file-medical mr-1" /> เพิ่มรายการแจ้งข้อมูลประกันภัย
              </NavLink>
            </div>
            <div className="col-md-6 text-right mb-2">
              <button type="button" className="btn btn-warning btn-sm" data-role="Click_PullData"><i className="fas fa-sync-alt" /></button>
            </div>
          </div>
        </div>
        <div className="p-0 card-body table-responsive">
          
        </div>
        <div className="card-footer">

        </div>
      </div>  
    </>
  )
}

export default ReadDataInsurance