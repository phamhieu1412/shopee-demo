import React, { Fragment } from 'react';
import Popover from '@material-ui/core/Popover';



export default function TransportFee() {
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
        27.000đ - 33.000đ
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
        <div className=" transport-fee">
          <ul>
            <li><h5>Vận chuyển hỏa tốc</h5></li>
            <li><h5>Vận chuyển nhanh</h5></li>
            <li>
              <h5>J & T Express</h5>
              <p>Nhận hàng vào 26 Th12 - 27 Th12</p>
              <p><strong>Miễn phí vận chuyển</strong> cho đơn hàn từ <strong>150.000đ</strong>(giảm tối đa <strong>30.000đ</strong>)</p>
            </li>
            <li>
              <h5>Gia hàng nhanh</h5>
              <p>Nhận hàng vào 26 Th12 - 27 Th12</p>
              <p><strong>Miễn phí vận chuyển</strong> cho đơn hàn từ <strong>150.000đ</strong>(giảm tối đa <strong>30.000đ</strong>)</p>
            </li>
            <li>
              <h5>Giao hàng tiết kiệm</h5>
              <p>Nhận hàng vào 26 Th12 - 27 Th12</p>
              <p><strong>Miễn phí vận chuyển</strong> cho đơn hàn từ <strong>150.000đ</strong>(giảm tối đa <strong>30.000đ</strong>)</p>
            </li>
          </ul>
        </div>
      </Popover>
    </Fragment>
  );
}