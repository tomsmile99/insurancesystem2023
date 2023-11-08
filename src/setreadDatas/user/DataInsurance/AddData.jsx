import { NavLink } from 'react-router-dom';
const AddData = () => {
  return (
    <>
      <div className="card">
        <div className="card-header">
          <div className="mt-2 row">
            <div className="col-md-6 text-left mb-2">
              <NavLink to="/"><b><i className="fas fa-chevron-left"></i> ย้อนกลับ</b></NavLink>
            </div>
            <div className="col-md-6 text-right mb-2">
              <b>ฟอร์มแจ้งข้อมูลประกันภัย</b>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="row">
            <div className="col-md-12">
              <h1>Form สำหรับ เพิ่มรายละเอียดข้อมูล</h1>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col-md-6 text-left">
              <div className="textRed">วัน/เวลา ที่บันทึกข้อมูล : 
                <span className="fb">DateTimeThai(date)</span>
              </div>
            </div>
            <div className="col-md-6 text-right">
              <button type="submit" className="btn btn-primary btn-sm mr-2" id="Confrim_SaveForm"><span style={{fontSize: '10pt', fontWeight: 'bold'}}><i className="far fa-save" /> บันทึกข้อมูล</span></button>
              <button type="button" className="btn btn-primary btn-sm disabled" id="Confrim_SaveForm_wait" style={{display: 'none'}}><span style={{fontSize: '10pt', fontWeight: 'bold'}}> <span className="mb-1 spinner-border spinner-border-sm" role="status" aria-hidden="true" /> กรุณารอสักครู่..</span></button>
              <a href="<?php echo base_url()?>systemApp/DataNCBs" type="button" className="btn btn-sm btn-secondary" id="btnback"><span style={{fontSize: '10pt', fontWeight: 'bold'}}>ยกเลิก</span></a>
            </div>
          </div>
        </div>
      </div>  
    </>
  )
}

export default AddData