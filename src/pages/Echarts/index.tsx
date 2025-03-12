import Chart1 from './Chart1'
import { Card, Col, Row } from 'antd'
import Chart2 from './Chart2'
import Chart3 from './Chart3'
import Chart4 from './Chart4'

export default function index() {
  return (
    <div>
      <br></br>
      <Row gutter={[16, 16]}>
        <Col span={12}><Card title='line'><Chart1></Chart1></Card></Col>
        <Col span={12}><Card title='bar'><Chart2></Chart2></Card></Col>
        <Col span={12}><Card title='map'><Chart3></Chart3></Card></Col>
        <Col span={12}><Card title='scatter'><Chart4></Chart4></Card></Col>
      </Row>
    </div>
  )
}
