import React from "react";

function ButtonAction({ text, action, href }) {
  if (href) {
    return (
      <a href={href} className="px-4 py-2 text-white rounded bg-primary">
        {text}
      </a>
    );
  }

  return (
    <button
      onClick={action}
      className="px-4 py-2 text-white rounded bg-primary"
    >
      {text}
    </button>
  );
}

export default ButtonAction;
