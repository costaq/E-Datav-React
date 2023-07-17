/*
 * @Autor: costa
 * @Date: 2023-04-18 14:56:33
 * @LastEditors: costa
 * @LastEditTime: 2023-07-17 14:57:02
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { useState } from 'react';
import { FullScreenContainer, DigitalFlop, BorderBox1, WaterLevelPond } from '../packages';

function App() {

  return (
    <div className="App">
      <FullScreenContainer>
        <div style={{ height: 200, width: 200 }}>
          <BorderBox1>
            {/* <DigitalFlop /> */}
            {/* 宽高不设置，按照父元素100%拉伸 */}
            <WaterLevelPond value={56} style={{ width: 150, height: 150 }} />
          </BorderBox1>
        </div>
      </FullScreenContainer>
    </div>
  )
}

export default App
