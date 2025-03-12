import { Card, Col, Row } from 'antd'
import React from 'react'
import { Chart1, Chart2, Chart3, Chart4 } from './LineChart/index'

export default function LineChart() {
  return (
    <div>
      <br></br>
      <Row gutter={[16,16]}>
        {/* https://g2.antv.antgroup.com/zh/examples/general/line/#line-connect-nulls */}
        <Col span={12}><Card title='基础折线图'><Chart1 /></Card></Col>
        <Col span={12}><Card title='曲线折线图'><Chart2 /></Card></Col>
        <Col span={12}><Card title='阶梯折线图'><Chart3 /></Card></Col>
        <Col span={12}><Card title='缺失折线图'><Chart4 /></Card></Col>
      </Row>
    </div>
  )
}
