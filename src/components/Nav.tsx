import { BarChartOutlined, HeartOutlined, LineChartOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();

  const [current, setCurrent] = useState('/echarts');

  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
    setCurrent(e.key);
  };

  const items = [
    { label: "ECharts", key: "/echarts", icon: <BarChartOutlined /> },
    {
      label: "AntV",
      key: "/antv",
      icon: <LineChartOutlined />,
      children: [
        {
          type: 'group',
          label: 'Item 1',
          children: [
            { label: 'Option 1', key: 'setting:1' },
            { label: 'Option 2', key: 'setting:2' },
          ],
        },
        {
          type: 'group',
          label: 'Item 2',
          children: [
            { label: 'Option 3', key: 'setting:3' },
            { label: 'Option 4', key: 'setting:4' },
          ],
        },
      ],
    },
    { label: "Threejs", key: "/threejs", icon: <HeartOutlined /> },
  ];

  return (
    <Menu
      mode='horizontal'
      selectedKeys={[current]}
      onClick={onClick}
      items={items}
    >
    </Menu>
  )
}

export default Nav;