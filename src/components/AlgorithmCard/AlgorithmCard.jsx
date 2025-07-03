import React from "react";
import { Paper, Typography, Card } from "@mui/material";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function AlgorithmCard({ title, description, code, language = "python" }) {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 2,
        mx: 2,
        borderRadius: 3,
        textAlign: "center",
        backgroundColor: "#f5f5f5",
        height: 570,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {description}
      </Typography>

      <Card
        elevation={8}
        sx={{
          p: 2,
          borderRadius: 3,
          flexGrow: 1,
          overflowY: "auto",
          backgroundColor: "#282c34", // cor escura para combinar com syntax highlighter
          textAlign: "left",
        }}
      >
        <SyntaxHighlighter
          language={language}
          style={materialDark}
          customStyle={{ margin: 0, backgroundColor: "transparent" }}
          wrapLines
          showLineNumbers
        >
          {code}
        </SyntaxHighlighter>
      </Card>
    </Paper>
  );
}
