import Header from "./Header";
import Concepts from "./Concepts";
const ConceptRows = (props) => {
  return (
    <div>
      <Header />
      <Concepts items={props} />
    </div>
  );
};

export default ConceptRows;
