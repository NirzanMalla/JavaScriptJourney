// let p = new Promise((resolve, reject)=>{
//     let a = 1+2;
//     if(a==2){
//         resolve("Success");

//     }else{
//         reject("Failed");

//     }
// })

// p.then((Text) => {
//     console.log('This is in the then '+ Text);
// }).catch((message)=>{
//     console.log('This is in the catch '+ message);
// })

//.then vaneko resolve ko outcome dekhauna use hunxa
//.catch vaneko reject ko outcome dekhauna use hunxa

//callback function execution
const userRegistered = false;
const userLogggedin = true;
// function Systeminfo (callback, errorcallback){
//     if(userRegistered){
//         errorcallback({
//             name: 'User not Registered',
//             text: ':('
//         })
//     }else if(userLogggedin){
//         errorcallback({
//             name:'User not Logged in',
//             text:':('
//         })
//     }else{
//         callback({
//             name:'User login successful',
//             text:':)'
//         })
//     }
// }

// Systeminfo((text)=>{
//     console.log('Success: ', text.name + text.text)}, 
//     (err)=>{
//         console.error(err.name +''+ err.text)
//     }
// )
//yei callback function lai aba promise mah solve gareko solution tala dekhayeko xah 

let Systeminfo = new Promise((resolve, reject)=>{
    if(userRegistered){
        reject({
            name: 'User not Registered',
            text: ':('
        })
    }else if(userLogggedin){
        reject({
            name:'User not Logged in',
            text:':('
        })
    }else{
        resolve({
            name:'User login successful',
            text:':)'
        })
    }
})
Systeminfo.then((text)=>{
    console.log('Success: ', text.name + text.text)})
    .catch((err)=>{
        console.error(err.name +''+ err.text)
    }
)