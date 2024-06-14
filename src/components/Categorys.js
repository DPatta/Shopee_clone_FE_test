import Image from "next/image";
import React from "react";

export default function Categorys(prpps) {
  return (
    <div>
      <div>
        <div>
          <Image
            src={prpps.image}
            alt={`category-${index}`}
            width={200}
            height={200}
          />
        </div>
        <div>
            <p>{prpps.category}</p>
        </div>
      </div>
    </div>
  );
}
