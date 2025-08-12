import { useEffect } from "react"

const WorkReviews = () => {

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://app.realworklabs.com/static/plugin/loader.js?v=" + new Date().getTime();
        script.async = true;
        document.body.appendChild(script);

        window.addEventListener('rwlPluginReady', () => {
            window.rwlPlugin.init('https://app.realworklabs.com', '1A_afHLFCIX6JXeK');
        }, false);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div id="rwl-neighborhood"></div>
    )
}

export default WorkReviews;