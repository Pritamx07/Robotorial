import React, { useEffect, useState } from "react";

// --- Counter Component ---
const Counter = ({ target, label, isVisitorCounter }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!target || target === 0) return;

    // If it's the visitor counter, we want it to feel "live" 
    // instead of counting from 0 to 1000+ every time.
    if (isVisitorCounter) {
      setCount(target); 
      return;
    }

    // Standard animation for smaller numbers (Teachers, Students)
    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [target, isVisitorCounter]);

  return (
    <div style={styles.card}>
      <h2 style={styles.number}>{count.toLocaleString()}+</h2>
      <p style={styles.label}>{label}</p>
    </div>
  );
};

// --- Main Stats Section ---
export default function StatsSection() {
  const [visitors, setVisitors] = useState(0);
  const isFetched = React.useRef(false); // Ref to track if we've already hit the API

  useEffect(() => {
    // If we've already fetched in this session, don't do it again
    if (isFetched.current) return;
    
    isFetched.current = true;

    const apiURL = "https://api.counterapi.dev/v1/robotorial_official/visits/up";

    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        if (data && data.count) {
          setVisitors(data.count);
        }
      })
      .catch((err) => {
        console.error("Counter Error:", err);
        setVisitors(1250); 
      });
  }, []);

  return (
    <section style={styles.section}>
      <Counter target={visitors} label="Website Visitors" isVisitorCounter={true} />
      <Counter target={16} label="Students Enrolled" />
      <Counter target={7} label="Teachers" />
    </section>
  );
}

const styles = {
  section: {
    display: "flex",
    justifyContent: "center",
    gap: "60px",
    padding: "80px 20px",
    background: "#0b1120",
    textAlign: "center",
    flexWrap: "wrap",
    fontFamily: "sans-serif",
  },
  card: { minWidth: "200px" },
  number: {
    fontSize: "48px",
    color: "#3b82f6",
    marginBottom: "10px",
  },
  label: {
    fontSize: "18px",
    color: "#94a3b8",
  },
};
