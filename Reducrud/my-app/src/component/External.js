import { useSyncExternalStore } from "react";

const External = () => {
  const isOnline = useSyncExternalStore(subscribe, getSnapshot);

  function getSnapshot() {
    return navigator.onLine;
  }
  function subscribe(callback) {
    window.addEventListener("online", callback);
    window.addEventListener("offline", callback);
  }
  return (
    <h1 className="text-center mt-5 display-1 fw-bolder">
      {isOnline ? "✅ Online" : "❌ Disconnected"}
    </h1>
  );
};

export default External;
