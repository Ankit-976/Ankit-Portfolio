import { lenis } from "../Layout";

const Button = (props) => {
  const textColor = props.color === "#000000" ? "white" : "black";

      function scrollTo(section) {
        lenis.scrollTo(`#${section}`, {
          duration: 2.5,
          easing: (t) => 1 - Math.pow(1 - t, 3),
        });
      }

  return (
    <div
      className={` ${textColor === 'white' ? 'text-white' : 'text-black'} md:h-12 h-13 w-full sm:w-50 lg:w-40 flex justify-center items-center border border-[#e9c349] cursor-pointer font-['Space_Grotesk'] tracking-wider text-[0.8rem] font-semibold`}
      style={{backgroundColor: props.color}} onClick = { () => scrollTo(props.section)}
    >
      {props.message}
    </div>
  );
};

export default Button;
