// 首先我们来做一个测试，看 Object.defineProperty 是否支持数组。
function defineReactive(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumerable: true,
        configurable: true,
        get(){
            console.log('读取内容==',val)
            return val;
        },
        set(newVal){
            if (val === newVal) return 
            
             val = newVal
             
             console.log('内容已经改变==',val,obj);
            
        }
    })
    
}

// defineReactive({name:'liu',age:'18'},'name','huahua')

// 还是这个 defineReactive 函数，我们通过它来遍历数组，用数组的索引作为 key，来给每一项打上getter/setter

const array = [1,2,3,4,5]

array.forEach((item, index)=>{
    defineReactive(array, index, item)
})

// 总而言之就是理论上 vue 是可以这样做，但是出于性能考虑没这样做，而是用了一种数组变异办法来触发视图更新。
//vue 如何实现对数组的监听

const arrayKeys = Object.getOwnPropertyNames(arrayMethods)

if (Array.isArray(value)) {
    const augment = hasProto ? protoAugment : copyAugment
    augment(value, arrayMethods, arrayKeys)
    this.observeArray(value)
}else{
    this.walk(value)
}