import React, { JSX, useState } from "react";

type PanelProps = {
    children: JSX.Element[];
};

export default function Panel({ children }: PanelProps) {
    const [open, setOpen] = useState(true);
    return (
      <section className="panel">
        <button onClick={() => setOpen(!open)}>
          {open ? 'Collapse' : 'Expand'}
        </button>
        {open && children}
      </section>
    );
  }
  