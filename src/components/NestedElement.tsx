import React, { useState } from "react";
import { Collapse } from "@mui/material";
import styled from "styled-components";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Link } from "react-router-dom";

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

const StyledList = styled.div`
    margin: 5px 0 10px 0;
    font-size: 18px;
    padding: 5px;
    transition: 0.3s;
    &:hover {
        background-color: #1e2531;
    }
`;

interface Props {
    children: React.ReactNode;
    list: string[];
    icon: React.ReactNode;
}
function NestedElement({ children, list, icon }: Props) {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
        <>
            <StyledDiv onClick={handleToggle}>
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

                {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </StyledDiv>
            <Collapse in={open}>
                {list.map((item, index) => (
                    <Link
                        key={index}
                        to={`/${children}/${item}`}
                        style={{ textDecoration: "none", color: "white" }}
                    >
                        <StyledList>
                            <span style={{ marginLeft: "42px" }}>{item}</span>
                        </StyledList>
                    </Link>
                ))}
            </Collapse>
        </>
    );
}

export default NestedElement;
