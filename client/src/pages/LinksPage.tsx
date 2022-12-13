import React, { FC, useCallback, useContext, useEffect, useState } from "react";
import { LinkCardProps } from "../components/LinkCard";
import { LinksList } from "../components/LinksList";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import useHttp from "../hooks/http.hooks";

export const LinksPage: FC = () => {
  const [links, setLinks] = useState<LinkCardProps[]>([]);
  const { loading, request } = useHttp();
  const { token } = useContext(AuthContext);

  const fetchLinks = useCallback(async () => {
    try {
      const fetched = await request("/api/link", "GET", null, {
        Authorization: `Bearer ${token}`,
      });
      setLinks(fetched)
    } catch (e) {}
  }, [request, token]);

  useEffect(() => {
    fetchLinks();
  }, [fetchLinks]);

  if (loading) {
    return <Loader/>
  }
  return <> {!loading && <LinksList links={links} />}</>;
};
