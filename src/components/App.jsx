import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Route/Layout/Layout";
import { Suspense, lazy, useEffect } from "react";
import PrivateRoute from "./Route/PrivatRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "./redux/auth/auth-selectors";
import { Toaster } from "react-hot-toast";
import PublicRoute from "./Route/PublicRoute/PublicRoute";
import authOperations from "./redux/auth/auth-operations";

const Home = lazy(() => import("../components/Route/Home/Home"));
const PageContacts = lazy(() => import("./Route/PageContacts/PageContacts"));
const LogIn = lazy(() => import("../components/Route/LogIn/LogIn"));
const SingUp = lazy(() => import("../components/Route/SingUp/SingUp"));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <div>
      {isFetchingCurrentUser ? (
        <h1>...Loading</h1>
      ) : (
        <Suspense fallback={<p>Загружаем...</p>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route
                index
                exact
                element={
                  <PublicRoute>
                    <Home />
                  </PublicRoute>
                }
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <PageContacts />
                  </PrivateRoute>
                }
              />

              <Route
                path="register"
                element={
                  <PublicRoute>
                    <SingUp />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                element={
                  <PublicRoute>
                    <LogIn />
                  </PublicRoute>
                }
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      )}
      <Toaster />
    </div>
  );
}
