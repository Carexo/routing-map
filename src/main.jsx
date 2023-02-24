import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
const RouteMap = lazy(() => import("./pages/RouteMap"));
import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import TripsProvider from "./utils/store/TripsContext";
import Layout from "./components/template/Layout";
import Spinner from "./components/molecules/spinner";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <TripsProvider>
        <Layout>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/map/:id" element={<RouteMap />} />
            </Routes>
          </Suspense>
        </Layout>
      </TripsProvider>
    </QueryClientProvider>
  </BrowserRouter>
);
