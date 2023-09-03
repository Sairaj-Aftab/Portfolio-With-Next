import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="text-center bg-slate-700">
      <div>
        Powered By{" "}
        <Link className="underline" href="/">
          Sairaj Aftab
        </Link>
      </div>
    </div>
  );
}

export default Footer;
