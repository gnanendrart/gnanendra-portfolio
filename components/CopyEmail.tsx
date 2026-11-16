'use client';

import { useState } from 'react';
import { CopyIcon, CheckIcon } from './icons';

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Clipboard can be blocked. The address is still visible and linked.
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      className="js-only inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-full border-[1.5px] border-line px-4 text-sm font-semibold transition-colors duration-150 hover:border-accent hover:text-accent"
    >
      {copied ? <CheckIcon size={16} className="text-pass" /> : <CopyIcon size={16} />}
      <span aria-live="polite">{copied ? 'Copied' : 'Copy address'}</span>
    </button>
  );
}
