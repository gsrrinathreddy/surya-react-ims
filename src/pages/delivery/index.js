import { useEffect, useState } from "react";

export default function Delivery() {
  const [del, setDel] = useState(false);

  useEffect(() => {
    setDel("true");
  }, []);
  return <>This page is about your order tracking</>;
}
