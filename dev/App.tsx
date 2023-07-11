/*
 * @Autor: costa
 * @Date: 2023-04-18 14:56:33
 * @LastEditors: costa
 * @LastEditTime: 2023-05-09 17:52:36
 * @Description: 
 * @Copyright: © 2023 by costa. All rights reserved.
 */
import { useState } from 'react';
import { FullScreenContainer, DigitalFlop, BorderBox1 } from '../packages';

function App() {

  return (
    <div className="App">
      <FullScreenContainer>
        <div style={{ height: 200, width: 200 }}>
          <BorderBox1>
            <DigitalFlop />
          </BorderBox1>
        </div>
      </FullScreenContainer>
    </div>
  )
}

export default App
