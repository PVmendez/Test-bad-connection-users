import { useState } from 'react';

export default function Snackbar({ error }: { error: boolean }) {
  const [showSnackbar, setShowSnackbar] = useState<boolean>(error);

  return (
    <div
      className={`fixed bottom-4 right-4 rounded bg-red-600 px-4 py-2 text-white ${
        showSnackbar ? 'opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      Your internet is working very slow
      <button className="ml-2" onClick={() => setShowSnackbar(false)}>
        X
      </button>
    </div>
  );
}
