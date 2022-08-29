import React, { useEffect } from "react";
import Text from "../../shared/Text/Text";

import styles from "./Navigation.module.scss";

const Navigation = () => {
  const config = [
    {
      text: "home",
      href: "#",
    },
    {
      text: "about",
      href: "#",
    },
    {
      text: "blog",
      href: "#",
    },
    {
      text: "work",
      href: "#",
    },
    {
      text: "contact",
      href: "#",
    },
  ];

  return (
    <div className={styles.navigation}>
      <Text as="h2" size="md">
        CODE <br />
        CULT
      </Text>
      <ul className={styles.links}>
        {config.map(({ text, href }) => (
          <li key={text}>
            <Text as="a" size="body" href={href}>
              {text}
            </Text>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navigation;
