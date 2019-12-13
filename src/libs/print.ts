/**
 * @description: 打印指定区域
 * @param { elem } dom id
 * @return: 
 */
export const printElem = (elem: string) => {
  var newWindow = window.open('打印窗口', '_blank', 'height=662, width=1002')
  var docStr = document.getElementById(elem).innerHTML
  newWindow.document.write(docStr)
  newWindow.document.close()
  newWindow.print()
  newWindow.close()
}