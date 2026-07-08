"use client"

import { useEffect } from "react"
import { useSelector } from "react-redux";
import { usePathname } from "next/navigation";


import GetAllPage from "./GetAllPage";

import { setCurrentPages, setEditMode } from "@/lib/store/pages/pagesSlice";
import { useAppDispatch } from "@/lib/store/hooks";
import { RootState } from "@/lib/store/store";
import { SUPPORTED_LOCALES } from "@/lib/i18n";

const UpdateCurrentPage = () => {

  const {authUser,isAuthenticated}= useSelector((state:RootState)=>state.auth)

  const { allPages, isEditablePage } = useSelector((state: RootState) => state.pages)
  const pathname = usePathname();
  const segments = pathname.split('/').filter(Boolean);
  const hasLocalePrefix = SUPPORTED_LOCALES.includes(segments[0]);
  // Build full path slug from all segments after the locale prefix
  const pathSegments = hasLocalePrefix ? segments.slice(1) : segments;
  const slug = pathSegments.join('/') || "home";

  const dispatch = useAppDispatch()
  useEffect(() => {

    if (allPages && 
      allPages?.length > 0 
      && slug) {
      // Exact match first
      let data = allPages.find((page: any) => page.slug === slug);

      // If no exact match, try matching when the stored slug has a /sub/ infix
      // e.g. URL: "what-we-do/branding-strategy"  vs stored: "what-we-do/sub/branding-strategy"
      if (!data) {
        data = allPages.find((page: any) => {
          // Remove any /sub/ segment from stored slug and compare
          const normalizedStored = page.slug.replace(/\/sub\//g, '/');
          return normalizedStored === slug;
        });
      }

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

  // Prevent link and button navigation when edit mode is active to facilitate inline editing without page traversal
  useEffect(() => {
    if (!isEditablePage) return;

    const handleLinkClick = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      while (target && target !== document.body) {
        if (target.tagName === 'A' || target.tagName === 'BUTTON') {
          // Exclude Admin Bar and edit controls so dashboard access/mode toggling still works
          if (
            target.closest('[data-annotator-ui="true"]') ||
            target.closest('.edit-mode-control') ||
            target.closest('.admin-bar-class')
          ) {
            return;
          }
          e.preventDefault();
          return;
        }
        target = target.parentElement;
      }
    };

    document.addEventListener('click', handleLinkClick, true);
    return () => {
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, [isEditablePage]);

  return (
    <GetAllPage />
  )
}
export default UpdateCurrentPage
