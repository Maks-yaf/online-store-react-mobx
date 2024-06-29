import React, {useContext} from 'react';
import {Routes, Route} from 'react-router-dom';
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../pages/Shop";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)

    console.log(user)
    console.log("123wesdasjrhjiwqebgfrhgjvsa lkf gqowug")
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
            // <Route key={path} path={path} component={Component} />}
            <Route key={path} path={path} element={<Component />} exact/> )}

            {publicRoutes.map(({path, Component}) =>
                // <Route key={path} path={path} component={Component} />}
                <Route key={path} path={path} element={<Component />} exact/> )}
            <Route path="*" element={<Shop />}/>
        </Routes>
    );
};

export default AppRouter;