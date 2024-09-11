import { configureStore } from "@reduxjs/toolkit";
import languageSlice from "./Slice/languageSlice";

const store = configureStore({
  reducer: { language: languageSlice.reducer },
});

export default store;