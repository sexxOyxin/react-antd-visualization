import { Spin } from "antd";
import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// 懒加载
const EchartsPage = lazy(() => import('../pages/Echarts/index'));
const AntvPage = lazy(() => import('../pages/Antv/index'));
const ThreejsPage = lazy(() => import('../pages/ThreeJS/index'));

const  RouterConfig = () => {
    return (
        <Suspense fallback={<Spin></Spin>}>
            <Routes>
                <Route path="/" element={<EchartsPage />}></Route>
                <Route path="/echarts" element={<EchartsPage />}></Route>
                <Route path="/antv" element={<AntvPage />}></Route>
                <Route path="/threejs" element={<ThreejsPage />}></Route>
            </Routes>
        </Suspense>
    )
};

export default RouterConfig;