import React, { LazyExoticComponent } from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { selectToken } from "../../store/auth/auth.selectors";
import { ROUTES } from "../../routes/routes";

interface IPrivateRouteProps {
  component: LazyExoticComponent<any> | Function;
  path?: string | string[];
  exact?: boolean;
}

function PrivateRoute({
  component: WrappedComponent,
  ...rest
}: IPrivateRouteProps) {
  const token: string = useSelector(selectToken);
  if (!token) return <Redirect to={ROUTES.LOGIN} />;
  return (
    <Route
      {...rest}
      render={(componentProps: any) => <WrappedComponent {...componentProps} />}
    />
  );
}

export default PrivateRoute;
