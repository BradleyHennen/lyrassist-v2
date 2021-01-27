import {
    useLocation
} from "react-router-dom";

function useQueryCheck() {
    return new URLSearchParams(useLocation().search);
}

export default useQueryCheck;