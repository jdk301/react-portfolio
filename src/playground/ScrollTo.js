const scrollTo = (ele) => {
  ele.scrollIntoView({
    behavior: "smooth",
    block: "start,",
  });
};

export default scrollTo;
