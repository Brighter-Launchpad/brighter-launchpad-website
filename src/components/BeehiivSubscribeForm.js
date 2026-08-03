import { useEffect, useRef } from "react";

const BEEHIIV_FORM_ID = "1af53650-3462-4e64-9200-f61b3ac1d74b";

const BeehiivSubscribeForm = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.setAttribute("data-beehiiv-form", BEEHIIV_FORM_ID);
    container.appendChild(script);

    return () => {
      container.innerHTML = "";
    };
  }, []);

  return <div className="beehiiv-subscribe-form" ref={containerRef} />;
};
export default BeehiivSubscribeForm;
