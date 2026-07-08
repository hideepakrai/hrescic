'use client';

import { useAppDispatch, useAppSelector } from '@/lib/store/hooks';
import { setEditMode } from '@/lib/store/pages/pagesSlice';
import { RootState } from '@/lib/store/store';
import { Pencil } from 'lucide-react';
import { useSelector } from 'react-redux';
import { useAnnotatorStore } from '@/components/annotationPlugin/store';

export default function EditModeToggle() {
  const dispatch = useAppDispatch();
  const isEditable = useAppSelector((state) => state.pages.isEditablePage);
  const { isCommentModeActive, toggleCommentMode } = useAnnotatorStore();

  const {authUser ,isAuthenticated}= useSelector((state:RootState)=>state.auth)

  const handleEdit=()=>{
    if(authUser?.role !== "tenant_admin" || !isAuthenticated){
        alert("You are not authorized to edit this page")
        return
    }
    const nextEditable = !isEditable;
    if (nextEditable && isCommentModeActive) {
      toggleCommentMode();
    }
    dispatch(setEditMode(nextEditable));
  }
  return (
    <>
    {authUser && authUser?.role === "tenant_admin" && (
      <button
      onClick={() => handleEdit()}
      className={`fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-mono transition-all duration-200 shadow-lg ${
        isEditable
          ? 'bg-cyan text-black shadow-cyan/30'
          : 'bg-zinc-800 text-zinc-400 hover:bg-zinc-700'
      }`}
      title={isEditable ? 'Disable edit mode' : 'Enable edit mode'}
    >
      <Pencil size={14} strokeWidth={2} />
      {isEditable ? 'Edit Mode ON' : 'Edit Mode OFF'}
    </button>
      )}
    </>
  );
}
