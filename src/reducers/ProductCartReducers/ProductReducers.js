import * as types from '../../constants/actionType';

var data = JSON.parse(localStorage.getItem('APTX'));

var initState =data ? data : [];
const productReducers = (state = initState, action) => {
    var index = -1;
    var {product, quantity} = action;
    switch (action.type) {
        case types.Add_To_Cart:
            // console.log(action) => de biet la gi (vi trong action params co product and quantity)
            index = findToIndex(state, product);
            if(index !== -1){
                state[index].quantity += quantity;
            }
            else{
                state.push({
                    product,
                    quantity
                });
            }    
            localStorage.setItem('APTX', JSON.stringify(state));
            // console.log(state);
             return[...state];
        default:
            return [...state];
    }
}
var findToIndex = (carts, product) =>{
    var index = -1;
    if (carts.length > 0) {
        for (var i = 0; i < carts.length; i++) {
            if(carts[i].product.id === product.id) {
                index = i;
                break;
            }
        }  
    }
    return index;
}
export default productReducers;
// var initState = [
//     {
//         id : 1,
//         name : 'IP 7',
//         image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
//         description : 'ABCBCBC',
//         price : 500,
//         inventory : 10, //so luong hang con lai
//         rating : '3'
//     },{
//         id : 2,
//         name : 'IP 1',
//         image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
//         description : 'NCNCNCNCN',
//         price : 1500,
//         inventory : 10, //so luong hang con lai
//         rating : '2'
//     },{
//         id : 3,
//         name : 'IP 2',
//         image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
//         description : 'KSMCKSMCKMC',
//         price : 2500,
//         inventory : 10, //so luong hang con lai
//         rating : '4'
//     },{
//         id : 4,
//         name : 'IP 221',
//         image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
//         description : 'KSMCKSMCKMC',
//         price : 3500,
//         inventory : 10, //so luong hang con lai
//         rating : '4'
//     }
// ];