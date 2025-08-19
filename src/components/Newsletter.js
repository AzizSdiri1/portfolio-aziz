import { useState, useRef, useEffect } from "react";
import { Col, Row, Form, Button, Alert, Card, Spinner, Badge } from "react-bootstrap";
import { SendFill, Robot, Person } from "react-bootstrap-icons";
import "./Chatbot.css";

export const Chatbot = () => {
  const [message, setMessage] = useState("");
  const [history, setHistory] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const trimmedMessage = message.trim();
    if (!trimmedMessage) return;

    const userMessage = { role: "user", content: trimmedMessage };
    const newHistory = [...history, userMessage];
    
    setHistory(newHistory);
    setMessage("");
    setError(null);
    setLoading(true);

    try {
      const response = await fetch("https://satokazuma1.pythonanywhere.com/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ history: newHistory, message: trimmedMessage }),
      });

      if (!response.ok) {
        throw new Error(`${response.status} - ${await response.text()}`);
      }

      const result = await response.json();
      setHistory([...newHistory, { role: "assistant", content: result.answer }]);
    } catch (err) {
      setError(err.message || "Failed to connect to the chatbot server.");
      setMessage(trimmedMessage);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    
    <Col lg={12} className="chatbot-container">
    <h2>Wanna know more about me ? ask this chatbot right here</h2>
    <br></br>
      <Card className="chatbot-card">
        <Card.Header className="chatbot-header">
          <div className="header-content">
            <Robot size={24} className="me-2" />
            <h5 className="mb-0">AI Assistant</h5>
          </div>
          <Badge className="message-counter">
            {history.length} messages
          </Badge>
        </Card.Header>
        
        <Card.Body className="chatbot-body">
          <div className="chatbot-messages">
            {history.length === 0 ? (
              <div className="empty-state">
                <Robot size={48} className="empty-icon" />
                <h6>How can I help you today?</h6>
                <p className="empty-text">Ask me anything and I'll do my best to assist!</p>
              </div>
            ) : (
              history.map((msg, index) => (
                <div
                  key={index}
                  className={`message-bubble ${msg.role === "user" ? "user-message" : "bot-message"}`}
                >
                  <div className="message-header">
                    {msg.role === "user" ? (
                      <Person size={14} className="me-1" />
                    ) : (
                      <Robot size={14} className="me-1" />
                    )}
                    <strong>{msg.role === "user" ? "You" : "Assistant"}</strong>
                  </div>
                  <div className="message-content">{msg.content}</div>
                </div>
              ))
            )}
            <div ref={messagesEndRef} />
          </div>

          {error && (
            <Alert variant="danger" className="error-alert">
              {error}
            </Alert>
          )}
        </Card.Body>

        <Card.Footer className="chatbot-footer">
          <Form onSubmit={handleSubmit} className="message-form">
            <Row className="g-2">
              <Col xs={9} md={10}>
                <Form.Control
                  as="textarea"
                  rows={1}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Type your message..."
                  disabled={loading}
                  className="message-input"
                />
              </Col>
              <Col xs={3} md={2}>
                <Button
                  type="submit"
                  disabled={loading || !message.trim()}
                  className="send-button"
                >
                  {loading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    <SendFill size={18} />
                  )}
                </Button>
              </Col>
            </Row>
          </Form>
        </Card.Footer>
      </Card>
    </Col>
  );
};