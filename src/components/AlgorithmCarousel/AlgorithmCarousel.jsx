import Slider from "react-slick";
import AlgorithmCard from "../AlgorithmCard/AlgorithmCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import CodeCard from "../CodeCard/CodeCard";
import CodeCard from "../CodeCard/CodeCard"
import algorithms from "./algorithm";


export default function AlgorithmCarousel() {


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 4000,
  };

  return (
    <Slider {...settings}>
      {algorithms.map((content, index) => (
        <AlgorithmCard key={index} title={content.title} description={content.description} code={content.code} language="python"/>
      ))}
      {/* {algorithms.map((content,index) => (
        <CodeCard key={index}
        title={content.title}
        description={content.description}
        code={exampleCode}
        language="javascript"
      />
      ))} */}
    </Slider>
  );
}
