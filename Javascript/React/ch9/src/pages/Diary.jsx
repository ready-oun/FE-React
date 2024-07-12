import { useParams } from "react-router-dom";

const Diary = () => {
  const params = useParams();
  console.log(params);
  return <div>Day {params.id} Diary</div>;
};

export default Diary;
