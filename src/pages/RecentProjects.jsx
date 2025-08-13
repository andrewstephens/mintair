import { useEffect, useRef } from "react";

export default function RecentProjects() {
  const scriptLoadedRef = useRef(false);
  const pluginInitializedRef = useRef(false);

  useEffect(() => {
    // Only load script once globally
    if (!scriptLoadedRef.current) {
      const script = document.createElement('script');
      script.src = `https://app.realworklabs.com/static/plugin/loader.js?v=${new Date().getTime()}`;
      script.onload = () => {
        scriptLoadedRef.current = true;
      };
      document.head.appendChild(script);
    }

    // Handle plugin initialization
    const handlePluginReady = () => {
      if (!pluginInitializedRef.current && window.rwlPlugin) {
        window.rwlPlugin.init('https://app.realworklabs.com', '1A_afHLFCIX6JXeK');
        pluginInitializedRef.current = true;
      }
    };

    // If plugin is already ready, initialize immediately
    if (window.rwlPlugin && !pluginInitializedRef.current) {
      handlePluginReady();
    } else {
      // Otherwise wait for the ready event
      window.addEventListener('rwlPluginReady', handlePluginReady, false);
    }

    // Cleanup function
    return () => {
      window.removeEventListener('rwlPluginReady', handlePluginReady, false);
      // Reset initialization flag when component unmounts
      pluginInitializedRef.current = false;
    };
  }, []);
  return (
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl pt-5 mb-10">
          Recent Projects
        </h1>
        <div id="rwl-output"></div>
      </div>
    </div>
  );
}