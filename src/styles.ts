export const mainStyles = `
  :root {
    --primary-color: #5e72e4;
    --text-color: #2d3748;
    --bg-color: #f7fafc;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: system-ui, -apple-system, sans-serif;
    line-height: 1.6;
    color: var(--text-color);
    background: var(--bg-color);
  }

  .site-header {
    background: white;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    padding: 1rem 0;
    position: sticky;
    top: 0;
  }

  .nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .main-content {
    max-width: 800px;
    margin: 2rem auto;
    padding: 0 1rem;
  }

  .post {
    background: white;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  .post-title {
    font-size: 2.5rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .post-date {
    color: #718096;
    display: block;
    margin-bottom: 2rem;
  }

  .post-content {
    font-size: 1.1rem;
    line-height: 1.8;
  }

  .tag {
    display: inline-block;
    background: #edf2f7;
    padding: 0.25rem 0.75rem;
    border-radius: 9999px;
    margin: 0.25rem;
    font-size: 0.875rem;
    color: #4a5568;
  }

  .site-footer {
    text-align: center;
    padding: 2rem;
    color: #718096;
    border-top: 1px solid #e2e8f0;
  }

  @media (max-width: 768px) {
    .post-title {
      font-size: 2rem;
    }
  }
`