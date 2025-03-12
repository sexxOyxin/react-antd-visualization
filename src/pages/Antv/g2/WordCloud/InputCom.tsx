import { useState } from 'react';
import { Row, Col, Card, Tag, Input } from 'antd';
import Word from './Word';

const tags = ['React', 'Vite', 'Ant Design', 'ECharts', 'TypeScript', 'Axios'];

const InputCom = () => {
  const [words, setWords] = useState(tags.map((tag) => ({ word: tag, count: 5 })));

  // 处理标签点击事件
  const handleTagClick = (tag: string) => {
    setWords((prev) =>
      prev.map((w) =>
        w.word === tag ? { ...w, count: w.count + 1 } : w
      )
    );
  };

  return (
    <Row gutter={16}>
      <Col span={16}>
        <Card title="关键词云图">
          <Word></Word>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="热门关键词">
          {tags.map((tag) => (
            <Tag key={tag} color="blue" onClick={() => handleTagClick(tag)} style={{ cursor: 'pointer', marginBottom: 8 }}>
              {tag}
            </Tag>
          ))}
          <hr></hr>
          <Input
          placeholder='输入关键词...'
          ></Input>
        </Card>
      </Col>
    </Row>
  );
};

export default InputCom;
