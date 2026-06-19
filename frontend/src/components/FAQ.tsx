import React, { useState } from 'react';
import '../styles/FAQ.css';

const faqs = [
  {
    question: 'How should JARVIS address the user?',
    answer: 'JARVIS addresses the user as “Sir” by default while staying professional, concise, and respectful.',
  },
  {
    question: 'What can this assistant help with?',
    answer: 'It can answer questions, write and debug code, summarize information, generate ideas, and support learning or career planning.',
  },
  {
    question: 'How does JARVIS handle unclear requests?',
    answer: 'When a request is ambiguous, JARVIS asks targeted clarifying questions before proceeding.',
  },
];

const FAQ: React.FC = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  return (
    <section className="faq" aria-labelledby="faq-title">
      <div className="faq-container">
        <p className="eyebrow">FAQ</p>
        <h2 id="faq-title">Operating principles</h2>
        {faqs.map((item, index) => {
          const isOpen = activeFaq === index;
          return (
            <article className="faq-item" key={item.question}>
              <button className="faq-question" type="button" onClick={() => setActiveFaq(isOpen ? -1 : index)} aria-expanded={isOpen}>
                {item.question}
                <span className={`icon ${isOpen ? 'open' : ''}`}>⌄</span>
              </button>
              {isOpen && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default FAQ;
