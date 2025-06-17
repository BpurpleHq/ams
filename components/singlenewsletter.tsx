import Script from "next/script";

const NewsletterSingle = () =>  {
  return (
    <section className="w-full bg-teal-50">
    <div>
      <div id="convertkit-form"></div>
      <iframe
        src="https://fierce-experimenter-6691.kit.com/5e27f24a2d?fbclid=PAZXh0bgNhZW0CMTEAAadcyopg0Mv57-CoIHMlt91bzK_B7LbCu_mbYRQjtTHylIAcHLS6SMXrmnIPlg_aem_EzDT0dsRyYK8PJM-ST-4fg"
        title="ConvertKit Form"
        className="w-full h-screen border-0"
      ></iframe>
    </div>
    </section>
      

  );
}



export default NewsletterSingle;