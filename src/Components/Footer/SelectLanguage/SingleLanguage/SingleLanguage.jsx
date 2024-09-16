export default function SingleLanguage({ styles, flag, language, handleLanguageChange}) {
  return (
    <div>
      <div
        className={`single-language  ${styles}`}
        onClick={handleLanguageChange}
      >
        <div className="flag">
          <img src={flag} alt="flag" />
        </div>
        <div className="text">
          <span>{language}</span>
        </div>
      </div>
    </div>
  );
}
