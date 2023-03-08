import { useNavigate } from "react-router-dom";

export const useRouterNavigation = () => {
    const navigate = useNavigate();

    const gotoExplore = () => {
        navigate('/explore');
    }

    const gotoCreate = () => {
        navigate('/create');
    }

    return {gotoExplore, gotoCreate}
}
