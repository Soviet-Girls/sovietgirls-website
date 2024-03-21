import { FC } from "react";
import { useRouteError } from "react-router-dom";

const Error: FC = () => {
    const error = useRouteError();

    return (
        <div className="page error">
            <p>{JSON.stringify(error) || "unexpected error"}</p>
        </div>
    )
};

export default Error;