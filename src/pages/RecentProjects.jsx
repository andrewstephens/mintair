import { useEffect } from "react";

export default function RecentProjects() {
  useEffect(() => {
    if (window.rwlPlugin) {
      window.rwlPlugin.rescan();
      window.rwlPlugin.init('https://app.realworklabs.com', '1A_afHLFCIX6JXeK');
    }
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