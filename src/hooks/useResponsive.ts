import { useMediaQuery } from "react-responsive";

const useResponsive = () => {
  const isXS = useMediaQuery({ query: "(min-width: 480px)" });
  const isSM = useMediaQuery({ query: "(min-width: 640px)" });
  const isMD = useMediaQuery({ query: "(min-width: 768px)" });
  const isLG = useMediaQuery({ query: "(min-width: 1024px)" });
  const isXL = useMediaQuery({ query: "(min-width: 1280px)" });
  const is2XL = useMediaQuery({ query: "(min-width: 1536px)" });
  const is3XL = useMediaQuery({ query: "(min-width: 1920px)" });

  return {
    isXS,
    isSM,
    isMD,
    isLG,
    isXL,
    is2XL,
    is3XL,
  };
};

export default useResponsive;
