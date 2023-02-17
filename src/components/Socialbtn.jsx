import '../assets/css/socialBtn.css'

const Socialbtn = () => {
    const linkedin = () => {
        window.location.href = "https://www.linkedin.com/in/juanhernanlopezsuaste/";
      };
      const github = () => {
        window.location.href = "https://github.com/JHernanLS92";
      };
  return (
    <div className="Socialbtn">
      <div className="btn-group-horizontal socialSection">
        <button type="button" className="linked" onClick={linkedin}>
          <i className="fa-brands fa-linkedin-in"></i>
        </button>
        <button type="button" className="git" onClick={github}>
          <i className="fa-brands fa-github"></i>
        </button>
        <button type="button" className="CV">
          <a href="./CV-JuanHernanLopezSuaste.pdf" download className="cv">
            CV
          </a>
        </button>
      </div>
    </div>
  );
};

export default Socialbtn;
