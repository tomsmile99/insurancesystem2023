import { NavLink, useLocation } from 'react-router-dom';
// import {encryptStorage} from '../../security/EncryptStorage'


import { Base64 } from "js-base64";
import { userToken } from '../../recoilstore/userStores';
import { useRecoilValue } from 'recoil';


const Navbar = ({FullnamePer}) => {
  let location = useLocation();
  
  const getstore = useRecoilValue(userToken)
  const _AgU = Base64.decode(getstore.AgU)
  const _PerPST = Base64.decode(getstore.PerPST)
  const _PerWP = Base64.decode(getstore.PerWP)

  return (
    <>
      <aside className="main-sidebar elevation-4 sidebar-light-primary">
        {/* Brand Logo */}
        <NavLink to="/" className="brand-link">
          <img
            src='assets/img/img_icon/logo saksiam59(150x150px).png'
            alt="Saksiam Logo"
            className="brand-image img-circle elevation-3"
          />
          <span className="brand-text" style={{fontSize: '12.5pt', fontWeight: 'bold'}}>SAKERP (ISR)</span>
        </NavLink>
        {/* Sidebar */}
        <div className="sidebar os-host os-theme-light os-host-overflow os-host-overflow-y os-host-resize-disabled os-host-scrollbar-horizontal-hidden os-host-transition">

          <div className="os-resize-observer-host observed">
            <div
              className="os-resize-observer"
              style={{ left: 0, right: "auto" }}
            />
          </div>
          <div
            className="os-size-auto-observer observed"
            style={{ height: "calc(100% + 1px)", float: "left" }}
          >
            <div className="os-resize-observer" />
          </div>
          <div className="os-content-glue"
            style={{ margin: "0px -8px", width: 249, height: 155 }}
          />

          <div className="os-padding">
            <div
              className="os-viewport os-viewport-native-scrollbars-invisible"
              style={{ overflowY: "scroll" }}
            >
              <div
                className="os-content"
                style={{ padding: "0px 8px", height: "100%", width: "100%" }}
              >
                {/* Sidebar user panel (optional) */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                  <div className="image">
                    <img
                      src='assets/img/user_icon(40x40).png'
                      alt="User Image"
                      className="img-circle elevation-2"
                    />
                  </div>
                  <div className="info">
                    <span style={{fontSize: 14, fontWeight: 'bold'}} className="d-block">คุณ{FullnamePer}</span>
                  </div>
                </div>
                
                {/* Sidebar Menu */}
                <nav className="mt-2">
                  <ul
                    className="nav nav-pills nav-sidebar flex-column nav-child-indent nav-legacy"
                    data-widget="treeview"
                    role="menu"
                    data-accordion="false"
                  >
                    {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
                    <li className="nav-item">
                      {/* <a className="nav-link" href="http://localhost:8080/systemApp/dashboard"> */}
                      <a className="nav-link" href="https://appncar.sakerp.org/systemApp/dashboard">
                        <i className="nav-icon fas fa-arrow-left"></i>
                        <p>กลับหน้าหลัก</p>
                      </a>
                    </li>
                    <li className="nav-header">เมนูการจัดการ</li>
                    {/* <li className={`${location.pathname === '/' || location.pathname === '/AppTest2' ? 'menu-open' : ''} nav-item`}>
                      <a href="#" className={`${location.pathname === '/' || location.pathname === '/AppTest2' ? 'active' : ''} nav-link`}>
                        <i className="nav-icon fas fa-tachometer-alt" />
                        <p>
                          ยื่นแบบฟอร์มฯ
                          <i className="right fas fa-angle-left" />
                        </p>
                      </a>
                      <ul className="nav nav-treeview" style={{display: location.pathname === '/' || location.pathname === '/AppTest2' ? 'block' : 'none'}}>
                        <li className="nav-item">
                          <NavLink to="/" className={`${location.pathname === '/' ? 'active' : ''} nav-link`}>
                            <i className="fas fa-angle-right nav-icon" />
                            <p>แบบฟอร์มที่ 1</p>
                          </NavLink>
                        </li>
                        <li className="nav-item">
                          <NavLink to="/AppTest2" className={`${location.pathname === '/AppTest2' ? 'active' : ''} nav-link`}>
                          <i className="fas fa-angle-right nav-icon" />
                            <p>แบบฟอร์มที่ 2</p>
                          </NavLink>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item ">
                      <NavLink to="/AppTest3" className={`${location.pathname === '/AppTest3' ? 'active' : ''} nav-link`}>
                        <i className="nav-icon fas fa-clipboard-list" />
                        <p>แจ้งเลขที่ใบเสร็จ 3</p>
                      </NavLink>
                    </li> */}

                    {(_AgU === 'AGAD' || _PerPST === 'PST015' || _PerPST === 'PST019' || _PerPST === 'PST020' || _PerPST === 'PST021' || _PerPST === 'PST022' || _PerPST === 'PST023' || _PerPST === 'PST024' || _PerPST === 'PST025' ||  _PerPST === 'PST083' || _PerPST ==='PST084') && (
                      <>
                        <li className="nav-item">
                          <NavLink to="/" className={`${location.pathname === '/' || location.pathname === '/AddInsuranceForm' ? 'active' : ''} nav-link`}>
                            <i className="nav-icon fas fa-car-crash" />
                            <p>แจ้งข้อมูลประกันภัย</p>
                          </NavLink>
                        </li>
                      </>
                    )}
                    {(_AgU === 'AGAD' || _PerWP === 'WP0013') && (
                      <>
                        <li className="nav-header">เมนูสำหรับเจ้าหน้าที่</li>
                          <li className="nav-item">
                            <NavLink to="/AdminISR/DataISRs" className={`${location.pathname === '/AdminISR/DataISRs' ? 'active' : ''} nav-link`}>
                              <i className="nav-icon fas fa-inbox"/>
                              <p>
                                รายการแจ้งทำประกันภัย <span style={{fontSize: 10}} className="badge badge-danger">200</span>
                              </p>
                            </NavLink>
                          </li>
                      </>
                    )}
                    <li className="nav-header">รายงาน</li>
                    {(_AgU === 'AGAD' || _PerPST === 'PST015' || _PerPST === 'PST019' || _PerPST === 'PST020' || _PerPST === 'PST021' || _PerPST === 'PST022' || _PerPST === 'PST023' || _PerPST === 'PST024' || _PerPST === 'PST025' ||  _PerPST === 'PST083' || _PerPST ==='PST084') && (
                      <>
                        <li className="nav-item">
                          <NavLink to="/report" className={`${location.pathname === '/report' ? 'active' : ''} nav-link`}>
                            <i className="nav-icon fas fa-chart-bar"/>
                            <p>รายงานสรุปการขายประกันภัย</p>
                          </NavLink>
                        </li>
                      </>
                    )}

                    {(_AgU === 'AGAD' || _PerWP === 'WP0013' || _PerPST === 'PST003' || _PerPST === 'PST007' || _PerPST === 'PST009' || _PerPST === 'PST010' || _PerPST === 'PST011' || _PerPST === 'PST012' || _PerPST === 'PST013' || _PerPST === 'PST014') && (
                      <>
                        <li className="nav-item">
                          <NavLink to="/AdminISR/report" className={`${location.pathname === '/AdminISR/report' ? 'active' : ''} nav-link`}>
                            <i className="nav-icon fas fa-chart-bar"/>
                            <p>รายงานสรุปการขายประกันภัย</p>
                          </NavLink>
                        </li>
                      </>
                    )}
                  </ul>
                </nav>
                {/* /.sidebar-menu */}
              </div>
            </div>
          </div>

          
          <div className="os-scrollbar os-scrollbar-horizontal os-scrollbar-unusable os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track">
              <div
                className="os-scrollbar-handle"
                style={{ width: "100%", transform: "translate(0px, 0px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar os-scrollbar-vertical os-scrollbar-auto-hidden">
            <div className="os-scrollbar-track">
              <div
                className="os-scrollbar-handle"
                style={{ height: "15.7544%", transform: "translate(0px, 215px)" }}
              />
            </div>
          </div>
          <div className="os-scrollbar-corner" />
        </div>
        {/* /.sidebar */}
      </aside>



    </>
  )
}

export default Navbar