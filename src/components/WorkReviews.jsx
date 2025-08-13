import { useEffect, useRef } from "react"

const WorkReviews = () => {
    const scriptRef = useRef(null);
    const eventListenerRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        const initializeWidget = () => {
            if (window.rwlPlugin && containerRef.current) {
                // Clear any existing content
                containerRef.current.innerHTML = '';
                
                // Reinitialize the plugin
                try {
                    window.rwlPlugin.init('https://app.realworklabs.com', '1A_afHLFCIX6JXeK');
                } catch (error) {
                    console.warn('RWL Plugin initialization error:', error);
                    // If init fails, try to destroy and reinit
                    if (window.rwlPlugin.destroy) {
                        window.rwlPlugin.destroy();
                    }
                    setTimeout(() => {
                        window.rwlPlugin.init('https://app.realworklabs.com', '1A_afHLFCIX6JXeK');
                    }, 100);
                }
            }
        };

        // Check if script is already loaded
        if (window.rwlPlugin) {
            initializeWidget();
            return;
        }

        // Check if script is already in DOM
        const existingScript = document.querySelector('script[src*="realworklabs.com/static/plugin/loader.js"]');
        
        if (existingScript) {
            // Script exists but plugin might not be ready yet
            const handlePluginReady = () => {
                initializeWidget();
            };

            if (window.rwlPlugin) {
                initializeWidget();
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
            initializeWidget();
        };

        window.addEventListener('rwlPluginReady', handlePluginReady, false);
        eventListenerRef.current = handlePluginReady;
        
        document.body.appendChild(script);

        return () => {
            // Clean up event listener
            if (eventListenerRef.current) {
                window.removeEventListener('rwlPluginReady', eventListenerRef.current, false);
            }
            
            // Try to destroy the plugin instance if it exists
            if (window.rwlPlugin && window.rwlPlugin.destroy) {
                try {
                    window.rwlPlugin.destroy();
                } catch (error) {
                    console.warn('RWL Plugin destroy error:', error);
                }
            }
            
            // Clear the container
            if (containerRef.current) {
                containerRef.current.innerHTML = '';
            }
            
            // Only remove script if we created it and it's still in DOM
            if (scriptRef.current && scriptRef.current.parentNode) {
                document.body.removeChild(scriptRef.current);
            }
        };
    }, []);

    return (
        <div id="rwl-neighborhoodz" ref={containerRef}></div>
    )
}

export default WorkReviews;