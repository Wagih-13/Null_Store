import Image from "next/image";
import "./brandsStyle.scss";

const Brands = () => {
  return (
    <>
      <div className="brands">
        <div className="brandsContainer">
          <div>
            <Image
              width={100}
              height={35}
              src="/images/brand-1.webp"
              alt="brand"
            />
          </div>
          <div>
            <Image
              width={100}
              height={35}
              src="/images/brand-2.webp"
              alt="brand"
            />
          </div>
          <div>
            <Image
              width={100}
              height={100}
              src="/images/brand-3.webp"
              alt="brand"
            />
          </div>
          <div>
            <Image
              width={100}
              height={35}
              src="/images/brand-4.webp"
              alt="brand"
            />
          </div>
          <div>
            <Image
              width={100}
              height={35}
              src="/images/brand-5.webp"
              alt="brand"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Brands;
