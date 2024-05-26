import { Route, Routes } from "react-router-dom";
import { Profile } from "./pages/Profile";
import { DefaultLayout } from "./layouts/DefaultLayouts";
import { IssueDetail } from "./pages/Profile/components/IssueDetail";


export function Router() {
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout />}>
                <Route path="/" element={<Profile />} />
                <Route path="/issue-detail/:number" element={<IssueDetail />} />
            </Route>
        </Routes>
    )
}