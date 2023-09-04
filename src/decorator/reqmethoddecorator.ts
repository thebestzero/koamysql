import "reflect-metadata";

function reqProccess(methodType: string) {
    return function (reqPath:string) {
        return function (target: Object, methodname: string | symbol, descriptor: PropertyDescriptor) {
            Reflect.defineMetadata('path',reqPath,target,methodname)
            Reflect.defineMetadata('methodType',methodType,target,methodname)
            // console.log(Reflect.getMetadata('path',target,methodname))
            // console.log(Reflect.getMetadata('methodType',target,methodname))
            // class 类内部的方法默认都是不可枚举的
            descriptor.enumerable = true
            // console.log(descriptor)
        }
    }
}

const get = reqProccess('get')
const post = reqProccess('post')
const del = reqProccess('del')
const put = reqProccess('put')

export {get,post,put,del}
