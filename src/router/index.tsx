import routes from "./config";
import { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";
import { Styles } from "../styles/styles";

const Header = lazy(() => import('../../../../tqhf-next/src/components/Header'));
const Footer = lazy(() => import('../../../../tqhf-next/src/components/Footer'));

const Router = () => {
  return (
    <Suspense fallback={null}>
      <Styles />
      <Header />
      <Switch>
        {routes.map((routeItem) => {
          return (
            <Route
              key={routeItem.component}
              path={routeItem.path}
              exact={routeItem.exact}
              component={lazy(() => import(`../pages/${routeItem.component}`))}
            />
          );
        })}
      </Switch>
      <Footer />
    </Suspense>
  );
};

export default Router;
