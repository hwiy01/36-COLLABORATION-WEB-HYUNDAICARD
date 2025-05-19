import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import GlobalLayout from "./global-layout";
import { HomePage } from "./lazy";
import { routePath } from "./path";
import My from "@/pages/my/my";

export default function Router() {
  return (
    <Suspense>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path={routePath.HOME} element={<HomePage />} />
          <Route path={routePath.MY} element={<My />} />
        </Route>
      </Routes>
    </Suspense>
  );
}
