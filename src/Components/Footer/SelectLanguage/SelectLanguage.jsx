import "./select-languagea.scss";
import { useDispatch, useSelector } from "react-redux";
import england from "./select-language-assets/flags/Flags.svg";
import albania from "./select-language-assets/flags/albania.svg";

import SingleLanguage from "./SingleLanguage/SingleLanguage";
import arrow from '../SelectLanguage/select-language-assets/flags/Polygon 3.svg'
import { languageAction } from "../../../store/Slice/languageSlice";



function SelectLanguage({mobileNevClasses, dropdownClasses, arrowClasses, selectedFlagClass}) {
  const dispatch = useDispatch();
  const language = useSelector((state) => state.language.language);

  const languages = [
    { value: "en-GB", lang: "English", flag: england },
    { value: "sq-AL", lang: "Albanian", flag: albania },
    // { value: "de-DE", lang: "German", flag: german },
    // { value: "fr-FR", lang: "French", flag: france },
    // { value: "it-IT", lang: "Italian", flag: italy },
    // { value: "es-ES", lang: "Spanish", flag: spain },
    // { value: "tr-TR", lang: "Turkish", flag: turkey },
    // { value: "pr-PR", lang: "Portuguese", flag: portugal },
    // { value: "rs-RS", lang: "Russian", flag: russia },
    // { value: "ch-CH", lang: "Chinese", flag: china },
    // { value: "jp-JP", lang: "Japanese", flag: japan },
  ];

  const selectedFlag =
    languages.find((lang) => lang.value === language)?.flag || england;

  const handleLanguageChange = (language) => {
    dispatch(languageAction.chooseLanguage(language));
  };

  return (
    <div className={`select-language  ${mobileNevClasses}`}>
      <img src={selectedFlag} alt="selected-flag" className={`selected-flag  ${selectedFlagClass}`} />
      {languages.find((lang) => lang.value === language)?.lang || "English"}
      <svg className={`language-arrow  ${arrowClasses}`} xmlns="http://www.w3.org/2000/svg" width="8" height="5" viewBox="1719.75 9715 8 5"><path d="m1723.75 9720-4-5h8z" fill="#fff" fill-rule="evenodd" data-name="Polygon 3"/></svg>
    

      <div className={`dropdown-languages  ${dropdownClasses}`}>
        {languages
          .sort((a, b) => a.lang.localeCompare(b.lang))
          .map((thisLang, i) => (
            <SingleLanguage
              value={thisLang.value}
              key={i}
              handleLanguageChange={() =>
                handleLanguageChange(thisLang.value)
              }
              styles={thisLang.value === language && "selected"}
              language={thisLang.lang}
              flag={thisLang.flag}
            />
          ))}
      </div>
    </div>
  );
}

export default SelectLanguage;
