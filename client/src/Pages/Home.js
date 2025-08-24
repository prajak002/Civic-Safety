import React, {useEffect,useState} from "react";
import {Grid,Pagination} from "@mui/material";
import IssueCard from "../components/IssueCard";
const allIssues =[
    {_id:"1", title: "potholes", description: "Description for issue 1", image: "https://via.placeholder.com/150"},
    {_id:"2", title: "murders", description: "Description for issue 2", image: "https://via.placeholder.com/150"},
    {_id:"3", title: "water-leakage", description: "Description for issue 3", image: "https://via.placeholder.com/150"},
    {_id:"4", title: "traffic-jam", description: "Description for issue 4", image: "https://via.placeholder.com/150"},
    {_id:"5", title: "dustbin", description: "Description for issue 5", image: "https://via.placeholder.com/150"},
    {_id:"6", title: "street-light", description: "Description for issue 6", image: "https://via.placeholder.com/150"},
    {_id:"7", title: "road-accident", description: "Description for issue 7", image: "https://via.placeholder.com/150"},
    {_id:"8", title: "flooding", description: "Description for issue 8", image: "https://via.placeholder.com/150"},
    {_id:"9", title: "illegal-parking", description: "Description for issue 9", image: "https://via.placeholder.com/150"},
    {_id:"10", title: "littering", description: "Description for issue 10", image: "https://via.placeholder.com/150"}
]
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
        <div>
            <Grid container spacing={2}>
                {issues.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(issue => (
                    <Grid item xs={12} sm={6} md={4} key={issue._id}>
                        <IssueCard issue={issue} />
                    </Grid>
                ))}
            </Grid>
            <Pagination
                count={Math.ceil(issues.length / itemsPerPage)}
                page={page}
                onChange={handleChange}
            />
        </div>
    );
}
