import React from 'react';

type Message = {
  sender: 'user' | 'jarvis';
  text: string;
};

const messages: Message[] = [
  { sender: 'user', text: 'Can you help me build a React feature?' },
  { sender: 'jarvis', text: 'Certainly, Sir. I will clarify the goal, outline the steps, then provide complete working code.' },
  { sender: 'user', text: 'Keep it concise and professional.' },
  { sender: 'jarvis', text: 'Understood, Sir. I will use clear headings, bullets, and practical examples where useful.' },
];

const ChatDemo: React.FC = () => (
  <section id="demo" className="section demo-section">
    <div>
      <p className="eyebrow">Interaction style</p>
      <h2>Professional, respectful, and action-oriented.</h2>
      <ul className="prompt-list">
        <li>Sir, I can draft a study plan in minutes.</li>
        <li>Sir, I can review code and suggest improvements.</li>
        <li>Sir, I can summarize dense information clearly.</li>
      </ul>
    </div>
    <div className="chat-panel" aria-label="Chat demonstration">
      {messages.map((message) => (
        <div className={`message ${message.sender}`} key={`${message.sender}-${message.text}`}>
          <strong>{message.sender === 'jarvis' ? 'JARVIS' : 'You'}</strong>
          <p>{message.text}</p>
        </div>
      ))}
    </div>
  </section>
);

export default ChatDemo;
