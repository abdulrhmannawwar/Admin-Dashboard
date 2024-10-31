import { Link } from "react-router-dom";
import styled from "styled-components";

interface SingleElementProps {
    children: React.ReactNode;
    icon: React.ReactNode;
    path: string;
    number: string;
}

const StyledDiv = styled.div`
    cursor: pointer;
    padding: 10px;
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    transition: 0.3s;
    &:hover {
        background-color: #1e2531;
    }
`;

const SingleElement: React.FC<SingleElementProps> = ({
    children,
    icon,
    path,
    number,
}) => {
    return (
        <div style={{ cursor: "pointer" }}>
            <Link
                to={path}
                style={{ textDecoration: "none", color: "inherit" }}
            >
                <StyledDiv>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            marginLeft: "25px",
                        }}
                    >
                        {icon}
                        <span style={{ color: "white", marginLeft: "10px" }}>
                            {children}
                        </span>
                    </div>
                    {number.length > 0 && (
                        <div
                            style={{
                                borderRadius: "5px",
                                color: "white",
                                backgroundColor: "blue",
                                padding: "0 5px",
                            }}
                        >
                            {number}
                        </div>
                    )}
                </StyledDiv>
            </Link>
        </div>
    );
};

export default SingleElement;
