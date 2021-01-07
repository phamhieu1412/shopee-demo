import React from 'react';
import '../myCSS/Policy.css';

function Policy(props) {
  return (
    <div className="policy" >
      <div className="container">
        <div className="row">
          <div className="policy-content">
            <p>CHÍNH SÁCH BẢO MẬT</p>
            <p>QUY CHẾ HOẠT ĐỘNG</p>
            <p>CHÍNH SÁCH VẬN CHUYỂN</p>
            <p>CHÍNH SÁCH TRẢ HÀNG VÀ HOÀN TIỀN</p>
          </div>
          <div className="policy-img">
            <img src="http://online.gov.vn/Images/dadangky.png" alt="policy" />
            <img src="http://online.gov.vn/Images/dadangky.png" alt="policy" />
            <img src="http://online.gov.vn/Images/dadangky.png" alt="policy" />
          </div>
          <div className="policy-address">
            <p>Địa chỉ: Tầng 28, Tòa nhà trung tâm Lotte Hà Nội, 54 Liễu Giai, phường Cống Vị, Quận Ba Đình, Hà Nội. Tổng đài hỗ trợ: 19001221 - Email: support@shopee.vn</p>
            <p>Mã số doanh nghiệp: 0106773786 do Sở Kế hoạch & Đầu tư TP Hà Nội cấp lần đầu ngày 10/02/2015</p>
            <p>© 2015 - Bản quyền thuộc về Công ty TNHH Shopee</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Policy;