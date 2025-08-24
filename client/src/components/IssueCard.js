import React from "react"
import {Card, CardContent, Typography, CardMedia} from "@mui/material";

export default function IssueCard({ issue }) {
  return (
    <Card>
      <CardMedia
        component="img"
        alt={issue.title}
        height="140"
        image={issue.image}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {issue.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {issue.description}
        </Typography>
      </CardContent>
    </Card>
  );
}
