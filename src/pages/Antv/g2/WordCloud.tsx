import { Col, Row } from 'antd'
import InputCom from './WordCloud/InputCom'


export default function WordCloud() {
  return (
    <div>
      <br></br>
      <Row gutter={[16,16]}>
        <Col span={1}></Col>
        <Col span={22}><InputCom /></Col>
        <Col span={1}></Col>
      </Row>
    </div>
  )
}

