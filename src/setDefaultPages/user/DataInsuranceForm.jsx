import ReadDataInsurance from "../../setreadDatas/user/ReadDataInsurance"

const DataInsuranceForm = () => {
  return (
    <>
      <div className="fadeIn">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-4">
                <h1><i className="fas fa-car-crash"/> รายการแจ้งข้อมูลประกันภัย</h1>
              </div>
              <div className="col-sm-8">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="<?php echo base_url()?>systemApp/dashboard">หน้าหลัก</a></li>
                  <li className="breadcrumb-item">ระบบบริหารจัดการงานประกันภัย</li>
                  <li className="breadcrumb-item active">แจ้งข้อมูลประกันภัย</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
          <hr />
          <section className="content-body">
           <ReadDataInsurance/>
          </section>
        </section>
       
      </div>
      
    </>
  )
}

export default DataInsuranceForm