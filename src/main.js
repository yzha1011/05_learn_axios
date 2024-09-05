import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'

createApp(App).mount('#app')

// get request
// axios.request({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: "get"
// }).then(res => {
//   console.log("res: ", res.data)
// })

// axios.get("http://123.207.32.32:9002/lyric", {
//   params: {
//     id: 500665346
//   }
// }).then(res => {
//   console.log("res: ", res.data.lrc)
// })


// post request
// axios.post("http://123.207.32.32:1888/02_param/postjson", {
//   name: "coderwhy",
//   password: "123456"
// }).then(res => {
//   console.log("res: ", res.data)
// })

// axios.post("http://123.207.32.32:1888/02_param/postjson", {
//     data: {
//       name: "coderwhy",
//       password: "123456"
//     }
//   }).then(res => {
//     console.log("res: ", res.data)
//   })

// baseUrl
// const baseUrl = "http://123.207.32.32:8000"
// axios.defaults.baseURL = baseUrl
// axios.defaults.timeout = 10000
// axios.defaults.headers = {}

// axios.get("home/multidata").then(res => {
//   console.log("res: ", res.data)
// })
// axios.all([
//   axios.get("/home/multidata"),
//   axios.get("http://123.207.32.32:9002/lyric?id=500665346")
// ]).then(res => {
//   console.log("res: ", res)
// })

// instance
// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:9002",
//   timeout: 6000,
//   headers: {}
// })

// instance1.get("/lyric", {
//   params: {
//     id: 500665346
//   }
// }).then(res => {
//     console.log("res: ", res.data.lrc)
//   })
  

// const instance2 =  axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 10000,
//   headers: {}
// })


axios.interceptors.request.use((config) => {
  console.log("request success")
  // start loading animation
  // change the configuration
  // 1. header
  // 2. authentication cookie/token
  // 3. change some request parameters

  return config
}, (err) => {
  console.log("request fail")
  return err
})
axios.interceptors.response.use((res) => {
  console.log("response success")
  // end the loading animation
  // change the data
  return res.data
}, (err) => {
  console.log("response fail")
  return err
})

axios.get("http://123.207.32.32:9002/lyric", {
  params: {
    id: 500665346
  }
}).then(res => {
  console.log("res: ", res)
}).catch(err => {
  console.log(err)
})
