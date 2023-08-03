/*
 * @Autor: costa
 * @Date: 2023-04-18 14:56:33
 * @LastEditors: costa
 * @LastEditTime: 2023-08-03 11:34:25
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { useState } from 'react';
import { FullScreenContainer, DigitalFlop, BorderBox1, WaterLevelPond, Tab, BorderBox2 } from '../packages';
import { TabItemValue } from '../packages/components/tab';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';

function App() {
  const items = [
    {
      label: '测试1',
      value: '123',
      // icon: <AppstoreOutlined />
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
    <div className="App">
      <FullScreenContainer>
        {/* <div style={{ height: 200, width: 200 }}>
          <BorderBox1>
            <DigitalFlop color="#fff" />
            <WaterLevelPond value={56} style={{ width: 100, height: 100 }} />
          </BorderBox1>
        </div> */}
        <div>
          <Tab style={{ width: 700, height: 100 }} items={items} onTabChange={handleChange} columns={3} value={'1234'}></Tab>
        </div>
        {/* <div>
          <Tab style={{ width: 700, height: 500 }} items={items} onTabChange={handleChange} columns={3} value={'1234'}></Tab>
        </div> */}
        <div style={{ height: 200, width: 400 }}>
        {/* 若不通过样式设置宽高，则根据父元素100%拉伸 */}
          {/* <BorderBox2 borderColor="#e2777a" lineWidth={30} backgroundColor="#e2777a26">

          </BorderBox2> */}
        </div>

      </FullScreenContainer>
    </div>
  )
}

export default App
