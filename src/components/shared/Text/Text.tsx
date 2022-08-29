import React from "react";

import styles from "./Text.module.scss";
import { clsx } from "clsx";

const Text = React.forwardRef(({ as, size, children, ...rest }, ref) => {
  const Component = as ?? "p";

  return (
    <Component
      className={clsx(styles.text, styles[size] || styles["body"])}
      ref={ref}
      {...rest}
    >
      {children}
    </Component>
  );
});

Text.displayName = "Text";

export default Text;
