import "./App.css";

const Hello = () => {
  function showTopAlert() {
    window.alert("Hello, what is isseu");
  }

  return (
    <div>
      <button onClick={showTopAlert}>Press Me</button>
    </div>
  );
};

export default Hello;
