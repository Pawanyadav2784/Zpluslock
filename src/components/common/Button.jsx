function Button({ children, href, type = "button", className = "", onClick }) {
  if (href) {
    return (
      <a className={`btn ${className}`} href={href} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={`btn ${className}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
