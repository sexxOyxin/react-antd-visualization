import { Card, Col, Row } from 'antd'
import Table1 from './Table1'
import Table2 from './Table2'
import Table3 from './Table3'

export default function Table() {
  return (
    <div>
      <br></br>
      <Row gutter={[16,16]}>
      <Col span={12}>
        <Row>
          <Col span={24}>
           <Card title='基础透视表 - 平铺'><Table1 /></Card>
          </Col>
        </Row>
        <Row>
          <Col span={24} style={{ marginTop: '10px' }}>
          <Card title='基础透视表 - 树状'><Table2 /></Card>
          </Col>
        </Row>
      </Col>

      <Col span={12}>
      <Card title='基础明细表'><Table3 /></Card>
      </Col>
    </Row>
    </div>
  )
}
