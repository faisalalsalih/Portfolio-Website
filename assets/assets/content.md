:root {
--color-primary: #5100ff;
--color-primary-accent: #3300ff;
--color-primary-light: #702dff;
--color-white: #ffffff;
--color-muted: #444343;
--text-color: #010101;
--warning: #ffa500;
--danger: #fc605b;
--success: #33c648;
--bg-base: #efeff1;
--bg-base-rgb: 239, 239, 241;
--bg-secondary: #ffffff;
--bg-secondary-rgb: 255, 255, 255;
--radius-1: 4px;
--radius-2: 0.8rem;
--radius-3: 1.2rem;
--radius-4: 2rem;
--radius-5: 100%;
--gray-border: 1px solid rgba(89, 88, 88, 0.633);
--transition: all 400ms ease;
--gradient-1: linear-gradient(
260deg,
var(--color-primary-accent) 0%,
var(--color-primary) 100%
);
--box-shadow-1: 0 4px 8px rgba(0, 0, 0, 0.2);
--border-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.075),
0 0 0 1px hsla(0, 0%, 0%, 0.05), 0 0.3px 0.4px hsla(0, 0%, 0%, 0.02),
0 0.9px 1.5px hsla(0, 0%, 0%, 0.045), 0 3.5px 6px hsla(0, 0%, 0%, 0.09);
}

[data-theme="dark"] {
--color-muted: #a1a0a0;
--text-color: #ffffff;
--bg-base: #0a0a0c;
--bg-base-rgb: 10, 10, 12;
--bg-secondary: #171719;
--bg-secondary-rgb: 23, 23, 25;
--gray-border: 1px solid rgba(70, 68, 68, 0.633);
--box-shadow-1: 0 4px 8px rgba(185, 185, 189, 0.2);
--border-shadow: inset 0 0 0.5px 1px hsla(0, 0%, 100%, 0.188),
0 0 0 1px hsla(0, 2%, 13%, 0.05), 0 0.3px 0.4px hsla(0, 2%, 13%, 0.05),
0 0.9px 1.5px hsla(0, 2%, 36%, 0.045), 0 3.5px 6px hsla(0, 1%, 20%, 0.09);
}
