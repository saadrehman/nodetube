// const c = {
//   l: console.log
// };
//
// const check = () => {
//   if (!('serviceWorker' in navigator)) {
//     throw new Error('No Service Worker support!')
//   }
//   if (!('PushManager' in window)) {
//     throw new Error('No Push API Support!')
//   }
// };
//
// var swRegistration;
//
//
// const registerServiceWorker = async function(){
//   swRegistration = await navigator.serviceWorker.register('/js/notificationServiceWorker.js')
//   console.log(swRegistration);
//
//   return swRegistration
// };
//
// // value of permission can be 'granted', 'default', 'denied'
// // granted: user has accepted the request
// // default: user has dismissed the notification permission popup by clicking on x
// // denied: user has denied the request.
//
//
// var permission;
// const requestNotificationPermission =  async function() {
//   permission = await window.Notification.requestPermission();
//
//   console.log(permission);
//
//   if (permission !== 'granted') {
//     throw new Error('Permission not granted for Notification')
//   }
//
//   return permission
//
// };
//
// const main = async() => {
//   check();
//   swRegistration = await registerServiceWorker();
//   console.log('swRegistration');
//   console.log(swRegistration);
//
//   permission = await
//     requestNotificationPermission();
//   console.log('permission');
//   console.log(permission);
// };
//
//
// // this is basically the post request after you click a button
// const sendNotif = async subscription => {
//   const SERVER_URL = "http://localhost:4000/sendNotif";
//
//   console.log(subscription);
//
//   const response = await fetch(SERVER_URL, {
//     method: "post",
//     headers: {
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(subscription)
//   });
//
//   return response.json();
// };
//
// // this is basically the post request after you click a button
// const unregister = async function(){
//
//   var registrations = await navigator.serviceWorker.getRegistrations();
//   for (var registration of registrations) {
//     console.log(registration);
//     const thing = await registration.unregister()
//     console.log(thing);
//   }
// };
//
// // this is basically the post request after you click a button
// const refreshPage = function( ){
//   location.reload();
// };
//
// // const main = async function () {
// //   check();
// //   swRegistration = await registerServiceWorker();
// //   console.log('swRegistration');
// //   console.log(swRegistration);
// //
// //   permission = await requestNotificationPermission();
// //   console.log('permission');
// //   console.log(permission);
// // };
//
// $('.pushNotificationIcon').click(function{(alert('hello'))})
//
//
//
