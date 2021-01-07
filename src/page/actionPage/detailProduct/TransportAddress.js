import React, { Fragment } from 'react';
import Popover from '@material-ui/core/Popover';


export default function TransportAddress() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;


  return (
    <Fragment>
      <span className="ml-25" aria-describedby={id} variant="contained" color="primary" onClick={handleClick} >
        Huyện Ba Vì, Hà Nội
      </span>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <div className="transport-address">
          <ul>
            <form>
              <input type="text" />
            </form>
            <li>An Giang</li>
            <li>Bà Rịa - Vũng Tàu</li>
            <li>Bạc Liêu</li>
            <li>Bắc Ninh</li>
            <li>Bến Tre</li>
            <li>Bình Dương</li>
            <li>Bình Định</li>
            <li>Bình Phước</li>
            <li>Bình Thuận</li>
            <li>Cà Mau</li>
            <li>Cần Thơ</li>
            <li>Cao Bằng</li>
            <li>Đà Nẵng</li>
            <li>Đắk Lắk</li>
            <li>Đắk Nông</li>
            <li>Điện Biên</li>
            <li>Đồng Nai</li>
            <li>Đồng Tháp</li>
            <li>Gia Lai</li>
            <li>Hà Giang</li>
            <li>Hà Nam</li>
            <li>Hà Nội</li>
            <li>Hà Tĩnh</li>
            <li>Hải Dương</li>
            <li>Hải Phòng</li>
            <li>Hậu Giang</li>
            <li>Hòa Bình</li>
            <li>Hưng Yên</li>
            <li>Khánh Hòa</li>
            <li>Kiên Giang</li>
            <li>Kon Tum</li>
            <li>Lai Châu</li>
            <li>Lâm Đồng</li>
            <li>Lạng Sơn</li>
            <li>Lào Cai</li>
            <li>Long An</li>
            <li>Nam Định</li>
            <li>Nghệ An</li>
            <li>Ninh Bình</li>
            <li>Ninh Thuận</li>
            <li>Phú Thọ</li>
            <li>Phú Yên</li>
            <li>Quảng Bình</li>
            <li>Quảng Nam</li>
            <li>Quảng Ngãi</li>
            <li>Quảng Ninh</li>
            <li>Quảng Trị</li>
            <li>Sóc Trăng</li>
            <li>Sơn La</li>
            <li>Tây Ninh</li>
            <li>TP. Hồ Chí Minh</li>
            <li>Thái Bình</li>
            <li>Thái Nguyên</li>
            <li>Thanh Hóa</li>
            <li>Thừa Thiên Huế</li>
            <li>Tiền Giang</li>
            <li>Trà Vinh</li>
            <li>Tuyên Quang</li>
            <li>Vĩnh Long</li>
            <li>Vĩnh Phúc</li>
            <li>Yên Bái</li>
          </ul>
        </div>
      </Popover>
    </Fragment>
  );
}

