interface BlogType {
    slug: string;
    content: string;
    title: string;
    description: string;
    imageUrl?: string;
  }
const sampleblogs: BlogType[] = [
    {
      slug: 'how-to-learn-react-in-2025',
      title: 'How to Learn React in 2025',
      description: 'A complete guide to mastering React with hands-on examples and updated best practices.',
      content: `
  ## Introduction
  React continues to evolve in 2025 with new features like **React Server Components** and improved performance.
  
  ## Topics Covered
  - JSX & Components
  - Hooks & Context API
  - React Router
  - Next.js Integration
  - State Management with Zustand
  
  ## Conclusion
  With the right projects and resources, learning React in 2025 is easier and more powerful than ever.
      `.trim(),
    },
    {
      slug: 'tailwind-css-tips-and-tricks',
      title: 'Tailwind CSS Tips & Tricks',
      description: 'Boost your UI development speed with these lesser-known Tailwind tricks.',
      content: `
  ## Utility-First Magic
  Tailwind lets you style rapidly without writing custom CSS.
  
  ## Tips
  - Use \`@apply\` in CSS for reusable classes
  - Combine responsive and dark mode utilities
  - Explore Tailwind Plugins
  
  ## Conclusion
  Tailwind CSS can save hours of work and make your styles more consistent.
      `.trim(),
    },
    {
      slug: 'state-management-in-modern-web-apps',
      title: 'State Management in Modern Web Apps',
      description: 'Explore the best strategies for managing state in React apps using tools like Redux, Zustand, or Context API.',
      content: `
  ## What's the Problem?
  Managing state across components can become complex.
  
  ## Options Compared
  - **Redux**: Great for global, structured state
  - **Zustand**: Lightweight and simple
  - **Context API**: Built into React, good for light use
  
  ## Best Practice
  Choose the right tool based on app size and team familiarity.
      `.trim(),
    },
    {
      slug: 'top-10-vs-code-extensions',
      title: 'Top 10 VS Code Extensions for Developers',
      description: 'Boost your productivity with these must-have extensions for frontend and backend development.',
      content: `
  ## Must-Have Extensions
  1. **Prettier** – Code formatter
  2. **ESLint** – Code linting
  3. **GitLens** – Git insights
  4. **Tailwind IntelliSense**
  5. **Live Server**
  
  ## Productivity Boost
  These tools help automate tasks, catch errors, and improve workflow.
      `.trim(),
    },
    {
      slug: 'future-of-web-development-trends',
      title: 'The Future of Web Development: Trends to Watch',
      description: 'From AI-assisted coding to WebAssembly — stay ahead with what’s next in web dev.',
      content: `
  ## Top Trends
  - **AI-assisted coding** (e.g., GitHub Copilot)
  - **WebAssembly** for performance
  - **Server Components** in React
  
  ## What It Means
  Web dev is becoming faster, smarter, and more powerful.
  
  ## Stay Updated
  Follow industry blogs and try building with emerging tools.
      `.trim(),
    },
    {
      slug: 'understanding-javascript-closures',
      title: 'Understanding JavaScript Closures with Visual Examples',
      description: 'Learn closures in JS through intuitive visuals and real-world use cases to deepen your understanding.',
      content: `
  ## What is a Closure?
  A closure is a function that retains access to its scope even when executed outside of it.
  
  ## Example
  \`\`\`js
  function outer() {
    let counter = 0;
    return function inner() {
      counter++;
      return counter;
    };
  }
  const count = outer();
  console.log(count()); // 1
  console.log(count()); // 2
  \`\`\`
  
  ## Why it Matters
  Closures are essential for encapsulation, memoization, and maintaining state.
      `.trim(),
    },
  ];

  export default sampleblogs