import { useEffect, useRef } from "react"

const WorkReviews = () => {
    const scriptRef = useRef(null);
    const eventListenerRef = useRef(null);

    useEffect(() => {
        // Check if script is already loaded
        if (window.rwlPlugin) {
            window.rwlPlugin.init('https://app.realworklabs.com', '1A_afHLFCIX6JXeK');
            return;
        }

        // Check if script is already in DOM
        const existingScript = document.querySelector('script[src*="realworklabs.com/static/plugin/loader.js"]');
        
        if (existingScript) {
            // Script exists but plugin might not be ready yet
            const handlePluginReady = () => {
                if (window.rwlPlugin) {
                    window.rwlPlugin.init('https://app.realworklabs.com', '1A_afHLFCIX6JXeK');
                }
            };

            if (window.rwlPlugin) {
                handlePluginReady();
            } else {
                window.addEventListener('rwlPluginReady', handlePluginReady, false);
                eventListenerRef.current = handlePluginReady;
            }
            return;
        }

        // Create and load new script
        const script = document.createElement("script");
        script.src = "https://app.realworklabs.com/static/plugin/loader.js?v=" + new Date().getTime();
        script.async = true;
        scriptRef.current = script;

        const handlePluginReady = () => {
            if (window.rwlPlugin) {
                window.rwlPlugin.init('https://app.realworklabs.com', '1A_afHLFCIX6JXeK');
            }
        };

        window.addEventListener('rwlPluginReady', handlePluginReady, false);
        eventListenerRef.current = handlePluginReady;
        
        document.body.appendChild(script);

        return () => {
            // Clean up event listener
            if (eventListenerRef.current) {
                window.removeEventListener('rwlPluginReady', eventListenerRef.current, false);
            }
            
            // Only remove script if we created it and it's still in DOM
            if (scriptRef.current && scriptRef.current.parentNode) {
                document.body.removeChild(scriptRef.current);
            }
        };
    }, []);

    return (
        <div id="rwl-neighborhood"></div>
    )
}

export default WorkReviews;