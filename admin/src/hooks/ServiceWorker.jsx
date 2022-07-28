import { useState, useCallback, useEffect } from "react";
import * as serviceWorkerRegistration from "../serviceWorkerRegistration";

export default function useServiceWorker() {
  const [waitingWorker, setWaitingWorker] = useState(null);
  const [showReload, setShowReload] = useState(false);

  const onSWupdate = useCallback((registration) => {
    setShowReload(true);
    setWaitingWorker(registration.waiting);
  }, []);

  const reloadPage = useCallback(() => {
    waitingWorker?.postMessage({ type: "SKIP_WAITING" });
    setShowReload(false);
    window.location.reload();
  }, [waitingWorker]);

  useEffect(() => {
    serviceWorkerRegistration.register(onSWupdate);
  }, [onSWupdate]);

  return {
    showReload,
    reloadPage,
    waitingWorker,
  };
}
