import API from '../api'
import axios from  'axios'
//轮播
function getHomeBanner(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.homeServerBanner}?__t=${new Date().getTime()}`)
        .then((response)=>{
            resolve(response.data.data.billboards)          
        })
        .catch((error)=>{
            console.log(error)
        })
    })     
}
//热映
function getNowPlayingData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.nowPalying}?__t=${new Date().getTime()}&page=1&count=5`)
        .then((response)=>{
            resolve(response.data.data.films)
           
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}
//即将上映
function comingSoon(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.comingSoon}?__t=${new Date().getTime()}&page=1&count=3`)
        .then((response)=>{
            resolve(response.data.data.films)
            
        })
        .catch((errpr)=>{
            console.log(error)
        })
    })
}
//详情
function detailsData(id){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.detailsData}${id}?__t=${new Date().getTime()}`)
        .then((response)=>{
            var obj={};
            obj.name=response.data.data.film.name;
            obj.pathimg=response.data.data.film.cover.origin; 
            obj.director=response.data.data.film.director; //导演
            obj.category=response.data.data.film.category; // 类型
            obj.intro=response.data.data.film.intro;   
            obj.language=response.data.data.film.language; //语言
            obj.nation=response.data.data.film.nation; //地区
            obj.actors=response.data.data.film.actors.map((item,index)=>{
                return item.name
            });//演员
            obj.premiereAt= new Date(response.data.data.film.premiereAt).getMonth()+1 ; //月
            obj.premiereAt1= new Date(response.data.data.film.premiereAt).getDate() ; //日       
            obj.synopsis=response.data.data.film.synopsis // 故事背景
            resolve(obj)
        })
        .catch((error)=>{
            console.log(error)
        })
    })
}
//城市数据 
function cityData(){
    return new Promise((resolve,reject)=>{
        axios.get(`${API.cityData}?__t=${new Date().getTime()}`)
        .then((response)=>{
            console.log(response)
            var arr=response.data.data.cities.map((item,index)=>{
                   var obj={};                  
                   if(item.pinyin.startsWith('A')==true){
                     obj.a=item                                  
                    console.log(obj)
                    }
                    else if(item.pinyin.startsWith('B')==true){
                     obj.b=item
                    }

                 return obj
                  
               })
                console.log(arr)
                resolve(arr)
        })
        .catch((error)=>{
            console.log(error)
            
        })
    })
} 

//影院数据
 function cinemaData(){
     return new Promise((resolve,reject)=>{
         axios.get(`${API.cinemaData}?__t=${new Date().getTime()}`)
         .then((response)=>{
            var arr=response.data.data.cinemas;
                var obj={};
            arr.map((item,index)=>{
                 var name=item.district.name;
                 obj[name]=[]; 
               
                return arr
                
            })
            console.log(arr)
            
          //  resolve(arr) 
         })
         .catch((error)=>{
             console.log(error)
         })
     })
 }
export default{
    getHomeBanner,
    getNowPlayingData,
    comingSoon,
    detailsData,
    cityData,
    cinemaData
}    