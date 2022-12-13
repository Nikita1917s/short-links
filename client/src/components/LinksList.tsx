import React, { FC } from "react";
import { Link } from "react-router-dom";
import { LinkCardProps } from "./LinkCard";


interface LinksListProps {
    links: LinkCardProps[],
}

export const LinksList: FC<LinksListProps> = ({ links }) => {
  if (!links.length) {
    return <p className="center">No Links yet</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>№</th>
          <th>Original</th>
          <th>Short</th>
          <th>Open</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link: LinkCardProps, index: number) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Open</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
