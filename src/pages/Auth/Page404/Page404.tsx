import { Button } from "@mui/material";
import { useEffect } from "react";
export default function Page404() {
  useEffect(() => {
    document.title = "404 Error | Mira";
  })
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100dvh",
                backgroundColor: "#f8f9fd",
            }}
        >
            <div style={{ textAlign: "center" }}>
                <h1 style={{ margin: "5px" }}>404</h1>
                <h2 style={{ margin: "5px" }}>Page not found.</h2>
                <p style={{ margin: "5px 0 15px" }}>
                    The page you are looking for might have been removed.
                </p>
                <a href="https://mira.bootlab.io/">
                <Button variant="contained">Return to website</Button>
                </a>
            </div>
        </div>
    );
}
