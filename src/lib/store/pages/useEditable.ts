"use client";

import { useCallback } from "react";
import { useAppDispatch, useAppSelector, useAppStore } from "@/lib/store/hooks";
import { setCurrentPages } from "./pagesSlice";
import { updatePageThunk } from "./pageThunk";

export function useEditable(sectionId: string) {
  const dispatch = useAppDispatch();
  const store = useAppStore();
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);

  const handleChange = useCallback(
    (fieldPath: string) => async (value: string) => {
      const state = store.getState();
      const currentPages = state.pages.currentPages;
      if (!currentPages) return;
      const pageId = (currentPages as any)?.id || (currentPages as any)?._id;

      const cloned = JSON.parse(JSON.stringify(currentPages));
      const secIdx = cloned.content?.findIndex((s: any) => s.id === sectionId);
      if (secIdx === -1 || secIdx === undefined) return;
      const parts = fieldPath.split(".");
      let obj = cloned.content[secIdx];
      for (let i = 0; i < parts.length - 1; i++) {
        if (!obj[parts[i]]) obj[parts[i]] = {};
        obj = obj[parts[i]];
      }
      obj[parts[parts.length - 1]] = value;

      if (pageId) {
        const result = await dispatch(updatePageThunk({ id: pageId, pageData: cloned }));
        if (updatePageThunk.rejected.match(result)) return;
      }

      dispatch(setCurrentPages(cloned));
    },
    [dispatch, store, sectionId],
  );

  return { isEditable, handleChange };
}
