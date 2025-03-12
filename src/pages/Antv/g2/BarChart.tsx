import React from 'react'
import { Card, Row, Col } from 'antd'
import Chart1 from './BarChart/Chart1'
import Chart2 from './BarChart/Chart2'

export default function BarChart() {
  return (
    <div>
        <br></br>
        <Row gutter={[16, 16]}>
          <Col span={24}><Card style={{height: '200px', marginBottom: '50px'}}>介绍一下。。</Card></Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col span={12}><Card title='分组柱形图'><Chart1></Chart1></Card></Col>
            <Col span={12}><Card title='堆叠柱形图'><Chart2></Chart2></Card></Col>
        </Row>
    </div>
  )
}