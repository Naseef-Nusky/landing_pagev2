import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Item = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`fusion-accordian fusion-toggle-icon-unboxed border-[2px] border-[#1b1bab] ${open ? 'bg-[#1b1bab] text-white' : 'bg-[#eff9f9] text-black'}`}>
      <button
        onClick={() => setOpen((v) => !v)}
        className={`panel-title w-full text-left px-5 py-4 flex items-center justify-between ${open ? 'active' : ''}`}
      >
        <span className={`font-semibold ${open ? 'text-white' : 'text-black'}`}>{q}</span>
        <span className={`fa-fusion-box w-6 h-6 inline-flex items-center justify-center rounded-full border ${open ? 'border-white/80 text-white' : 'border-[#1b1bab] text-[#1b1bab]'}`}>
          <ChevronDown className={`w-6 h-6 transition-transform duration-200 ${open ? 'rotate-180' : 'rotate-0'}`} />
        </span>
      </button>
      {open && (
        <div className="px-5 pb-5 leading-7 text-white">
          {a}
        </div>
      )}
    </div>
  );
};

const AccordionFAQ = () => {
  const items = [
    {
      q: 'How Much Does a Private Investigator Cost?',
      a:
        "If you're asking, 'How much does a private investigator cost?' the answer depends on the type of investigation required. At Henderson Thomas Investigations, we provide affordable private investigator services tailored to your needs. Whether you need a detective private eye, legal investigator, or corporate private investigator, our pricing is transparent, competitive, and designed to deliver results.",
    },
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container mx-auto px-4 space-y-4">
        {items.map((it, idx) => (
          <Item key={idx} q={it.q} a={it.a} />
        ))}
      </div>
    </section>
  );
};

export default AccordionFAQ;
