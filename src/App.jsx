/*
 * @Descripttion: 
 * @version: 
 * @Author: zengdeping
 * @Date: 2022-05-26 15:37:07
 * @LastEditors: zengdeping
 * @LastEditTime: 2022-05-26 21:55:51
 */
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import helper from './utils'


function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Helper.js</h1>
      <div>判断长度不少于n位，需包含大小写字母、数字或特殊字符::12345Aa23=>{helper.passWord('12345Aa23') + ''}</div>
      <div>自动补全::1 => {helper.PrefixInteger(1)}</div>
      <div>get传参 将object转为字符串::{'{a:1,b:2,c:3,D:4}'}=>{helper.queryToString({ a: 1, b: 2, c: 3, D: 4 })}</div>
      <div>get传参后 将字符串转为object::{'a=1&b=2&c=3&D=4'}=>{JSON.stringify(helper.stringToQuery('a=1&b=2&c=3&D=4'))}</div>
      <div>判断任意字段是否为不空::'[]'=>{helper.notEmptyAll([]) + ''}::''=>{helper.notEmptyAll('') + ''}::{'{}'}=>{helper.notEmptyAll({}) + ''}</div>
      <div>保留两位数并且四舍五入::3.1449926=>{helper.keepTwoDecimalFull(3.1449926, 2)}::3.1459926=>{helper.keepTwoDecimalFull(3.1459926, 2)}</div>
      <div>保留两位数不四舍五入::3.1449926=>{helper.keepTwoDecimal(3.1449926, 2)}::3.1459926=>{helper.keepTwoDecimal(3.1459926, 2)}</div>
      <div>数字格式化::1323123412.231=>{helper.toThousands(1323123412.231)}</div>
      <div>加减乘除运算::0.2+0.1=>{helper.accAdd(0.2, 0.1)}::0.2/0.1=>{helper.accDiv(0.2, 0.1)}::0.2*0.1=>{helper.accMul(0.2, 0.1)}::0.2-0.1=>{helper.accSubtr(0.2, 0.1)}</div>
    </div>
  )
}

export default App
