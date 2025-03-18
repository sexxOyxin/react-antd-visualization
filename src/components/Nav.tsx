import { BarChartOutlined, HeartOutlined, LineChartOutlined } from '@ant-design/icons';
import { Menu, MenuProps } from 'antd';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [current, setCurrent] = useState(location.pathname);
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
          label: 'S2',
          children: [
            { label: 'Table', key: '/setting:1' },
          ],
        },
        {
          type: 'group',
          label: 'G2',
          children: [
            { label: 'BarChart', key: '/setting:2' },
            { label: 'LineChart', key: '/setting:3' },
            { label: 'PieChart', key: '/setting:4' },
            { label: 'WordCloud', key: '/setting:5' },
          ],
        },
        {
          type: 'group',
          label: 'G6',
          children: [
            { label: 'FlowGraph', key: '/setting:6' },
            { label: 'TreeGraph', key: '/setting:7' },
            { label: 'RelationGraph', key: '/setting:8' },
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