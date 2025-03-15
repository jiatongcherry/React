import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from '../data/products.js';
import {loadCart} from '../data/cart.js';

async function loadPage(){
  try{
    await loadProductsFetch();
    await new Promise((resolve) => {
          loadCart(() => {
            resolve();
          });
        });
  } catch(error){
    console.log('error');
  }
  
  renderOrderSummary();
  renderPaymentSummary();
}


Promise.all([
  loadProductsFetch(),
  new Promise((resolve) => {
    loadCart(() => {
      resolve();
    });
  })
]).then(() => {
  renderOrderSummary();
  renderPaymentSummary();
});

// new Promise((resolve) => {
//   loadProducts(() => {
//     resolve('value1');
//   });
// }).then((value) => {
//   return new Promise((resolve) => {
//     loadCart(() => {
//       resolve();
//     });
//   })
// }).then(() => {
//   renderOrderSummary();
//   renderPaymentSummary();
// });

// //to many nesting inserting code inside code
// loadProducts(() => {
//   loadCart(() => {
//     renderOrderSummary();
//     renderPaymentSummary();
//   });
  
// });

