// Exercise #1: Food Order
// // ห้สร้าง Object ที่มีชื่อว่า foodOrder โดยมี Requirement ดังต่อไปนี้
// Object foodOrder ต้องไม่สามารถ Reassign ตัว Value ได้
// สร้าง Key orderNumber ที่มี Value เป็น "A0234"
// สร้าง Key address ที่มี Value เป็น "Bangkok"
// สร้าง Key paymentType ที่มี Value เป็น "Cash"
// สร้าง Key totalPrice ที่มี Value เป็น 4500
// สร้าง Key restaurantName ที่มี Value เป็น "MK"
// Start coding here
const foodOrder ={
    orderNumber: "A0234",
    address: "Bangkok",
    paymentType: "Cash",
    totalPrice: 4500,
    restuarantName: "mk"
}
foodOrder.totalPrice = 5000;
console.log(foodOrder.totalPrice)
foodOrder.paymentType = "CreditCard";
console.log(foodOrder)