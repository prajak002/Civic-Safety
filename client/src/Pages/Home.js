import React, { useEffect, useState } from "react";
import { Grid, Pagination, Typography, Box, Container } from "@mui/material";
import IssueCard from "../components/IssueCard";
const allIssues = [
    { _id: "1", title: "potholes", description: "Description for issue 1", image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" },
    { _id: "2", title: "murders", description: "Description for issue 2", image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=400&q=80" },
    { _id: "3", title: "water-leakage", description: "Description for issue 3", image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80" },
    { _id: "4", title: "traffic-jam", description: "Description for issue 4", image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=400&q=80" },
    { _id: "5", title: "dustbin", description: "Description for issue 5", image: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=400&q=80" },
    { _id: "6", title: "street-light", description: "Description for issue 6", image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" },
    { _id: "7", title: "road-accident", description: "Description for issue 7", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" },
    { _id: "8", title: "flooding", description: "Description for issue 8", image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=400&q=80" },
    { _id: "9", title: "illegal-parking", description: "Description for issue 9", image: "https://images.unsplash.com/photo-1462392246754-28dfa2df8e6b?auto=format&fit=crop&w=400&q=80" },
    { _id: "10", title: "littering", description: "Description for issue 10", image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3b99?auto=format&fit=crop&w=400&q=80" }
];
export default function Home() {
    const [issues, setIssues] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        // Simulate fetching data
        setIssues(allIssues);
    }, []);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Container maxWidth="lg" sx={{ py: 5 }}>
            <Box textAlign="center" mb={4}>
                <Typography variant="h3" fontWeight={700} color="primary.main" gutterBottom>
                    Civic Safety Issues
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Browse and stay updated with the latest reported issues in your city
                </Typography>
            </Box>
            <Grid container spacing={4} justifyContent="center">
                {issues.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((issue) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={issue._id}>
                        <IssueCard issue={issue} />
                    </Grid>
                ))}
            </Grid>
            <Box display="flex" justifyContent="center" mt={5}>
                <Pagination
                    count={Math.ceil(issues.length / itemsPerPage)}
                    page={page}
                    onChange={handleChange}
                    color="primary"
                    size="large"
                    shape="rounded"
                />
            </Box>
        </Container>
    );
}
