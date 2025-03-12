import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// 懒加载
const EchartsPage = lazy(() => import('../pages/Echarts/index'));
const ThreejsPage = lazy(() => import('../pages/ThreeJS/index'));
const AntvTable = lazy(() => import('../pages/Antv/s2/Table'));
const AntvLineChart = lazy(() => import('../pages/Antv/g2/LineChart'));
const AntvBarChart = lazy(() => import('../pages/Antv/g2/BarChart'));
const AntvPieChart = lazy(() => import('../pages/Antv/g2/PieChart'));
const AntvWordCloud = lazy(() => import('../pages/Antv/g2/WordCloud'));
const AntvBasicGraph = lazy(() => import('../pages/Antv/g6/BasicGraph'));
const AntvTreeGraph = lazy(() => import('../pages/Antv/g6/TreeGraph'));

const  RouterConfig = () => {
    return (
        <Suspense fallback={<Spin></Spin>}>
            <Routes>
                <Route path="/" element={<EchartsPage />}></Route>
                <Route path="/echarts" element={<EchartsPage />}></Route>
                <Route path="/setting:1" element={<AntvTable />}></Route>
                <Route path="/setting:2" element={<AntvBarChart />}></Route>
                <Route path="/setting:3" element={<AntvLineChart />}></Route>
                <Route path="/setting:4" element={<AntvPieChart />}></Route>
                <Route path="/setting:5" element={<AntvWordCloud />}></Route>
                <Route path="/setting:6" element={<AntvBasicGraph />}></Route>
                <Route path="/setting:7" element={<AntvTreeGraph />}></Route>
                <Route path="/threejs" element={<ThreejsPage />}></Route>
            </Routes>
        </Suspense>
    )
};

export default RouterConfig;