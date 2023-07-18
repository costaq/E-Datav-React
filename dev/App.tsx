/*
 * @Autor: costa
 * @Date: 2023-04-18 14:56:33
 * @LastEditors: costa
 * @LastEditTime: 2023-07-18 14:20:51
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { useState } from 'react';
import { FullScreenContainer, DigitalFlop, BorderBox1, WaterLevelPond, Tab } from '../packages';
import { TabItemValue } from '../packages/components/tab';

function App() {
  const items = [
    {
      label: '测试1',
      value: '123'
    },
    {
      label: '测试2',
      value: '1234'
    },
    {
      label: '测试3',
      value: '1235'
    }
  ]

  const handleChange = (value: TabItemValue) => {
    console.log(value);
  }

  return (
    <div className="App" style={{ backgroundColor: '#000' }}>
      <FullScreenContainer>
        <div style={{ height: 200, width: 200 }}>
          <BorderBox1>
            {/* <DigitalFlop /> */}
            {/* 宽高不设置，按照父元素100%拉伸 */}
            {/* <WaterLevelPond value={56} style={{ width: 150, height: 150 }} /> */}
          </BorderBox1>
        </div>
        <div>
          <Tab style={{ width: 100, height: 500 }} items={items} onChange={handleChange} columns={1} value={'1234'}></Tab>
        </div>
      </FullScreenContainer>
    </div>
  )
}

export default App
