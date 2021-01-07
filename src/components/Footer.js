import React from 'react';
import '../myCSS/Footer.css';

function Footer(props) {
  return (
    <div className="container">
      <div className="row">
        <div className="footer" >
          <div className="footer-left">
            <p>© 2019 Shopee. Tất cả các quyền được bảo lưu.</p>
          </div>
          
          <div className="footer-right">
            <p>Quốc gia & Khu vực:</p>
            <div className="footer-area">
              <p>Singapore</p>
              <p>Indonesia</p>
              <p>Đài Loan</p>
              <p>Thái Lan</p>
              <p>Malaysia</p>
              <p>Việt Nam</p>
              <p>Philippins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;