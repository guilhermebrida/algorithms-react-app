import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import "./CodeCard.css";

const CodeCard = ({ title, description, code, language = "javascript" }) => {
  return (
    <div className="doc-card">
      <h2 className="doc-title">{title}</h2>
      <p className="doc-description">{description}</p>
      <div className="doc-code">
        <SyntaxHighlighter language={language} style={materialDark}>
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeCard;
