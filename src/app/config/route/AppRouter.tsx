// react
import { Route, Routes } from "react-router-dom";
// layouts
import { HeaderLayout } from "../../layout/HeaderLayout";
// pages
import { Home } from "@/pages/home";
// constants
import { getHomeRoute } from "@/shared/libs/constants/routes";

export const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route element={<HeaderLayout />}>
          <Route path={getHomeRoute()} element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};
