import React,{useEffect,useState} from "react";
import {
    Grid,
Pagination,
Container,
Fab,
Dialog,
DialogTitle,
DialogContent,
DialogActions,
TextField,
Button
} from "@mui/material"; 
import Icon from "@mui/material";
import IssueCard from "../components/IssueCard";
const initialIssues = [
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
];

export default function AddIssue() {
    const [issues, setIssues] = useState(initialIssues);
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({ title: '', description: '', image: '' });

    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setForm({ title: '', description: '', image: '' });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddIssue = () => {
        if (!form.title || !form.description) return;
        const newIssue = {
            _id: (issues.length + 1).toString(),
            title: form.title,
            description: form.description,
            image: form.image || 'https://via.placeholder.com/150',
        };
        setIssues([newIssue, ...issues]);
        handleClose();
    };

    return (
        <Container>
            <Grid container spacing={2}>
                {issues.map((issue) => (
                    <Grid item xs={12} sm={6} md={4} key={issue._id}>
                        <IssueCard issue={issue} />
                    </Grid>
                ))}
            </Grid>
            <Fab color="primary" aria-label="add" onClick={handleOpen} style={{ position: 'fixed', bottom: 32, right: 32 }}>
                +
            </Fab>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Add New Issue</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        name="title"
                        label="Title"
                        type="text"
                        fullWidth
                        value={form.title}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        margin="dense"
                        name="description"
                        label="Description"
                        type="text"
                        fullWidth
                        multiline
                        minRows={2}
                        value={form.description}
                        onChange={handleChange}
                        required
                    />
                    <TextField
                        margin="dense"
                        name="image"
                        label="Image URL (optional)"
                        type="text"
                        fullWidth
                        value={form.image}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleAddIssue} variant="contained" color="primary">Add</Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

