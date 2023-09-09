import { Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./Layout/Layout";
import { Suspense, lazy, useEffect } from "react";
import PrivateRoute from "../Routes/PrivatRoute/PrivateRoute";
import { useDispatch, useSelector } from "react-redux";
import authSelectors from "../redux/auth/auth-selectors";
import { Toaster } from "react-hot-toast";
import PublicRoute from "../Routes/PublicRoute/PublicRoute";
import authOperations from "../redux/auth/auth-operations";

const Home = lazy(() => import("../pages/Home/Home"));
const PageContacts = lazy(() => import("../pages/PageContacts/PageContacts"));
const LogIn = lazy(() => import("../pages/LogIn/LogIn"));
const SingUp = lazy(() => import("../pages/SingUp/SingUp"));

export function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  // useEffect(() => {
  //   dispatch(authOperations.fetchCurrentUser());
  // }, [dispatch]);

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
                  <PublicRoute restricted>
                    <SingUp />
                  </PublicRoute>
                }
              />
              <Route
                path="login"
                restricted
                element={
                  <PublicRoute restricted>
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
