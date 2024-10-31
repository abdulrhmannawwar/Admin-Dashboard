import React from "react";
import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    margin: 20px auto;
    font-family: Arial, sans-serif;
    background-color: white;
    padding: 10px;
`;

const Title = styled.h3`
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
`;

const TableHeader = styled.th`
    padding: 8px;
    text-align: left;
    border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
    padding: 16px;
    text-align: left;
    border-bottom: 1px solid #ddd;
`;

const ProgressBarContainer = styled.div`
    background-color: #f3f3f3;
    height: 15px;
    overflow: hidden;
`;

const Progress = styled.div<{ width: number }>`
    background-color: #4582dc;
    height: 100%;
    width: ${(props) => props.width}%;
`;

type LanguageData = {
    language: string;
    users: number;
};

const LanguageStats: React.FC = () => {
    const data: LanguageData[] = [
        { language: "en-us", users: 865 },
        { language: "en-gb", users: 240 },
        { language: "fr-fr", users: 220 },
        { language: "es-es", users: 162 },
        { language: "de-de", users: 86 },
        { language: "ru-ru", users: 32 },
    ];

    const totalUsers = data.reduce((sum, item) => sum + item.users, 0);

    return (
        <Container>
            <Title>Languages</Title>
            <Table>
                <thead>
                    <tr>
                        <TableHeader>Language</TableHeader>
                        <TableHeader>Users</TableHeader>
                        <TableHeader>% Users</TableHeader>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item) => (
                        <tr key={item.language}>
                            <TableCell>{item.language}</TableCell>
                            <TableCell>{item.users}</TableCell>
                            <TableCell>
                                <ProgressBarContainer>
                                    <Progress
                                        width={(item.users / totalUsers) * 100}
                                    />
                                </ProgressBarContainer>
                            </TableCell>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default LanguageStats;
