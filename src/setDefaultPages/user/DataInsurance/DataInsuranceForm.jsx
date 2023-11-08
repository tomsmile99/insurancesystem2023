//import ReadDataInsurance from "../../setreadDatas/user/DataInsurance/ReadDataCard"
import ReadDataInsurance from "../../../setreadDatas/user/DataInsurance/ReadData"


const DataInsuranceForm = () => {
  return (
    <>
      <div className="fadeIn">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2 mt-2">
              <div className="col-sm-4">
                <h1 style={{fontWeight: 'bold'}}><i className="fas fa-car-crash"/> รายการแจ้งข้อมูลประกันภัย</h1>
              </div>
              <div className="col-sm-8 d-none d-lg-block">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="#">หน้าหลัก</a></li>
                  <li className="breadcrumb-item">ระบบบริหารจัดการงานประกันภัย</li>
                  <li className="breadcrumb-item active">รายการแจ้งข้อมูลประกันภัย</li>
                </ol>
              </div>
            </div>
            <hr />
            <div className="row mb-2">
              <div className="col-md-12">
                <ReadDataInsurance/>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
      </div>
    </>
  )
}

export default DataInsuranceForm