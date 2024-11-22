import React, { useState, useEffect } from 'react';

const Messages = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Ambil data dari localStorage
    const savedMessages = JSON.parse(localStorage.getItem('messages')) || [];
    setMessages(savedMessages);
  }, []);

  const deleteMessage = (index) => {
    // Buat salinan daftar pesan
    const updatedMessages = [...messages];

    // Hapus pesan berdasarkan index
    updatedMessages.splice(index, 1);

    // Simpan kembali ke localStorage
    localStorage.setItem('messages', JSON.stringify(updatedMessages));

    // Perbarui state
    setMessages(updatedMessages);
  };

  return (
    <div style={{ padding: '2rem', color: 'white', backgroundColor: '#000' }}>
      <h1 style={{ marginBottom: '1.5rem', color: '#00ff99' }}>All Messages</h1>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {messages.map((msg, index) => (
          <li
            key={index}
            style={{
              marginBottom: '1.5rem',
              padding: '1rem',
              border: '1px solid #00ff99',
              borderRadius: '8px',
              backgroundColor: '#222',
            }}
          >
            <p>
              <strong>Name:</strong> {msg.name}
            </p>
            <p>
              <strong>Email:</strong> {msg.email}
            </p>
            <p>
              <strong>Message:</strong> {msg.message}
            </p>
            <button
              onClick={() => deleteMessage(index)}
              style={{
                marginTop: '1rem',
                padding: '0.5rem 1rem',
                backgroundColor: '#ff4d4d',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Messages;
