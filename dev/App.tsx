/*
 * @Autor: costa
 * @Date: 2023-04-18 14:56:33
 * @LastEditors: costa
 * @LastEditTime: 2023-09-28 15:04:14
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { useEffect, useState } from 'react';
import { FullScreenContainer, DigitalFlop, BorderBox1, WaterLevelPond, Tab, BorderBox2, BorderBox3, ScrollRankingBoard, DynamicText } from '../packages';
import { TabItemValue } from '../packages/components/tab';
// import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';



function App() {
  const [rankingItems, setRankingItems] = useState<any>([]);
  const [text, setText] = useState<string>('E-DataV数据大屏');

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

  useEffect(() => {
    setRankingItems(Array(6).fill(0).map((item, index) => {
      return {
        label: `测试${index}`,
        value: index * 100
      }
    }));
  }, [])

  const handleChange = (value: TabItemValue) => {
    console.log(value);
  }

  const handleChangeItems = () => {
    setRankingItems(Array(10).fill(0).map((item, index) => {
      return {
        label: `测试${index}`,
        value: index * 100
      }
    }));
  }

  const handleChangeText = () => {
    setText('E-DataV数据大屏驾驶舱');
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
        <div style={{ width: 500, height: 200 }} >
          <BorderBox3 text={text} borderColor="#1e80ff" backgroundColor="transparent" textPosition="right" fontColor="#fff" />
        </div>
        <div style={{ height: 200, width: 500 }}>
          <DynamicText text={text} colors={['#f53f3f', '#1e80ff']} style={{ fontSize: 36, fontWeight: 'bold' }} /><button onClick={handleChangeText}>更换文字</button>
        </div>
        <div>
          <Tab style={{ width: 700, height: 100 }} items={items} onTabChange={handleChange} columns={3} value={'1234'}></Tab>
        </div>
        {/* <div>
          <Tab style={{ width: 700, height: 500 }} items={items} onTabChange={handleChange} columns={3} value={'1234'}></Tab>
        </div> */}
        <div style={{ height: 200, width: 400 }}>
          {/* 若不通过样式设置宽高，则根据父元素100%拉伸 */}
          <BorderBox2 borderColor="#e2777a" lineWidth={30} backgroundColor="#e2777a26">
            {/* <Tab items={items} onTabChange={handleChange} columns={3} value={'1234'}></Tab> */}
            <ScrollRankingBoard items={rankingItems} type="page" />
          </BorderBox2>
        </div>
        <ScrollRankingBoard items={rankingItems} style={{ height: 200, width: 400 }} />
        <a style={{ color: '#fff' }} onClick={handleChangeItems} >测试</a>
      </FullScreenContainer>
    </div>
  )
}

export default App
