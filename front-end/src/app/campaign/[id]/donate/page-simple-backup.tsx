'use client';

import React from 'react';
import { useParams } from 'next/navigation';

export default function SimpleDonatePage() {
  const params = useParams();
  const campaignId = params.id;

  return (
    <div style={{ backgroundColor: '#ffff00', minHeight: '100vh', padding: '20px' }}>
      <h1 style={{ fontSize: '3rem', color: '#000', marginBottom: '20px' }}>
        Simple Donate Page
      </h1>
      <p style={{ fontSize: '1.5rem', color: '#000' }}>
        Campaign ID: {campaignId}
      </p>
      <p style={{ fontSize: '1.2rem', color: '#000' }}>
        This is a test page to check if the routing is working.
      </p>
      <div style={{ 
        backgroundColor: '#ff0000', 
        padding: '20px', 
        marginTop: '20px',
        color: '#fff'
      }}>
        <p>This red box should be visible if the page is rendering correctly.</p>
      </div>
    </div>
  );
}
