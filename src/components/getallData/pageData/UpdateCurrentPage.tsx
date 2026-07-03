"use client"

import { useEffect } from "react"
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";


import GetAllPage from "./GetAllPage";

import dynamic from 'next/dynamic';
import { setCurrentPages, setEditMode } from "@/lib/store/pages/pagesSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";
import { SUPPORTED_LOCALES } from "@/lib/i18n";

const EditModeToggle = dynamic(() => import('@/components/EditMode/EditModeToggle/EditModeToggle'), { ssr: false });

const UpdateCurrentPage = () => {

  const {authUser,isAuthenticated}= useSelector((state:RootState)=>state.auth)

  const { allPages } = useSelector((state: RootState) => state.pages)
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const hasLocalePrefix = SUPPORTED_LOCALES.includes(segments[0]);
  const slug = hasLocalePrefix ? (segments[1] || "home") : (segments[0] || "home");

  const dispatch = useAppDispatch()
  useEffect(() => {

    if (allPages && 
      allPages?.length > 0 
      && slug) {
      const data = allPages.find((page: any) => page.slug === slug)
      if (data) {
        dispatch(setCurrentPages(data))
        return;
      } 
      
    }
  }, [allPages, slug])

  useEffect(() => {
  
    if(isAuthenticated && authUser && authUser?.isTenantOwner ){
        dispatch(setEditMode(true))
    }else{
      dispatch(setEditMode(false))
    }
  }, [authUser,isAuthenticated]);

  return (
    <>
      <GetAllPage />
      <EditModeToggle />
    </>
  )
}
export default UpdateCurrentPage
