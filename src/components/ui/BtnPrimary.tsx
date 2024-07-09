import "./style/BtnPrimaryStyle.css";
const BtnPrimary = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className="buttons">
      <button className="btn">
        <span></span>
        <p data-start="good luck!" data-text={text} data-title={title}></p>
      </button>
    </div>
  );
};

export default BtnPrimary;
