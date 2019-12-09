/**
 * @description: 判断是否是为数组
 * @param { any } arr
 * @return: Boolean
 */
export const isArray = (arr: any) => {
  return Object.prototype.toString.call(arr) === '[object Array]'
}

interface Map {
  id: string,
  pid: string,
  children: string
}

/**
 * @description: 平行结构转树结构
 * @param { arr } 原数组
 * @param { parent } 根节点pid的值 默认值-1 非必传
 * @param { map } 映射的对象键名 默认id, pid, chilren 非必传
 * @return: 
 */
export const arrayConvertTree = (arr: any, parent: number = -1, map: Map = {
  id: 'id',
  pid: 'pid',
  children: 'children'
}) => {
  const maps = map
  const out = []
  if (!Array.isArray(arr) && !arr.length) {
    return []
  }
  for (const i in arr) {
    if (arr[i][maps.pid] === parent) {
      const children = arrayConvertTree(arr, arr[i][maps.id], maps)
      if (children.length) {
        arr[i][maps.children] = children
      }
      out.push(arr[i])
    }
  }
  return out
}
/**
 * @description: 删除一个元素
 * @param { arr } 原数组
 * @param { ele } 要删除的值
 * @return: 删除后的数组
 */
export const remove = (arr: any, ele: any) => {
  var index = arr.indexOf(ele);
  if (index > -1) {
    arr.splice(index, 1);
  }
  return arr;
}

/**
 * @description: 合并数组对象中的相同的值，把相同值当作key
 * @param { arr } 原数组
 * @param { property } 要合并的key
 * @return: {}
 */
export const mergeSameGroup = (arr: any, property: string) => {
  return arr.reduce((memo: any, x: any) => {
    if (!memo[x[property]]) {
      memo[x[property]] = []
    }
    memo[x[property]].push(x)
    return memo
  }, {})
}
