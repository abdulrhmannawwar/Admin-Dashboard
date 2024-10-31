import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import person from "../assets/person1.jpg";

const User: React.FC = () => {
    return (
        <Stack
            direction="row"
            spacing={2}
            sx={{
                backgroundColor: "#1e2a38",
                marginTop: "20px",
                padding: "10px",
            }}
        >
            <Avatar
                alt="Abdo Nawwar"
                src={person}
                sx={{ width: 56, height: 56 }}
            />
            <div>
                <p style={{ margin: "2px", color: "white" }}>John Doe</p>
                <p style={{ margin: "2px", color: "white" }}>UX Designer</p>
            </div>
        </Stack>
    );
};
export default User;
