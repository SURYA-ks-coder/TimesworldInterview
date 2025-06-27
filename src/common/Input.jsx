import React from "react";
import { Form } from "react-bootstrap";

export default function Input({
  title,
  value,
  change = () => {},
  error,
  placeholder,
  type="text"
}) {
  return (
    
    <Form.Group className="mb-3" autoComplete="off">
      {title && <Form.Label>{title}</Form.Label>}
      <Form.Control
        autoComplete="off"
        type={type}
        placeholder={placeholder ? placeholder : "Enter" + title}
        value={value}
        onChange={(e) => {
          change(e.target.value);
        }}
         isInvalid={!!error}
      />
      {error && <Form.Control.Feedback  type="invalid" className="d-block">{error}</Form.Control.Feedback>}
    </Form.Group>
  );
}
