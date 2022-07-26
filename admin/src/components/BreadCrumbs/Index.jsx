import React from "react";
import { FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";

export default function Index({ details }) {
  return (
    <div className="mr-auto mt-3">
      <div className="flex items-center dark:text-white">
        {details.map((crumb, index) => {
          if (crumb.isLink && index !== details.length) {
            return (
              <div key={nanoid()} className="flex items-center">
                <Link to={crumb.link}>
                  <p className="text-base">{crumb.name}</p>
                </Link>
                <span className="mx-1 mt-1.5">
                  <FiChevronsRight />{" "}
                </span>
              </div>
            );
          }
          return (
            <p key={nanoid()} className="text-base truncate">
              {crumb.name}
            </p>
          );
        })}
      </div>
    </div>
  );
}
