import React, { FC, useCallback, useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { LinkCard } from "../components/LinkCard";
import { Loader } from "../components/Loader";
import { AuthContext } from "../context/AuthContext";
import useHttp from "../hooks/http.hooks";

export const DetailPage: FC = () => {
  const {token} = useContext(AuthContext)
  const { request, loading } = useHttp();
  const [link, setLink] = useState<any>(null);
  const linkId = useParams().id

  const getLink = useCallback(async () => {
    try {
      const fetched = await request(`/api/link/${linkId}`, 'GET', null, {
        Authorization: `Bearer ${token}`
      })

      setLink(fetched);
    } catch (e) {
      
    }
  }, [linkId, request, token]);


  useEffect(() => {
    getLink()
  }, [getLink])

  if (loading) {
    return <Loader/>
  }
  
  return (
    <>
      {linkId}
      { !loading && link && <LinkCard link={link} /> }
    </>
  );
};
