import { Card, Col, Row } from 'antd'
import { Chart1, Chart2, Chart3 } from './PieChart/index'

export default function PieChart() {
  return (
    <div>
      <br></br>
      <Row gutter={[16,16]}>
        <Col span={7}><Card title='饼图'><Chart1 /></Card></Col>
        <Col span={1}></Col>
        <Col span={8}><Card title='环图'><Chart2 /></Card></Col>
        <Col span={1}></Col>
        <Col span={7}><Card title='甜甜圈图'><Chart3 /></Card></Col>
      </Row>
    </div>
  )
}
