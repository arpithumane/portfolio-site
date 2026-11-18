---
title: Creating Beautiful Animations with Framer Motion
date: 2024-11-10
excerpt: Master the art of creating smooth, performant animations using Framer Motion in React.
---

# Creating Beautiful Animations with Framer Motion

Framer Motion is a powerful animation library for React that makes it incredibly easy to create smooth, performant animations. Let's explore how to use it effectively.

## What is Framer Motion?

Framer Motion is a production-ready motion library for React. It simplifies the process of animating components with a clean API and excellent performance.

## Basic Animations

Here's a simple example of a component that animates on mount:

```jsx
import { motion } from 'framer-motion';

export default function AnimatedBox() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Hello, Framer Motion!
    </motion.div>
  );
}
```

## Scroll-triggered Animations

One of the coolest features is scroll-triggered animations:

```jsx
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  This animates when it comes into view!
</motion.div>
```

## Hover Effects

Create interactive hover effects:

```jsx
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Click me!
</motion.button>
```

## Conclusion

Framer Motion makes animation development a joy. With its intuitive API and powerful features, you can create stunning interactive experiences with minimal effort.
