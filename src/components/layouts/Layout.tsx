import { PropsWithChildren, useEffect, useState } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return <main id="home">{children}</main>;
};

export default Layout;
