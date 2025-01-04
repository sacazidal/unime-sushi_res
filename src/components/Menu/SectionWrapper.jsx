import { useEffect /* useRef */ } from "react";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SectionWrapper = ({ id, children }) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.9,
  });

  useEffect(() => {
    if (inView) {
      navigate(`#${id}`, { replace: true }); // Обновляем URL
    }
  }, [inView, id, navigate]);

  /* const SectionWrapper = ({ id, children }) => {
  const navigate = useNavigate();
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const isScrolling = useRef(false);

  useEffect(() => {
    if (inView && !isScrolling.current) {
      navigate(`#${id}`, { replace: true });
    }
  }, [inView, id, navigate]);

  useEffect(() => {
    const handleScroll = () => {
      isScrolling.current = true;
      clearTimeout(isScrolling.timer);
      isScrolling.timer = setTimeout(() => {
        isScrolling.current = false;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []); */

  return (
    <section
      id={id}
      ref={ref}
      className="py-10 min-h-screen"
    >
      {children}
    </section>
  );
};

export default SectionWrapper;
