---
title: "Modern React Patterns for Scalable Apps"
date: "2024-09-12"
readTime: "8 min read"
slug: "modern-react-patterns"
---

# Modern React Patterns for Scalable Apps

React has evolved with new features and patterns for building scalable applications. Let's explore some modern best practices.

## 1. Functional Components & Hooks

Prefer functional components and hooks over class components for cleaner, more reusable code.

```jsx
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```

## 2. Context API for State Management

Use React's Context API for lightweight state sharing.

```jsx
import { createContext, useContext } from "react";
const ThemeContext = createContext("light");
function ThemedButton() {
  const theme = useContext(ThemeContext);
  return <button className={theme}>Click me</button>;
}
```

## 3. Code Splitting with React.lazy

Split code for faster load times.

```jsx
import React, { Suspense } from "react";
const LazyComponent = React.lazy(() => import("./LazyComponent"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

## 4. Custom Hooks

Encapsulate logic in custom hooks for reuse.

```jsx
function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return width;
}
```

## Conclusion

Modern React patterns help you build scalable, maintainable apps. Keep up with the latest features and best practices!
