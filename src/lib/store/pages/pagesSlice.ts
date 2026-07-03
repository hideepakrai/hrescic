import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { PageBlock } from "@/lib/data/pageLoader";

interface PageState {
  currentPageSlug: string | null;
  currentSections: PageBlock[];
  editableMode: boolean;
}

const initialState: PageState = {
  currentPageSlug: null,
  currentSections: [],
  editableMode: false,
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setCurrentPageBySlug(state, action: PayloadAction<{ slug: string; sections: PageBlock[] }>) {
      state.currentPageSlug = action.payload.slug;
      state.currentSections = action.payload.sections;
    },
    updatePageField(state, action: PayloadAction<{ sectionId: string; propPath: string; value: unknown }>) {
      const section = state.currentSections.find((s) => s.id === action.payload.sectionId);
      if (section?.props) {
        const keys = action.payload.propPath.split(".");
        let target: Record<string, unknown> = section.props;
        for (let i = 0; i < keys.length - 1; i++) {
          if (target[keys[i]] && typeof target[keys[i]] === "object") {
            target = target[keys[i]] as Record<string, unknown>;
          }
        }
        target[keys[keys.length - 1]] = action.payload.value;
      }
    },
    setEditableMode(state, action: PayloadAction<boolean>) {
      state.editableMode = action.payload;
    },
  },
});

export const { setCurrentPageBySlug, updatePageField, setEditableMode } = pagesSlice.actions;
export default pagesSlice.reducer;
