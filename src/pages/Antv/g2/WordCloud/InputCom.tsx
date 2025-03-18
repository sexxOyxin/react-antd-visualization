import { useState } from 'react';
import { Row, Col, Card, Tag, Input } from 'antd';
import Word from './Word';

const tagss = [
  'React',
  'Vite',
  'Ant Design',
  'ECharts',
  'TypeScript',
  'Axios',
  'Badge',
  'CommonEvent',
  'ExtensionCategory',
  'Graph',
  'GraphEvent',
  'iconfont',
  'Label',
  'Rect',
  'register',
  'treeToGraphData',
  'padding',
  'const',
  'fit',
  'export',
  'reduce',
  'container',
  'autofit',
  'paddingTop',
  'wordCloud',
  'spiral',
  'fontSize',
  'encode',
  'render',
  'colorText',
  'eslint',
  'react-dom',
  'less',
  'lodash',
  'version',
  'build',
  'react-router'
];

const InputCom = () => {
  const [words, setWords] = useState(tagss.map((tag) => ({ text: tag, value: 5 })));

  // 处理标签点击事件
  const handleTagClick = (tag: string) => {
    setWords((prev) =>
      prev.map((w) =>
        w.text === tag ? { ...w, value: w.value + 1 } : w
      )
    );
  };

  // 处理输入后enter事件
  const onPressEnter = (e: { target: any; }) => {
    const { target } = e;
    const curValue = target.value;
    if (words.find((w) => w.text === curValue)) {
      setWords((prev) =>
        prev.map((w) =>
          w.text === curValue ? { ...w, value: w.value + 1 } : w
        )
      );
    } else {
      setWords((prev) => [...prev, { text: curValue, value: 1 }]);
    }
    target.value = '';
  };

  return (
    <Row gutter={16}>
      <Col span={16}>
        <Card title="关键词云图">
          <Word props={words}></Word>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="热门关键词">
          {words.map((tag) => (
            <Tag key={tag.text} color="blue" onClick={() => handleTagClick(tag.text)} style={{ cursor: 'pointer', marginBottom: 8 }}>
              {tag.text} {tag.value}
            </Tag>
          ))}
          <hr></hr>
          <Input
            placeholder='输入关键词后回车...'
            onPressEnter={onPressEnter}
          ></Input>
        </Card>
      </Col>
    </Row>
  );
};

export default InputCom;
