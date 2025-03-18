import React from 'react'
import { Card, Row, Col } from 'antd'
import Chart1 from './BarChart/Chart1'
import Chart2 from './BarChart/Chart2'

export default function BarChart() {
  return (
    <div>
        <br></br>
        <Row gutter={[16, 16]}>
          <Col span={24}><Card style={{height: '150px', marginBottom: '50px'}}>分组柱状图 - 适用直接对比两个城市之间的降水量<br/>数据相差较大时，避免遮挡<br/><br/>堆叠柱状图 - 适用于关注整体趋势，观察总降水量的变化<br/>数据相差不大时，适合展示整体趋势
            </Card></Col>
        </Row>
        <Row gutter={[16, 16]}>
            <Col span={12}><Card title='分组柱形图'><Chart1></Chart1></Card></Col>
            <Col span={12}><Card title='堆叠柱形图'><Chart2></Chart2></Card></Col>
        </Row>
    </div>
  )
}