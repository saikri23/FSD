import React, { useEffect, useRef, useState } from "react";

const ImageSlider = () => {
  const [active, setActive] = useState(0);

  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Fresh/GW/Hero/July24/31/NonPrime/31st_Fresh_GW_Hero_PC1x_NC._CB567353185_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Kartik/MAYGTM2022/2024/Prepaid_recharge_3000x1200._CB555882039_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/shoes/2024/GW/July/Marathon/mencampu/3000pc._CB567672813_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img24/Beauty/July/TBS/Updated/final/Global-beauty-store-PCz._CB567977377_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonBusiness/AB_EventMLP/Banner_3000_1200_2407._CB567505146_.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/CookwareDining/Prcha/July/5300---Kitchen---Bergner-sherry-cookware---exclusive-launch-3000X1200._CB569213501_.jpg",
  ];
  const handleNext = () => {
    setActive((active) => (active + 1) % images.length);
  };

  const handlePrevious = () => {
    setActive((active) => (active < 1 ? images.length - 1 : active - 1));
  };

  useEffect(() => {
    const i = setInterval(() => {
      handleNext();
    }, 2000);
    return () => {
      clearInterval(i);
    };
  }, []);

  return (
    <div className="relative flex items-center justify-around">
      <div className="w-20">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAADt7e3w8PBGRkY9PT1NTU3y8vJJSUnr6+tCQkJQUFBAQEBLS0tHR0dSUlLExMTd3d2vr6+YmJjMzMxeXl6Dg4MmJiYYGBgbGxsODg6MjIx0dHRZWVnj4+PT09Mx0NsjAAADTElEQVR4nO2d7VbiQBBEM5ElgGAQEFhZ9f3f0o9dXTHFv8npw62+T9B1pirdMxNC0yRJkiRJkiRJ4k2322zWN9FVjEe3PZQ3jvt5dCUj0c7KP4676FpGoV2UL37fR1czAu2kfOMhupz6tL/KGevogmrzU2DZR1dUmXOLvtNHl1SXocCyiq6pKgOL0h417XIosGyjq6qIsGgpj6CG+L3R/+cUXVY9VAZLmXbRdVVDr+Cyja6rGjKDZcnZW8ylRe9AKygFLkACpUUXHItqgROQQGnRGciialTjtwlSBuUK4tsESaC2KF4gJ4N6VJtxzvJ1Bid0i5IEyv0g6SmKH9XkCvLbBEigHNVIFsVnEN8m8AKlRVf4UQ0kEG9R2ehJT1F8BuUKkixKz6De0U9BFsUfWUiLkp6ieIH4DMr9IH5UIx06yUZPsig+g/opShcIyuCFUQ30KleOalfOhTYBEohvE/pMBiQQn0E5bN+CVhCfQWlR0rGhFgjKoLToLX1UW4EE4i3quaMnZVCuYLaJ60FbtAdZFH9kIS1KeoriBeIzKPeD+FGNZFHZ6HuQQHwG8cM2PYP68oVkUfx2SVqUdC4qBWabuB4utAmQQHwG5bBNsig9g91UWpQjsPkDz2DzArdo05zgFm2aJ7GCIIu+MRsIPDxH11QX/hryc8h/lvL7YXNzJyWSVhE/lxrsLQz2hwZ7fI8s0s/aPLJIP/M2uLcwuHsyuD/0aBr0e3yPLNLfp/HIooFRDSTS3y81ziLoPW+Dd/UtNlMOY7hBFum/XfPIooFR6b8DNvgtt8Hv8Q2+qWDwXQyPLNK/T+ORRfp3ogy+9WXwvTaDb+45Nw2URIMs0r9B65FFg+nGQKLtAEeSiP9vhNz1M7Ad4ByaBmpLnNc2APLahoDttQ0ri/q9G9QT1eAFMdcBjiWRf6eRv7Yh4CDRwKiuP5dmGVWuIqppOGTR4LfEBhL5RrUd4FhGlftF1jmqNOpDdFk10at4ii6rJjKLj/fRZdVEDnDb6KqqorKISqI06iq6psoMJfbRJdVmYNR9dEXV+SlxHV1Qfc6NCnvQ/OWs9b9EVzMKbf+p7wj06Afd9vChbz+PrmQ8ut1msybdmCZJkiRJkiQJmFfv7iMu226OeQAAAABJRU5ErkJggg=="
          alt=""
          onClick={handlePrevious}
        />
      </div>
      <div className="w-[900px]">
        <img src={images[active]} alt="" />
      </div>
      <div className="w-20">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAZlBMVEX///8AAADm5ubz8/MkJCQwMDD19fXw8PBXV1dQUFBZWVlTU1MsLCzk5OQpKSkmJiZeXl5mZmbExMStra2YmJjY2NgfHx9LS0vQ0NCDg4Pr6+sYGBhDQ0MODg6MjIw6Ojpzc3Nra2uMgwEvAAADEklEQVR4nO2d61LbMBSEZVJsbiE0F3IBAn3/l2wKLZPg7Qw/nNH42/2eQDvaoz2KLKWUEEIIIYQQwgjo5ovFpq09ivOx2z41B2ZLqsbVY/OX54vaYzkL0/vmkzukxIfmiEugxHlzwowncXuqsPmBk3j1RSHPqOuvCnESH3oKaUZd9hXClpvVi5DIMupeKGRFf3ujJKKMOrnGz2InJaJqse3F/ntoTGuPa0Amt1IiaRY7KRFlVAOJE1mLqNBo5Yp6T5Joa1TULBrUos5FlFENalHvNFAN3H96VNIs6uUGZVQtEbVfNNj161o0iH5ULToYVeciSaKBUQ0ktuLQBmZUHRqo5WYilxuWUaVEVgMnaxFlVINZdKhFg9DgN3BaIsuoBhJda5G163c1KmoW08AR8N31o45t+A2cQWhoiajlxiE0cmwDIMc2BAyMaiDRwKgOxzZ8ozo0cAa5yP96yuB7VFujonLRITT4Eh0aOLmiopYbgy/8DW7bOOw0pFFRDZxBLTrctsl1aQBaImq5cQgNg+vS/Dc2DBo4LREVGrqBe+1qj2tAdC2+1R7WkGijbmoPa0hkaOxrj2pQVHdzU3tQwzKd9RSua49pUPBziK9D/FqKz0MtENTT4N9+0wJBewv8/hC/x8c/pYX/rc20BkkxQX/mFW9RLRC0yOhOBh8ToKDH16COCZBF8T/j4y2KF8jf0eO3S3iLplUbOdnRj520amMHb1G8wLRqY4dv0Ry+jJy0amMnhy9jh29R+iKDjwn8N/j4O036XhpoBvEX0vGPCuAF4i2KF8i3KP2hJPxrpVogaAbxrwbjn7nC/+UD/m879AziBZIs6pmDeIuSdvQ/LS0KatVMa5AUE7IGQYcvfIvKGcQLJMWEFIgPepBFC30Gyy/LGgRZFC9Q1yCoVdM1SGrVPC0K2g+WN3hMlD19Blcv8BosS7hFSxFbXlIOHlizLXqgd05PE1i2bIsemJMXmQ9OlhqcRf9wHIikoD9i8/hP4HpXeyxnYrd9el9jlm3tkZyPbr5YbMD6QgghhBBCCN/iN2OMJtWmSsaKAAAAAElFTkSuQmCC"
          alt=""
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default ImageSlider;
